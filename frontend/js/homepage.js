document.addEventListener("DOMContentLoaded", function () {
    var exploreButton = document.getElementById("explore-shows");
    var nowShowing = document.getElementById("now-showing");

    if (exploreButton && nowShowing) {
        exploreButton.addEventListener("click", function () {
            nowShowing.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    var menuToggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("site-menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            var isOpen = menu.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        // Close the mobile menu after choosing a link
        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }
});


    /* ==================== TICKET STORAGE ==================== */
    const TICKETS_KEY = 'mass_tickets';

    function getTickets() {
    try {
    return JSON.parse(localStorage.getItem(TICKETS_KEY)) || [];
} catch (e) {
    return [];
}
}

    function saveTicketToStorage(ticket) {
    const tickets = getTickets();
    tickets.unshift(ticket);
    localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}

    /* ==================== DATA ==================== */
    const theatres = [
    {
        id: "pvr",
        name: "PVR Escape-Express Avenue Mall",
        location: "Royapettah, Chennai",
        screens: 6,
        movies: [
            {
                title: "Spider-Man: Brand New Day",
                year: 2026,
                duration: "2h 25m",
                language: "English",
                cert: "U/A",
                format: "3D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
                showtimes: ["10:15 AM", "01:30 PM", "04:45 PM", "07:55 PM", "10:40 PM"],
            },
            {
                title: "Obsession",
                year: 2026,
                duration: "1h 49m",
                language: "English",
                cert: "A",
                format: "2D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/4VQkkxPgylMtPHHBNeWvfLwBhji.jpg",
                showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
            },
            {
                title: "Disclosure Day",
                year: 2026,
                duration: "2h 26m",
                language: "English",
                cert: "U/A",
                format: "2D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/AnJ8IQJI23hNpYXVNaythu061Ru.jpg",
                showtimes: ["12:20 PM", "03:40 PM", "07:10 PM", "09:55 PM"],
            },
        ],
    },

    {
        id: "sathyam",
        name: "Sathyam Cinemas",
        location: "Royapettah, Chennai",
        screens: 8,
        movies: [
            {
                title: "Project Hail Mary",
                year: 2026,
                duration: "2h 37m",
                language: "English",
                cert: "U/A",
                format: "2D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/iOb2fjXLbpJgyQXe46n1WtGCnaa.jpg",
                showtimes: ["10:15 AM", "01:30 PM", "04:45 PM", "07:55 PM", "10:40 PM"],
            },
            {
                title: "Interstellar",
                year: 2014,
                duration: "2h 49m",
                language: "English",
                cert: "U/A",
                format: "2D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg",
                showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
            },
            {
                title: "Minions & Monsters",
                year: 2026,
                duration: "1h 30m",
                language: "English",
                cert: "U/A",
                format: "3D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/nz7i42yhLIJ4ve9JKgM6NthoLHO.jpg",
                showtimes: ["12:20 PM", "03:40 PM", "07:10 PM", "09:55 PM"],
            },
            {
                title: "Obsession",
                year: 2026,
                duration: "1h 49m",
                language: "English",
                cert: "A",
                format: "2D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/4VQkkxPgylMtPHHBNeWvfLwBhji.jpg",
                showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
            },
            {
                title: "Disclosure Day",
                year: 2026,
                duration: "2h 26m",
                language: "English",
                cert: "U/A",
                format: "2D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/AnJ8IQJI23hNpYXVNaythu061Ru.jpg",
                showtimes: ["12:20 PM", "03:40 PM", "07:10 PM", "09:55 PM"],
            },
        ],
    },

    {
        id: "imax",
        name: "INOX: Phoenix Market City, IMAX",
        location: "Velachery, Chennai",
        screens: 4,
        movies: [
            {
                title: "The Odyssey",
                year: 2026,
                duration: "2h 53m",
                language: "English",
                cert: "A",
                format: "IMAX 2D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/mTnjqFRpfEx3tMrLBaSiA2JiDfk.jpg",
                showtimes: ["10:15 AM", "01:30 PM", "04:45 PM", "07:55 PM", "10:40 PM"],
            },
            {
                title: "Spider-Man: Brand New Day",
                year: 2026,
                duration: "2h 25m",
                language: "English",
                cert: "U/A",
                format: "IMAX 2D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
                showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
            },
            {
                title: "Interstellar",
                year: 2014,
                duration: "2h 49m",
                language: "English",
                cert: "U/A",
                format: "IMAX 2D",
                formatLang: "ENGLISH",
                poster: "https://image.tmdb.org/t/p/original/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg",
                showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
            },
        ],
    },


        {
            id: "palazzo",
            name: "PVR Palazzo: The Nexus Vijaya Mall",
            location: "Vadapalani, Chennai",
            screens: 2,
            movies: [
                {
                    title: "The Odyssey",
                    year: 2026,
                    duration: "2h 53m",
                    language: "English",
                    cert: "A",
                    format: "IMAX 2D",
                    formatLang: "ENGLISH",
                    poster: "https://image.tmdb.org/t/p/original/mTnjqFRpfEx3tMrLBaSiA2JiDfk.jpg",
                    showtimes: ["10:15 AM", "01:30 PM", "04:45 PM", "07:55 PM", "10:40 PM"],
                },
                {
                    title: "Spider-Man: Brand New Day",
                    year: 2026,
                    duration: "2h 25m",
                    language: "English",
                    cert: "U/A",
                    format: "IMAX 2D",
                    formatLang: "ENGLISH",
                    poster: "https://image.tmdb.org/t/p/original/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
                    showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
                },
                {
                    title: "Interstellar",
                    year: 2014,
                    duration: "2h 49m",
                    language: "English",
                    cert: "U/A",
                    format: "IMAX 2D",
                    formatLang: "ENGLISH",
                    poster: "https://image.tmdb.org/t/p/original/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg",
                    showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
                },
            ],
        },

        {
            id: "cinepolis",
            name: "Cinepolis BSR Mall",
            location: "Thoraipakkam, Chennai",
            screens: 2,
            movies: [
                {
                    title: "Spider-Man: Brand New Day",
                    year: 2026,
                    duration: "2h 25m",
                    language: "English",
                    cert: "U/A",
                    format: "2D",
                    formatLang: "ENGLISH",
                    poster: "https://image.tmdb.org/t/p/original/iPOn6DinuVyLY17YM9mKuPofV08.jpg",
                    showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
                },
                {
                    title: "Project Hail Mary",
                    year: 2026,
                    duration: "2h 37m",
                    language: "English",
                    cert: "U/A",
                    format: "2D",
                    formatLang: "ENGLISH",
                    poster: "https://image.tmdb.org/t/p/original/iOb2fjXLbpJgyQXe46n1WtGCnaa.jpg",
                    showtimes: ["10:15 AM", "01:30 PM", "04:45 PM", "07:55 PM", "10:40 PM"],
                },
                {
                    title: "Interstellar",
                    year: 2014,
                    duration: "2h 49m",
                    language: "English",
                    cert: "U/A",
                    format: "2D",
                    formatLang: "ENGLISH",
                    poster: "https://image.tmdb.org/t/p/original/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg",
                    showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"],
                },
                {
                    title: "Minions & Monsters",
                    year: 2026,
                    duration: "1h 30m",
                    language: "English",
                    cert: "U/A",
                    format: "3D",
                    formatLang: "ENGLISH",
                    poster: "https://image.tmdb.org/t/p/original/nz7i42yhLIJ4ve9JKgM6NthoLHO.jpg",
                    showtimes: ["12:20 PM", "03:40 PM", "07:10 PM", "09:55 PM"],
                },
            ],
        },
];

    /* ==================== THEATRE LIST ==================== */
    const theatreGrid = document.getElementById('theatreGrid');

    function renderTheatreList() {
    theatreGrid.innerHTML = '';
    theatres.forEach(t => {
    const card = document.createElement('button');
    card.className = 'theatre-card';
    card.innerHTML = `
            <div class="theatre-poster">
                <span class="screen-figure">${t.screens}</span>
            </div>
            <div class="theatre-info">
                <div>
                    <h3>${t.name}</h3>
                    <span class="meta">${t.location} &#x2022; ${t.screens} SCREENS</span>
                </div>
                <span class="arrow">&rarr;</span>
            </div>
        `;
    card.onclick = () => showTheatreDetail(t.id);
    theatreGrid.appendChild(card);
});
}

    /* ==================== THEATRE DETAIL ==================== */
    const theatresView = document.getElementById('theatresView');
    const theatreDetailView = document.getElementById('theatreDetailView');
    const movieList = document.getElementById('movieList');

    function showTheatreDetail(id) {
    const t = theatres.find(x => x.id === id);
    if (!t) return;

    document.getElementById('detailTheatreName').textContent = t.name;
    document.getElementById('detailTheatreLoc').textContent = t.location;
    document.getElementById('detailTheatreScreens').textContent = t.screens + ' SCREENS';

    movieList.innerHTML = '';
    t.movies.forEach(m => {
    const article = document.createElement('article');
    article.className = 'showtime-movie';
    article.innerHTML = `
            <div class="poster">
                <img src="${m.poster}" alt="${m.title}">
            </div>
            <div class="movie-details">
                <div class="movie-title-row">
                    <div>
                        <h3>${m.title}</h3>
                        <div class="movie-meta">
                            <span>${m.year}</span>
                            <span>${m.duration}</span>
                            <span>${m.language}</span>
                        </div>
                    </div>
                    <span class="certificate">${m.cert}</span>
                </div>
                <div class="format">
                    <span class="format-label">${m.format}</span>
                    <span class="format-lang">${m.formatLang}</span>
                </div>
                <div class="showtime-list">
                    ${m.showtimes.map(s => `<button>${s}</button>`).join('')}
                </div>
            </div>
        `;
    article.querySelectorAll('.showtime-list button').forEach((btn, idx) => {
    btn.addEventListener('click', () => openBooking(t, m, m.showtimes[idx]));
});
    movieList.appendChild(article);
});

    theatresView.style.display = 'none';
    theatreDetailView.style.display = 'block';
    renderDateSelector(6);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

    function showTheatreList() {
    theatreDetailView.style.display = 'none';
    theatresView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

    /* ==================== DATE SELECTOR ==================== */
    const dateSelector = document.getElementById('dateSelector');
    const DAY_NAMES = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const MONTH_NAMES = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    function formatDate(date) {
    return {
    day: DAY_NAMES[date.getDay()],
    date: String(date.getDate()).padStart(2, '0'),
    month: MONTH_NAMES[date.getMonth()],
    value: date.toISOString().split('T')[0]
};
}

    function renderDateSelector(numDays = 6) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    dateSelector.innerHTML = '';

    for (let i = 0; i < numDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const f = formatDate(date);
    const isToday = i === 0;

    const button = document.createElement('button');
    button.className = `date${isToday ? ' active' : ''}`;
    button.dataset.date = f.value;
    button.innerHTML = `<span>${f.day}</span><strong>${f.date}</strong><small>${f.month}</small>`;
    dateSelector.appendChild(button);
}
}

    dateSelector.addEventListener('click', (event) => {
    const button = event.target.closest('.date');
    if (!button) return;
    dateSelector.querySelectorAll('.date').forEach(d => d.classList.remove('active'));
    button.classList.add('active');
});

    function getActiveDateLabel() {
    const activeBtn = dateSelector.querySelector('.date.active');
    if (!activeBtn) return '';
    const day = activeBtn.querySelector('span').textContent;
    const date = activeBtn.querySelector('strong').textContent;
    const month = activeBtn.querySelector('small').textContent;
    return `${day} ${date} ${month}`;
}

    /* ==================== BOOKING OVERLAY ==================== */
    const bookingOverlay = document.getElementById('bookingOverlay');
    const bookingContainer = document.getElementById('bookingContainer');
    const theatreSeats = document.getElementById('theatre');
    const seatWarning = document.getElementById('seatWarning');

    const rows = 10, seats = 10;
    const rowLetters = 'ABCDEFGHIJ';
    let selectedSeats = [];
    let currentBooking = null;
    const seatButtons = {};

    function buildSeatMap() {
    theatreSeats.innerHTML = '';
    for (let i = 0; i < rows; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'seat-row';

    const leftLabel = document.createElement('span');
    leftLabel.className = 'row-letter';
    leftLabel.textContent = rowLetters[i];

    const row = document.createElement('div');
    row.className = 'row';

    for (let j = 1; j <= seats; j++) {
    const seatId = rowLetters[i] + j;
    const seat = document.createElement('button');
    seat.className = 'seat available';
    seat.textContent = j;
    if (j === 5) seat.classList.add('aisle');

    seat.onclick = () => {
    if (seat.classList.contains('occupied')) return;
    seat.classList.toggle('selected');
    if (seat.classList.contains('selected')) {
    selectedSeats.push(seatId);
} else {
    const idx = selectedSeats.indexOf(seatId);
    if (idx !== -1) selectedSeats.splice(idx, 1);
}
};
    seatButtons[seatId] = seat;
    row.appendChild(seat);
}

    const rightLabel = document.createElement('span');
    rightLabel.className = 'row-letter';
    rightLabel.textContent = rowLetters[i];

    rowContainer.appendChild(leftLabel);
    rowContainer.appendChild(row);
    rowContainer.appendChild(rightLabel);
    theatreSeats.appendChild(rowContainer);
}
}
    buildSeatMap();

    function getOccupiedSeats(booking) {
    return getTickets()
    .filter(t =>
    t.theatreName === booking.theatreName &&
    t.movieTitle === booking.movieTitle &&
    t.time === booking.time &&
    t.dateLabel === booking.dateLabel
    )
    .flatMap(t => t.seats);
}

    function applySeatAvailability(booking) {
    const occupied = new Set(getOccupiedSeats(booking));
    Object.entries(seatButtons).forEach(([seatId, seat]) => {
    seat.classList.remove('selected');
    seat.classList.toggle('occupied', occupied.has(seatId));
    seat.classList.toggle('available', !occupied.has(seatId));
});
}

    function openBooking(theatre, movie, time) {
    currentBooking = {
        theatreName: theatre.name,
        theatreLocation: theatre.location,
        movieTitle: movie.title,
        poster: movie.poster,
        format: movie.format,
        time: time,
        dateLabel: getActiveDateLabel()
    };

    selectedSeats = [];
    applySeatAvailability(currentBooking);
    seatWarning.classList.remove('visible');
    bookingContainer.classList.remove('confirmed');

    bookingOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

    function closeBooking() {
    bookingOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

    function showConfirmation(ticket) {
    document.getElementById('confirmMovieTitle').textContent = ticket.movieTitle;
    document.getElementById('confirmMeta').textContent =
    `${ticket.theatreName} · ${ticket.dateLabel} · ${ticket.time}`;
    document.getElementById('confirmSeats').innerHTML =
    ticket.seats.map(s => `<span class="seat-chip">${s}</span>`).join('');
    bookingContainer.classList.add('confirmed');
}

    document.querySelector('.book-btn').onclick = () => {
    if (selectedSeats.length === 0) {
    seatWarning.classList.add('visible');
    return;
}
    seatWarning.classList.remove('visible');

    const ticket = {
    id: 'TCK-' + Date.now().toString(36).toUpperCase(),
    ...currentBooking,
    seats: [...selectedSeats],
    bookedAt: new Date().toISOString()
};

    saveTicketToStorage(ticket);
    showConfirmation(ticket);
};

    /* ==================== INIT ==================== */
    renderTheatreList();


const movies = {
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
};

function renderMovies() {
    const grid = document.querySelector('.movie-grid');
    grid.innerHTML = ''; // clear any existing content

    Object.entries(movies).forEach(([slug, movie]) => {
        const card = document.createElement('article');
        card.className = 'movie-card';
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `showtimes.html?movie=${slug}`;
        });

        card.innerHTML = `
      <div class="poster">
        <img src="${movie.poster}" alt="${movie.title}">
      </div>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span>${movie.year} &#x2022; ${movie.rating}</span>
      </div>
    `;

        grid.appendChild(card);
    });
}

renderMovies();
