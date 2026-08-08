import sqlite3

# --------------------------------------------------
# DATABASE CONNECTION
# --------------------------------------------------

conn = sqlite3.connect("cinema.db")
cursor = conn.cursor()


# --------------------------------------------------
# CREATE TABLES
# --------------------------------------------------

cursor.executescript("""
DROP TABLE IF EXISTS showtimes;
DROP TABLE IF EXISTS theatre_movies;
DROP TABLE IF EXISTS coming_soon;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS theatres;


CREATE TABLE theatres (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    screens INTEGER NOT NULL
);


CREATE TABLE movies (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    poster TEXT,
    year INTEGER,
    rating REAL
);


CREATE TABLE theatre_movies (
    theatre_id TEXT,
    movie_id TEXT,
    duration TEXT,
    language TEXT,
    certificate TEXT,
    format TEXT,
    format_language TEXT,

    PRIMARY KEY (theatre_id, movie_id),

    FOREIGN KEY (theatre_id)
        REFERENCES theatres(id),

    FOREIGN KEY (movie_id)
        REFERENCES movies(id)
);


CREATE TABLE showtimes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    theatre_id TEXT NOT NULL,
    movie_id TEXT NOT NULL,
    showtime TEXT NOT NULL,

    FOREIGN KEY (theatre_id)
        REFERENCES theatres(id),

    FOREIGN KEY (movie_id)
        REFERENCES movies(id)
);


CREATE TABLE coming_soon (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    poster TEXT,
    release_date TEXT
);
""")


# --------------------------------------------------
# MOVIES
# --------------------------------------------------

movies = {
    "spider-man-brand-new-day": {
        "title": "Spider-Man: Brand New Day",
        "poster": "https://image.tmdb.org/t/p/original/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
        "year": 2026,
        "rating": 8.3
    },

    "the-odyssey": {
        "title": "The Odyssey",
        "poster": "https://image.tmdb.org/t/p/original/mTnjqFRpfEx3tMrLBaSiA2JiDfk.jpg",
        "year": 2026,
        "rating": 9.6
    },

    "minions-and-monsters": {
        "title": "Minions & Monsters",
        "poster": "https://image.tmdb.org/t/p/original/nz7i42yhLIJ4ve9JKgM6NthoLHO.jpg",
        "year": 2026,
        "rating": 7.3
    },

    "disclosure-day": {
        "title": "Disclosure Day",
        "poster": "https://image.tmdb.org/t/p/original/AnJ8IQJI23hNpYXVNaythu061Ru.jpg",
        "year": 2026,
        "rating": 8.4
    },

    "obsession": {
        "title": "Obsession",
        "poster": "https://image.tmdb.org/t/p/original/4VQkkxPgylMtPHHBNeWvfLwBhji.jpg",
        "year": 2026,
        "rating": 8.9
    },

    "supergirl": {
        "title": "Supergirl",
        "poster": "https://image.tmdb.org/t/p/original/niSvU02l2BONH9ivubV6K1a5QiK.jpg",
        "year": 2026,
        "rating": 5.2
    }
}


# --------------------------------------------------
# THEATRES
# --------------------------------------------------

theatres = [
    {
        "id": "pvr",
        "name": "PVR Escape-Express Avenue Mall",
        "location": "Royapettah, Chennai",
        "screens": 6,

        "movies": [
            {
                "movie_id": "spider-man-brand-new-day",
                "duration": "2h 25m",
                "language": "English",
                "cert": "U/A",
                "format": "3D",
                "formatLang": "ENGLISH",
                "showtimes": [
                    "10:15 AM",
                    "01:30 PM",
                    "04:45 PM",
                    "07:55 PM",
                    "10:40 PM"
                ]
            },

            {
                "movie_id": "obsession",
                "duration": "1h 49m",
                "language": "English",
                "cert": "A",
                "format": "2D",
                "formatLang": "ENGLISH",
                "showtimes": [
                    "11:00 AM",
                    "02:45 PM",
                    "06:30 PM",
                    "10:15 PM"
                ]
            },

            {
                "movie_id": "disclosure-day",
                "duration": "2h 26m",
                "language": "English",
                "cert": "U/A",
                "format": "2D",
                "formatLang": "ENGLISH",
                "showtimes": [
                    "12:20 PM",
                    "03:40 PM",
                    "07:10 PM",
                    "09:55 PM"
                ]
            }
        ]
    },

    {
        "id": "sathyam",
        "name": "Sathyam Cinemas",
        "location": "Royapettah, Chennai",
        "screens": 8,

        "movies": [
            {
                "movie_id": "project-hail-mary",
                "duration": "2h 37m",
                "language": "English",
                "cert": "U/A",
                "format": "2D",
                "formatLang": "ENGLISH",
                "showtimes": [
                    "10:15 AM",
                    "01:30 PM",
                    "04:45 PM",
                    "07:55 PM",
                    "10:40 PM"
                ]
            },

            {
                "movie_id": "interstellar",
                "duration": "2h 49m",
                "language": "English",
                "cert": "U/A",
                "format": "2D",
                "formatLang": "ENGLISH",
                "showtimes": [
                    "11:00 AM",
                    "02:45 PM",
                    "06:30 PM",
                    "10:15 PM"
                ]
            },

            {
                "movie_id": "minions-and-monsters",
                "duration": "1h 30m",
                "language": "English",
                "cert": "U/A",
                "format": "3D",
                "formatLang": "ENGLISH",
                "showtimes": [
                    "12:20 PM",
                    "03:40 PM",
                    "07:10 PM",
                    "09:55 PM"
                ]
            }
        ]
    },

    {
        "id": "imax",
        "name": "INOX: Phoenix Market City, IMAX",
        "location": "Velachery, Chennai",
        "screens": 4,

        "movies": [
            {
                "movie_id": "the-odyssey",
                "duration": "2h 53m",
                "language": "English",
                "cert": "A",
                "format": "IMAX 2D",
                "formatLang": "ENGLISH",
                "showtimes": [
                    "10:15 AM",
                    "01:30 PM",
                    "04:45 PM",
                    "07:55 PM",
                    "10:40 PM"
                ]
            },

            {
                "movie_id": "spider-man-brand-new-day",
                "duration": "2h 25m",
                "language": "English",
                "cert": "U/A",
                "format": "IMAX 2D",
                "formatLang": "ENGLISH",
                "showtimes": [
                    "11:00 AM",
                    "02:45 PM",
                    "06:30 PM",
                    "10:15 PM"
                ]
            }
        ]
    }
]


