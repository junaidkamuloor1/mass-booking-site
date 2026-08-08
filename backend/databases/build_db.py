# build_db.py
#
# Turns the nested `theatres` list into 3 related SQLite tables:
#   theatres  (1)  --<  movies  (many)  --<  showtimes (many)
#
# Run with:  python3 build_db.py
#
# Uses only Python's built-in sqlite3 module — no pip install needed.

import sqlite3
import os
from data import theatres

DB_FILE = "theatres.db"

# Start clean each time we rebuild, so this script is safely re-runnable
if os.path.exists(DB_FILE):
    os.remove(DB_FILE)

conn = sqlite3.connect(DB_FILE)
conn.execute("PRAGMA foreign_keys = ON")
cur = conn.cursor()

# 1. Define the schema.
#    - theatre["id"] from your data is already a natural unique key ('pvr'),
#      so we use it directly as the PRIMARY KEY instead of inventing one.
#    - movies/showtimes get auto-incrementing surrogate keys because
#      titles/times aren't guaranteed unique on their own.
#    - FOREIGN KEY + ON DELETE CASCADE means deleting a theatre auto-
#      deletes its movies and showtimes too — no orphaned rows.
cur.executescript("""
    CREATE TABLE theatres (
        id       TEXT PRIMARY KEY,
        name     TEXT NOT NULL,
        location TEXT,
        screens  INTEGER
    );

    CREATE TABLE movies (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        theatre_id  TEXT NOT NULL REFERENCES theatres(id) ON DELETE CASCADE,
        title       TEXT NOT NULL,
        year        INTEGER,
        duration    TEXT,
        language    TEXT,
        cert        TEXT,
        format      TEXT,
        format_lang TEXT,
        poster      TEXT
    );

    CREATE TABLE showtimes (
        id        INTEGER PRIMARY KEY AUTOINCREMENT,
        movie_id  INTEGER NOT NULL REFERENCES movies(id) ON DELETE CASCADE,
        show_time TEXT NOT NULL
    );

    CREATE INDEX idx_movies_theatre  ON movies(theatre_id);
    CREATE INDEX idx_showtimes_movie ON showtimes(movie_id);
""")

# 2. Walk the nested Python structure and flatten it into the 3 tables,
#    all inside one transaction (Python's sqlite3 starts one implicitly
#    on the first write) so a crash halfway through can't leave the
#    database half-written.
try:
    for theatre in theatres:
        cur.execute(
            "INSERT INTO theatres (id, name, location, screens) VALUES (?, ?, ?, ?)",
            (theatre["id"], theatre["name"], theatre["location"], theatre["screens"]),
        )

        for movie in theatre["movies"]:
            cur.execute(
                """INSERT INTO movies
                   (theatre_id, title, year, duration, language, cert, format, format_lang, poster)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                (
                    theatre["id"], movie["title"], movie["year"], movie["duration"],
                    movie["language"], movie["cert"], movie["format"],
                    movie["formatLang"], movie["poster"],
                ),
            )
            movie_id = cur.lastrowid  # auto-generated id we just need for the FK below

            for time in movie["showtimes"]:
                cur.execute(
                    "INSERT INTO showtimes (movie_id, show_time) VALUES (?, ?)",
                    (movie_id, time),
                )

    conn.commit()
except Exception:
    conn.rollback()
    raise

print(f"Done. Wrote {len(theatres)} theatre(s) to {DB_FILE}")
conn.close()
