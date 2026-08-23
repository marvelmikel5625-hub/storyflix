import React, { useMemo, useState } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import {
  Search,
  Bell,
  User,
  Play,
  Plus,
  Check,
  ChevronRight,
  ChevronLeft,
  Star,
  BookOpen,
  Film,
  Tv,
  Menu,
  X,
  ArrowLeft,
  Info,
  Clock,
  Sparkles,
} from "lucide-react";

import "./App.css";

/* =========================================================
   HERO IMAGES
========================================================= */

const heroImages = [
  {
    title: "Dune: Part Two",
    image:
      "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    title: "Interstellar",
    image:
      "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5v9XgF1.jpg",
  },
  {
    title: "The Batman",
    image:
      "https://image.tmdb.org/t/p/original/5P8SmMzSNYDxXmr8k6iE2r0jJgE.jpg",
  },
  {
    title: "Avatar: The Way of Water",
    image:
      "https://image.tmdb.org/t/p/original/s16H6tpK2utM9Kl8f6tZ4q5P7Gx.jpg",
  },
  {
    title: "Oppenheimer",
    image:
      "https://image.tmdb.org/t/p/original/fu8R5Yd3i6lD0s5q9GfJ6h8Y7Tj.jpg",
  },
  {
    title: "Spider-Man",
    image:
      "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
  },
];

/* =========================================================
   MOVIES
========================================================= */

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.6,
    duration: "2h 46m",
    image:
      "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    rating: 8.6,
    duration: "3h",
    image:
      "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/fu8R5Yd3i6lD0s5q9GfJ6h8Y7Tj.jpg",
    description:
      "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: 3,
    title: "The Batman",
    year: 2022,
    genre: "Crime",
    rating: 7.8,
    duration: "2h 56m",
    image:
      "https://image.tmdb.org/t/p/w780/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/5P8SmMzSNYDxXmr8k6iE2r0jJgE.jpg",
    description:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
  },
  {
    id: 4,
    title: "Interstellar",
    year: 2014,
    genre: "Adventure",
    rating: 8.7,
    duration: "2h 49m",
    image:
      "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5v9XgF1.jpg",
    description:
      "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Action",
    rating: 8.0,
    duration: "2h 28m",
    image:
      "https://image.tmdb.org/t/p/w780/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    description:
      "Peter Parker's identity is revealed, bringing dangerous consequences into his life.",
  },
  {
    id: 6,
    title: "Avatar: The Way of Water",
    year: 2022,
    genre: "Fantasy",
    rating: 7.6,
    duration: "3h 12m",
    image:
      "https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/s16H6tpK2utM9Kl8f6tZ4q5P7Gx.jpg",
    description:
      "Jake Sully and Neytiri have formed a family and must explore the oceans of Pandora.",
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.3,
    duration: "3h 2m",
    image:
      "https://image.tmdb.org/t/p/w780/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description:
      "The Avengers face the consequences of Thanos' devastating actions.",
  },
  {
    id: 8,
    title: "John Wick",
    year: 2014,
    genre: "Action",
    rating: 7.4,
    duration: "1h 41m",
    image:
      "https://image.tmdb.org/t/p/w780/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description:
      "An ex-hitman is forced back into the criminal underworld after a personal tragedy.",
  },
  {
    id: 9,
    title: "Black Panther",
    year: 2018,
    genre: "Action",
    rating: 7.3,
    duration: "2h 14m",
    image:
      "https://image.tmdb.org/t/p/w780/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    description:
      "T'Challa returns home to Wakanda to take his place as king.",
  },
  {
    id: 10,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    duration: "2h 35m",
    image:
      "https://image.tmdb.org/t/p/w780/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description:
      "A betrayed Roman general seeks revenge against the corrupt emperor who destroyed his family.",
  },
  {
    id: 11,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    duration: "2h 28m",
    image:
      "https://image.tmdb.org/t/p/w780/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description:
      "A skilled thief who steals secrets through dreams is offered a chance to erase his past.",
  },
  {
    id: 12,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    duration: "2h 16m",
    image:
      "https://image.tmdb.org/t/p/w780/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "A computer hacker discovers that the world he knows is an elaborate simulation.",
  },
];

/* =========================================================
   SERIES
========================================================= */

