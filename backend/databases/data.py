theatres = [
    {
        "id": "pvr",
        "name": "PVR Escape-Express Avenue Mall",
        "location": "Royapettah, Chennai",
        "screens": 6,
        "movies": [
            {
                "title": "Spider-Man: Brand New Day",
                "year": 2026,
                "duration": "2h 25m",
                "language": "English",
                "cert": "U/A",
                "format": "3D",
                "formatLang": "ENGLISH",
                "poster": "https://image.tmdb.org/t/p/original/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
                "showtimes": ["10:15 AM", "01:30 PM", "04:45 PM", "07:55 PM", "10:40 PM"],
            },
            {
                "title": "Obsession",
                "year": 2026,
                "duration": "1h 49m",
                "language": "English",
                "cert": "A",
                "format": "2D",
                "formatLang": "ENGLISH",
                "poster": "https://image.tmdb.org/t/p/original/4VQkkxPgylMtPHHBNeWvfLwBhji.jpg",
                "showtimes": ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
            },
            {
                "title": "Disclosure Day",
                "year": 2026,
                "duration": "2h 26m",
                "language": "English",
                "cert": "U/A",
                "format": "2D",
                "formatLang": "ENGLISH",
                "poster": "https://image.tmdb.org/t/p/original/AnJ8IQJI23hNpYXVNaythu061Ru.jpg",
                "showtimes": ["12:20 PM", "03:40 PM", "07:10 PM", "09:55 PM"],
            },
        ],
    },


    {
            "id": "sathyam",
            "name": "Sathyam Cinemas",
            "location": "Royapettah, Chennai",
            "screens": 8,
            "movies": [
                {
                    "title": "Project Hail Mary",
                    "year": 2026,
                    "duration": "2h 37m",
                    "language": "English",
                    "cert": "U/A",
                    "format": "2D",
                    "formatLang": "ENGLISH",
                    "poster": "https://image.tmdb.org/t/p/original/iOb2fjXLbpJgyQXe46n1WtGCnaa.jpg",
                    "showtimes": ["10:15 AM", "01:30 PM", "04:45 PM", "07:55 PM", "10:40 PM"],
                },
                {
                    "title": "Interstellar",
                    "year": 2014,
                    "duration": "2h 49m",
                    "language": "English",
                    "cert": "U/A",
                    "format": "2D",
                    "formatLang": "ENGLISH",
                    "poster": "https://image.tmdb.org/t/p/original/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg",
                    "showtimes": ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
                },
                {
                    "title": "Minions & Monsters",
                    "year": 2026,
                    "duration": "1h 30m",
                    "language": "English",
                    "cert": "U/A",
                    "format": "3D",
                    "formatLang": "ENGLISH",
                    "poster": "https://image.tmdb.org/t/p/original/nz7i42yhLIJ4ve9JKgM6NthoLHO.jpg",
                    "showtimes": ["12:20 PM", "03:40 PM", "07:10 PM", "09:55 PM"],
                },
            ],
    },

        {
                "id": "imax",
                "name": "INOX: Phoenix Market City, IMAX",
                "location": "Velachery, Chennai",
                "screens": 4,
                "movies": [
                    {
                        "title": "The Odyssey",
                        "year": 2026,
                        "duration": "2h 53m",
                        "language": "English",
                        "cert": "A",
                        "format": "IMAX 2D",
                        "formatLang": "ENGLISH",
                        "poster": "https://image.tmdb.org/t/p/original/mTnjqFRpfEx3tMrLBaSiA2JiDfk.jpg",
                        "showtimes": ["10:15 AM", "01:30 PM", "04:45 PM", "07:55 PM", "10:40 PM"],
                    },
                    {
                        "title": "Spider-Man: Brand New Day",
                        "year": 2026,
                        "duration": "2h 25m",
                        "language": "English",
                        "cert": "U/A",
                        "format": "IMAX 2D",
                        "formatLang": "ENGLISH",
                        "poster": "https://image.tmdb.org/t/p/original/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
                        "showtimes": ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
                    },

                ],
            }
]


movies = {
    "spider-man-brand-new-day": {
        title: "Spider-Man: Brand New Day",
        poster: "https://image.tmdb.org/t/p/original/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
        year: 2026,
        rating: 8.3
    },
    "the-odyssey": {
        title: "The Odyssey",
        poster: "https://image.tmdb.org/t/p/original/mTnjqFRpfEx3tMrLBaSiA2JiDfk.jpg",
        year: 2026,
        rating: 9.6
    },
    "minions-and-monsters": {
        title: "Minions & Monsters",
        poster: "https://image.tmdb.org/t/p/original/nz7i42yhLIJ4ve9JKgM6NthoLHO.jpg",
        year: 2026,
        rating: 7.3
    },
    "disclosure-day": {
        title: "Disclosure Day",
        poster: "https://image.tmdb.org/t/p/original/AnJ8IQJI23hNpYXVNaythu061Ru.jpg",
        year: 2026,
        rating: 8.4
    },
    "obsession": {
        title: "Obsession",
        poster: "https://image.tmdb.org/t/p/original/4VQkkxPgylMtPHHBNeWvfLwBhji.jpg",
        year: 2026,
        rating: 8.9
    },
    "supergirl": {
        title: "Supergirl",
        poster: "https://image.tmdb.org/t/p/original/niSvU02l2BONH9ivubV6K1a5QiK.jpg",
        year: 2026,
        rating: 5.2
    }
}

coming-soon = {
    "dune-part-three": {
        title: "Dune: Part Three",
        poster: "https://image.tmdb.org/t/p/original/d43fvHQsIMa4kpyhKXw0haEJIvI.jpg",
        release: Dec 18
    },
    "one-night-only": {
        title: "One Night Only",
        poster: "https://image.tmdb.org/t/p/original/f1v8IcYcQggeq1N0unoMJMrzTd9.jpg",
        release: Aug 7
    },
    "avengers-doomsday": {
        title: "Avengers: Doomsday",
        poster: "https://image.tmdb.org/t/p/original/cWXtJhrlruF8CeYuaBGE8vdj3Q9.jpg",
        release: Dec 18
    },
    "toxic": {
        title: "Toxic: A Fairy Tale for Grown-Ups",
        poster: "https://image.tmdb.org/t/p/original/nsEE60mpeOsoxRlcnvo80a77yQj.jpg",
        release: Aug 26
    },
    "the-last-sunrise": {
        title: "The Last Sunrise",
        poster: "https://image.tmdb.org/t/p/original/pego3yEZ5SuGvRjESKAguL4Wu7M.jpg",
        release: Aug 28
    },
    "other-mommy": {
        title: "Other Mommy",
        poster: "https://image.tmdb.org/t/p/original/8CXwxpyvQiz9COMLZov4Oae8NKb.jpg",
        release: Oct 9
    }
}