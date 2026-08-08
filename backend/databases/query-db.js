// query-db.js
//
// Reads theatres.db back into the exact same nested shape as your
// original `theatres` array, so the rest of your JS/React code doesn't
// need to change at all.
//
// Run with:  node query-db.js

const { DatabaseSync } = require('node:sqlite');

const db = new DatabaseSync('theatres.db', { readOnly: true });

function getTheatres() {
  const theatreRows = db.prepare(`SELECT * FROM theatres`).all();

  return theatreRows.map(t => {
    const movieRows = db.prepare(`SELECT * FROM movies WHERE theatre_id = ?`).all(t.id);

    const movies = movieRows.map(m => {
      const showtimeRows = db
        .prepare(`SELECT show_time FROM showtimes WHERE movie_id = ? ORDER BY id`)
        .all(m.id);

      return {
        title: m.title,
        year: m.year,
        duration: m.duration,
        language: m.language,
        cert: m.cert,
        format: m.format,
        formatLang: m.format_lang,
        poster: m.poster,
        showtimes: showtimeRows.map(s => s.show_time),
      };
    });

    return {
      id: t.id,
      name: t.name,
      location: t.location,
      screens: t.screens,
      movies,
    };
  });
}

const theatres = getTheatres();
console.log(JSON.stringify(theatres, null, 2));

db.close();

module.exports = { getTheatres };