# --------------------------------------------------
# ADD EXTRA MOVIES USED BY THEATRES
# --------------------------------------------------

movies.update({

    "project-hail-mary": {
        "title": "Project Hail Mary",
        "poster": "https://image.tmdb.org/t/p/original/iOb2fjXLbpJgyQXe46n1WtGCnaa.jpg",
        "year": 2026,
        "rating": 0
    },

    "interstellar": {
        "title": "Interstellar",
        "poster": "https://image.tmdb.org/t/p/original/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg",
        "year": 2014,
        "rating": 0
    }
})


# --------------------------------------------------
# COMING SOON
# --------------------------------------------------

coming_soon = {
    "dune-part-three": {
        "title": "Dune: Part Three",
        "poster": "https://image.tmdb.org/t/p/original/d43fvHQsIMa4kpyhKXw0haEJIvI.jpg",
        "release": "2026-12-18"
    },

    "one-night-only": {
        "title": "One Night Only",
        "poster": "https://image.tmdb.org/t/p/original/f1v8IcYcQggeq1N0unoMJMrzTd9.jpg",
        "release": "2026-08-07"
    },

    "avengers-doomsday": {
        "title": "Avengers: Doomsday",
        "poster": "https://image.tmdb.org/t/p/original/cWXtJhrlruF8CeYuaBGE8vdj3Q9.jpg",
        "release": "2026-12-18"
    },

    "toxic": {
        "title": "Toxic: A Fairy Tale for Grown-Ups",
        "poster": "https://image.tmdb.org/t/p/original/nsEE60mpeOsoxRlcnvo80a77yQj.jpg",
        "release": "2026-08-26"
    },

    "the-last-sunrise": {
        "title": "The Last Sunrise",
        "poster": "https://image.tmdb.org/t/p/original/pego3yEZ5SuGvRjESKAguL4Wu7M.jpg",
        "release": "2026-08-28"
    },

    "other-mommy": {
        "title": "Other Mommy",
        "poster": "https://image.tmdb.org/t/p/original/8CXwxpyvQiz9COMLZov4Oae8NKb.jpg",
        "release": "2026-10-09"
    }
}


# --------------------------------------------------
# INSERT MOVIES
# --------------------------------------------------

for movie_id, movie in movies.items():

    cursor.execute("""
        INSERT INTO movies
        (id, title, poster, year, rating)
        VALUES (?, ?, ?, ?, ?)
    """, (
        movie_id,
        movie["title"],
        movie["poster"],
        movie["year"],
        movie["rating"]
    ))


# --------------------------------------------------
# INSERT THEATRES + THEIR MOVIES + SHOWTIMES
# --------------------------------------------------

for theatre in theatres:

    # Theatre
    cursor.execute("""
        INSERT INTO theatres
        (id, name, location, screens)
        VALUES (?, ?, ?, ?)
    """, (
        theatre["id"],
        theatre["name"],
        theatre["location"],
        theatre["screens"]
    ))

    # Movies inside theatre
    for movie in theatre["movies"]:

        movie_id = movie["movie_id"]

        cursor.execute("""
            INSERT INTO theatre_movies
            (
                theatre_id,
                movie_id,
                duration,
                language,
                certificate,
                format,
                format_language
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            theatre["id"],
            movie_id,
            movie["duration"],
            movie["language"],
            movie["cert"],
            movie["format"],
            movie["formatLang"]
        ))

        # Showtimes
        for time in movie["showtimes"]:

            cursor.execute("""
                INSERT INTO showtimes
                (theatre_id, movie_id, showtime)
                VALUES (?, ?, ?)
            """, (
                theatre["id"],
                movie_id,
                time
            ))


# --------------------------------------------------
# INSERT COMING SOON
# --------------------------------------------------

for movie_id, movie in coming_soon.items():

    cursor.execute("""
        INSERT INTO coming_soon
        (id, title, poster, release_date)
        VALUES (?, ?, ?, ?)
    """, (
        movie_id,
        movie["title"],
        movie["poster"],
        movie["release"]
    ))


# --------------------------------------------------
# SAVE DATABASE
# --------------------------------------------------

conn.commit()
conn.close()

print("Cinema database created successfully!")