const series = [
  {
    id: 101,
    title: "Stranger Things",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.6,
    seasons: 4,
    image:
      "https://image.tmdb.org/t/p/w780/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    description:
      "A group of friends uncover supernatural mysteries in the small town of Hawkins.",
  },
  {
    id: 102,
    title: "The Last of Us",
    year: 2023,
    genre: "Drama",
    rating: 8.6,
    seasons: 2,
    image:
      "https://image.tmdb.org/t/p/w780/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    description:
      "A hardened survivor escorts a young girl across a dangerous post-apocalyptic America.",
  },
  {
    id: 103,
    title: "Wednesday",
    year: 2022,
    genre: "Mystery",
    rating: 8.0,
    seasons: 2,
    image:
      "https://image.tmdb.org/t/p/w780/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    description:
      "Wednesday Addams investigates strange mysteries at Nevermore Academy.",
  },
  {
    id: 104,
    title: "House of the Dragon",
    year: 2022,
    genre: "Fantasy",
    rating: 8.4,
    seasons: 2,
    image:
      "https://image.tmdb.org/t/p/w780/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
    description:
      "The Targaryen dynasty begins to tear itself apart in a brutal struggle for the throne.",
  },
  {
    id: 105,
    title: "The Boys",
    year: 2019,
    genre: "Action",
    rating: 8.7,
    seasons: 4,
    image:
      "https://image.tmdb.org/t/p/w780/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    description:
      "A group of vigilantes takes on corrupt superheroes who abuse their powers.",
  },
  {
    id: 106,
    title: "Breaking Bad",
    year: 2008,
    genre: "Crime",
    rating: 9.5,
    seasons: 5,
    image:
      "https://image.tmdb.org/t/p/w780/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    description:
      "A chemistry teacher turns to manufacturing methamphetamine after receiving a devastating diagnosis.",
  },
  {
    id: 107,
    title: "Game of Thrones",
    year: 2011,
    genre: "Fantasy",
    rating: 9.2,
    seasons: 8,
    image:
      "https://image.tmdb.org/t/p/w780/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    description:
      "Noble families fight for control of the Iron Throne while an ancient threat rises in the north.",
  },
  {
    id: 108,
    title: "Peaky Blinders",
    year: 2013,
    genre: "Crime",
    rating: 8.7,
    seasons: 6,
    image:
      "https://image.tmdb.org/t/p/w780/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    description:
      "A powerful crime family builds an empire in post-war Birmingham.",
  },
];

/* =========================================================
   STORIES
========================================================= */

const stories = [
  {
    id: 201,
    title: "The Alpha's Last Forbidden Bond",
    genre: "Werewolf Romance",
    rating: 4.9,
    views: "2.4M",
    chapters: 86,
    image:
      "https://images.unsplash.com/photo-1511108690759-009324a90311?w=1000&q=85",
    description:
      "A forbidden bond threatens to destroy an entire werewolf kingdom when an unexpected mate awakens an ancient power.",
  },
  {
    id: 202,
    title: "The Billionaire's Secret Bride",
    genre: "Billionaire Romance",
    rating: 4.8,
    views: "1.8M",
    chapters: 74,
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1000&q=85",
    description:
      "She agrees to a secret marriage with a billionaire, never expecting to fall in love with the man behind the contract.",
  },
  {
    id: 203,
    title: "Moonlight Academy",
    genre: "Fantasy",
    rating: 4.7,
    views: "954K",
    chapters: 62,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1000&q=85",
    description:
      "A mysterious academy hides magical secrets that could change the fate of an entire generation.",
  },
  {
    id: 204,
    title: "The Vampire's Promise",
    genre: "Vampire Romance",
    rating: 4.9,
    views: "1.2M",
    chapters: 91,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1000&q=85",
    description:
      "A centuries-old vampire makes one final promise to the woman he was never supposed to love.",
  },
  {
    id: 205,
    title: "My Dangerous CEO",
    genre: "Contemporary Romance",
    rating: 4.8,
    views: "1.1M",
    chapters: 68,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1000&q=85",
    description:
      "She thought she had escaped her past until the most dangerous CEO in the city walked back into her life.",
  },
  {
    id: 206,
    title: "The King's Hidden Daughter",
    genre: "Royal Romance",
    rating: 4.8,
    views: "731K",
    chapters: 57,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1000&q=85",
    description:
      "A hidden princess returns to the royal court and discovers that someone wants her dead.",
  },
  {
    id: 207,
    title: "Blood Moon",
    genre: "Supernatural",
    rating: 4.8,
    views: "896K",
    chapters: 71,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1000&q=85",
    description:
      "When the blood moon rises, a forgotten supernatural power awakens inside an ordinary girl.",
  },
  {
    id: 208,
    title: "The Witch's Curse",
    genre: "Dark Fantasy",
    rating: 4.7,
    views: "643K",
    chapters: 64,
    image:
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=1000&q=85",
    description:
      "A young witch must break an ancient curse before it consumes everyone she loves.",
  },
  {
    id: 209,
    title: "Falling for the Alpha",
    genre: "Werewolf Romance",
    rating: 4.8,
    views: "1.4M",
    chapters: 79,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1000&q=85",
    description:
      "She never believed in destined mates until the most feared Alpha claimed her as his own.",
  },
  {
    id: 210,
    title: "The Secret Heir",
    genre: "Royal Drama",
    rating: 4.6,
    views: "528K",
    chapters: 52,
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1000&q=85",
    description:
      "A young woman discovers that she is the missing heir to a powerful kingdom.",
  },
];

/* =========================================================
   HEADER
========================================================= */

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const links = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Series", path: "/series" },
    { name: "Stories", path: "/stories" },
  ];

  function submitSearch(e) {
    e.preventDefault();

    const value = search.trim();

    if (!value) return;

    navigate(`/search?q=${encodeURIComponent(value)}`);

    setSearch("");
    setSearchOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          STORY<span>FLIX</span>
        </Link>

        <nav className={`main-nav ${mobileOpen ? "mobile-active" : ""}`}>
          {links.map((link) => {
            const active =
              link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                className={active ? "active" : ""}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => setSearchOpen((value) => !value)}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>

          <button className="icon-btn desktop-only" aria-label="Notifications">
            <Bell size={20} />
          </button>

          <button className="profile-btn desktop-only" aria-label="Profile">
            <User size={18} />
          </button>

          <button
            className="mobile-menu"
            aria-label="Menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="search-panel">
          <form onSubmit={submitSearch}>
            <Search size={20} />

            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search movies, series and stories..."
            />

            <button type="submit">Search</button>
          </form>
        </div>
      )}
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const [activeHero, setActiveHero] = useState(0);
  const [myList, setMyList] = useState(false);

  const movie = movies[0];

  const background =
    heroImages[activeHero]?.image || movie.backdrop || movie.image;

  return (
    <section className="hero">
      <div
        className="hero-backdrop"
        style={{
          backgroundImage: `url("${background}")`,
        }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-label">
          <span>FEATURED</span>

          <span className="hero-rating">
            <Star size={14} fill="currentColor" />
            {movie.rating}
          </span>
        </div>

        <h1>{movie.title}</h1>

        <div className="hero-meta">
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span>{movie.genre}</span>
          <span className="quality">4K</span>
        </div>

        <p>{movie.description}</p>

        <div className="hero-buttons">
          <Link to="/movies/1" className="primary-btn">
            <Play size={19} fill="currentColor" />
            Watch Now
          </Link>

          <button
            className="secondary-btn"
            onClick={() => setMyList((value) => !value)}
          >
            {myList ? <Check size={19} /> : <Plus size={19} />}
            {myList ? "Added" : "My List"}
          </button>
        </div>
      </div>

      <div className="hero-selector">
        {heroImages.map((item, index) => (
          <button
            key={item.title}
            className={activeHero === index ? "active" : ""}
            onClick={() => setActiveHero(index)}
            aria-label={`Show ${item.title}`}
          >
            <img src={item.image} alt={item.title} />
          </button>
        ))}
      </div>

      <div className="hero-fade" />
    </section>
  );
}

/* =========================================================
   MEDIA CARD
========================================================= */

function MediaCard({ item, type }) {
  const isStory = type === "stories";

  return (
    <Link to={`/${type}/${item.id}`} className="media-card">
      <div className="card-image-wrap">
        <img src={item.image} alt={item.title} loading="lazy" />

        <div className="card-gradient" />

        <div className="card-hover">
          <div className="play-circle">
            {isStory ? (
              <BookOpen size={20} fill="currentColor" />
            ) : (
              <Play size={20} fill="currentColor" />
            )}
          </div>
        </div>

        <div className="rating-pill">
          <Star size={12} fill="currentColor" />
          {item.rating}
        </div>
      </div>

      <div className="card-info">
        <h3>{item.title}</h3>

        <div className="card-meta">
          {isStory ? (
            <>
              <span>{item.genre}</span>
              <span>•</span>
              <span>{item.views}</span>
            </>
          ) : (
            <>
              <span>{item.year}</span>
              <span>•</span>
              <span>{item.genre}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   CONTENT ROW
========================================================= */

function ContentRow({ title, items, type, kicker = "DISCOVER" }) {
  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">{kicker}</span>
          <h2>{title}</h2>
        </div>

        <Link to={`/${type}`} className="see-all">
          See all
          <ChevronRight size={17} />
        </Link>
      </div>

      <div className="card-row">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} type={type} />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <>
      <Hero />

      <main className="page-content">
        <ContentRow
          title="Trending Movies"
          items={movies.slice(0, 8)}
          type="movies"
        />

        <ContentRow
          title="Popular Series"
          items={series.slice(0, 6)}
          type="series"
        />

        <section className="story-feature">
          <div
            className="story-feature-bg"
            style={{
              backgroundImage: `url("${stories[0].image}")`,
            }}
          />

          <div className="story-feature-overlay" />

          <div className="story-feature-content">
            <span className="section-kicker">STORYFLIX ORIGINAL</span>

            <h2>Stories that keep you turning the page.</h2>

            <p>
              Discover addictive romance, fantasy, supernatural and drama
              stories from writers around the world.
            </p>

            <Link to="/stories" className="primary-btn">
              <BookOpen size={18} />
              Explore Stories
            </Link>
          </div>
        </section>

        <ContentRow
          title="Trending Stories"
          items={stories.slice(0, 8)}
          type="stories"
        />

        <section className="discover-banner">
          <div>
            <span className="section-kicker">ONE PLACE</span>
            <h2>Movies. Series. Stories.</h2>
            <p>
              Everything you love to watch and read, all in one cinematic
              experience.
            </p>
          </div>

          <div className="discover-actions">
            <Link to="/movies" className="secondary-btn">
              <Film size={18} />
              Movies
            </Link>

            <Link to="/series" className="secondary-btn">
              <Tv size={18} />
              Series
            </Link>

            <Link to="/stories" className="secondary-btn">
              <BookOpen size={18} />
              Stories
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

/* =========================================================
   LISTING PAGE
========================================================= */

function ListingPage({ title, items, type, description }) {
  const [filter, setFilter] = useState("All");

  const genres = ["All", ...new Set(items.map((item) => item.genre))];

  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) => item.genre === filter);

  return (
    <main className="listing-page">
      <div className="listing-header">
        <span className="section-kicker">STORYFLIX</span>

        <h1>{title}</h1>

        <p>{description}</p>

        <div className="genre-filters">
          {genres.map((genre) => (
            <button
              key={genre}
              className={filter === genre ? "active" : ""}
              onClick={() => setFilter(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="large-card-grid">
        {filteredItems.map((item) => (
          <MediaCard key={item.id} item={item} type={type} />
        ))}
      </div>
    </main>
  );
}

/* =========================================================
   DETAIL PAGE
========================================================= */

function DetailPage({ item, type }) {
  const navigate = useNavigate();
  const [myList, setMyList] = useState(false);

  const isStory = type === "stories";
  const isSeries = type === "series";

  const recommendations = isStory
    ? stories.filter((story) => story.id !== item.id).slice(0, 6)
    : isSeries
      ? series.filter((show) => show.id !== item.id).slice(0, 6)
      : movies.filter((movie) => movie.id !== item.id).slice(0, 6);

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <img src={item.image} alt="" className="detail-backdrop" />

        <div className="detail-overlay" />

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="detail-content">
          <div className="detail-topline">
            <div className="detail-type">
              {isStory ? (
                <>
                  <BookOpen size={15} />
                  Story
                </>
              ) : isSeries ? (
                <>
                  <Tv size={15} />
                  Series
                </>
              ) : (
                <>
                  <Film size={15} />
                  Movie
                </>
              )}
            </div>

            <div className="detail-rating">
              <Star size={16} fill="currentColor" />
              {item.rating}
            </div>
          </div>

          <h1>{item.title}</h1>

          <div className="detail-meta">
            {isStory ? (
              <>
                <span>{item.genre}</span>
                <span>•</span>
                <span>{item.views} views</span>
                <span>•</span>
                <span>{item.chapters} chapters</span>
              </>
            ) : (
              <>
                <span>{item.year}</span>
                <span>•</span>
                <span>{item.genre}</span>

                {isSeries ? (
                  <>
                    <span>•</span>
                    <span>{item.seasons} Seasons</span>
                  </>
                ) : (
                  <>
                    <span>•</span>
                    <span>{item.duration}</span>
                  </>
                )}
              </>
            )}
          </div>

          <p>{item.description}</p>

          <div className="detail-actions">
            {isStory ? (
              <Link
                to={`/stories/${item.id}/chapter/1`}
                className="primary-btn"
              >
                <BookOpen size={18} />
                Start Reading
              </Link>
            ) : (
              <button className="primary-btn">
                <Play size={18} fill="currentColor" />
                Watch Trailer
              </button>
            )}

            <button
              className="secondary-btn"
              onClick={() => setMyList((value) => !value)}
            >
              {myList ? <Check size={18} /> : <Plus size={18} />}
              {myList ? "In My List" : "My List"}
            </button>
          </div>
        </div>
      </section>

      <section className="detail-body">
        <div className="detail-overview">
          <span className="section-kicker">OVERVIEW</span>

          <h2>
            About this {isStory ? "story" : isSeries ? "series" : "movie"}
          </h2>

          <p>{item.description}</p>
        </div>

        <div className="info-box">
          <div>
            <span>{isStory ? "Chapters" : "Release"}</span>
            <strong>
              {isStory ? item.chapters : item.year}
            </strong>
          </div>

          <div>
            <span>Rating</span>
            <strong>{item.rating}/10</strong>
          </div>

          <div>
            <span>Genre</span>
            <strong>{item.genre}</strong>
          </div>

          {isStory && (
            <div>
              <span>Readers</span>
              <strong>{item.views}</strong>
            </div>
          )}
        </div>
      </section>

      <section className="detail-recommendations">
        <ContentRow
          title="You May Also Like"
          items={recommendations}
          type={type}
          kicker="MORE TO EXPLORE"
        />
      </section>
    </main>
  );
}

/* =========================================================
   STORY READER
========================================================= */

function StoryReader({ story }) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const chapterFromUrl = Number(
    searchParams.get("chapter") || 1
  );

  const currentChapter =
    Number.isFinite(chapterFromUrl) && chapterFromUrl > 0
      ? chapterFromUrl
      : 1;

  const chapterTitle =
    currentChapter === 1
      ? "The Bond That Should Never Have Been"
      : currentChapter === 2
        ? "The Alpha's Secret"
        : `Chapter ${currentChapter}`;

  function goNext() {
    navigate(
      `/stories/${story.id}/chapter/${currentChapter + 1}`
    );
  }

  function goPrevious() {
    if (currentChapter <= 1) return;

    navigate(
      `/stories/${story.id}/chapter/${currentChapter - 1}`
    );
  }

  return (
    <main className="reader-page">
      <div className="reader-top">
        <button
          className="back-button dark"
          onClick={() => navigate(`/stories/${story.id}`)}
        >
          <ArrowLeft size={18} />
          Story Details
        </button>

        <div className="reader-title">
          <span>READING</span>
          <strong>{story.title}</strong>
        </div>

        <button className="reader-settings" aria-label="Reading settings">
          Aa
        </button>
      </div>

      <article className="chapter">
        <div className="chapter-number">
          CHAPTER {String(currentChapter).padStart(2, "0")}
        </div>

        <h1>{chapterTitle}</h1>

        <div className="chapter-divider" />

        {currentChapter === 1 ? (
          <>
            <p>
              The night the moon turned red, everyone in the kingdom knew
              something had changed.
            </p>

            <p>I felt it before I saw it.</p>

            <p>
              A strange pressure settled over my chest as I stood at the
              edge of the forest, staring at the silver light spilling
              between the trees.
            </p>

            <p>
              The wolves had gone silent.
            </p>

            <p>
              Then I heard footsteps behind me.
            </p>

            <p>
              I turned slowly.
            </p>

            <p>
              He stood beneath the moonlight, watching me with an
              expression I could not understand.
            </p>

            <p>The Alpha.</p>

            <p>
              And somehow, despite everything I had been taught, I knew
              exactly what he was.
            </p>

            <p className="chapter-ending">
              My forbidden mate.
            </p>
          </>
        ) : (
          <>
            <p>
              The forest was silent when I opened my eyes.
            </p>

            <p>
              The red moon had disappeared, but the strange feeling
              remained.
            </p>

            <p>
              I could still feel the bond between us.
            </p>

            <p>
              Somewhere beyond the trees, the Alpha was waiting.
            </p>

            <p>
              I knew I should run.
            </p>

            <p>
              Instead, I stepped forward.
            </p>

            <p className="chapter-ending">
              And that was the moment everything changed.
            </p>
          </>
        )}

        <div className="chapter-navigation">
          <button
            disabled={currentChapter <= 1}
            onClick={goPrevious}
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <button
            onClick={goNext}
            className="primary-btn"
          >
            Next Chapter
            <ChevronRight size={18} />
          </button>
        </div>
      </article>
    </main>
  );
}

/* =========================================================
   SEARCH PAGE
========================================================= */

function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const allItems = useMemo(
    () => [
      ...movies.map((item) => ({
        ...item,
        type: "movies",
      })),
      ...series.map((item) => ({
        ...item,
        type: "series",
      })),
      ...stories.map((item) => ({
        ...item,
        type: "stories",
      })),
    ],
    []
  );

  const results = allItems.filter((item) =>
    `${item.title} ${item.genre} ${item.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <main className="listing-page">
      <div className="listing-header">
        <span className="section-kicker">SEARCH</span>

        <h1>
          Results for <span>"{query}"</span>
        </h1>

        <p>
          {results.length}{" "}
          {results.length === 1 ? "result" : "results"} found
        </p>
      </div>

      {results.length > 0 ? (
        <div className="large-card-grid">
          {results.map((item) => (
            <MediaCard
              key={`${item.type}-${item.id}`}
              item={item}
              type={item.type}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={42} />

          <h2>No results found</h2>

          <p>
            Try searching for another movie, series or story.
          </p>

          <Link to="/" className="primary-btn">
            Back to Home
          </Link>
        </div>
      )}
    </main>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo">
            STORY<span>FLIX</span>
          </Link>

          <p>
            Your home for unforgettable movies, series and stories.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <strong>Explore</strong>

            <Link to="/movies">Movies</Link>
            <Link to="/series">Series</Link>
            <Link to="/stories">Stories</Link>
          </div>

          <div>
            <strong>StoryFlix</strong>

            <a href="#about">About</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 StoryFlix. All rights reserved.
        </span>

        <span>
          Made for stories worth watching and reading.
        </span>
      </div>
    </footer>
  );
}

/* =========================================================
   NOT FOUND
========================================================= */

function NotFound() {
  return (
    <main className="not-found">
      <div>
        <Sparkles size={38} />

        <span className="section-kicker">404</span>

        <h1>Page not found</h1>

        <p>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="primary-btn">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* MOVIES */}
        <Route
          path="/movies"
          element={
            <ListingPage
              title="Movies"
              description="Explore blockbuster movies, timeless classics and new favorites."
              items={movies}
              type="movies"
            />
          }
        />

        {/* SERIES */}
        <Route
          path="/series"
          element={
            <ListingPage
              title="Series"
              description="Discover binge-worthy series and unforgettable television."
              items={series}
              type="series"
            />
          }
        />

        {/* STORIES */}
        <Route
          path="/stories"
          element={
            <ListingPage
              title="Stories"
              description="Lose yourself in romance, fantasy, supernatural adventures and more."
              items={stories}
              type="stories"
            />
          }
        />

        {/* MOVIE DETAILS */}
        {movies.map((movie) => (
          <Route
            key={`movie-${movie.id}`}
            path={`/movies/${movie.id}`}
            element={
              <DetailPage
                item={movie}
                type="movies"
              />
            }
          />
        ))}

        {/* SERIES DETAILS */}
        {series.map((show) => (
          <Route
            key={`series-${show.id}`}
            path={`/series/${show.id}`}
            element={
              <DetailPage
                item={show}
                type="series"
              />
            }
          />
        ))}

        {/* STORY DETAILS + CHAPTERS */}
        {stories.map((story) => (
          <React.Fragment key={`story-${story.id}`}>
            <Route
              path={`/stories/${story.id}`}
              element={
                <DetailPage
                  item={story}
                  type="stories"
                />
              }
            />

            <Route
              path={`/stories/${story.id}/chapter/1`}
              element={<StoryReader story={story} />}
            />

            <Route
              path={`/stories/${story.id}/chapter/2`}
              element={<StoryReader story={story} />}
            />

            <Route
              path={`/stories/${story.id}/chapter/:chapter`}
              element={<StoryReader story={story} />}
            />
          </React.Fragment>
        ))}

        {/* SEARCH */}
        <Route
          path="/search"
          element={<SearchPage />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
