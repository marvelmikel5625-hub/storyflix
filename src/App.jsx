import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
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
} from "lucide-react";
import "./App.css";

/* =========================================================
   DATA
========================================================= */

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.6,
    image:
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
    image:
      "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    description:
      "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: 3,
    title: "The Batman",
    year: 2022,
    genre: "Crime",
    rating: 7.8,
    image:
      "https://image.tmdb.org/t/p/w780/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
  },
  {
    id: 4,
    title: "Interstellar",
    year: 2014,
    genre: "Adventure",
    rating: 8.7,
    image:
      "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Action",
    rating: 8.0,
    image:
      "https://image.tmdb.org/t/p/w780/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description:
      "Peter Parker's identity is revealed, bringing dangerous consequences into his life.",
  },
  {
    id: 6,
    title: "Avatar: The Way of Water",
    year: 2022,
    genre: "Fantasy",
    rating: 7.6,
    image:
      "https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    description:
      "Jake Sully and Neytiri have formed a family and must explore the oceans of Pandora.",
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.3,
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
    image:
      "https://image.tmdb.org/t/p/w780/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description:
      "An ex-hitman is forced back into the criminal underworld after a personal tragedy.",
  },
];

const series = [
  {
    id: 101,
    title: "Stranger Things",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.6,
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
    image:
      "https://image.tmdb.org/t/p/w780/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    description:
      "A chemistry teacher turns to manufacturing methamphetamine after receiving a devastating diagnosis.",
  },
];

const stories = [
  {
    id: 201,
    title: "The Alpha's Last Forbidden Bond",
    genre: "Werewolf Romance",
    rating: 4.9,
    views: "2.4M",
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
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1000&q=85",
    description:
      "A centuries-old vampire makes one final promise to the woman he was never supposed to love.",
  },
  {
    id: 205,
    title: "The King's Hidden Daughter",
    genre: "Royal Romance",
    rating: 4.8,
    views: "731K",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d2374?w=1000&q=85",
    description:
      "A hidden princess returns to the royal court and discovers that someone wants her dead.",
  },
  {
    id: 206,
    title: "Married to My Enemy",
    genre: "Enemies to Lovers",
    rating: 4.9,
    views: "1.5M",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1000&q=85",
    description:
      "Two powerful enemies are forced into a marriage that neither of them wants.",
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

  const submitSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    setSearchOpen(false);
    setSearch("");
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo">
            STORY<span>FLIX</span>
          </Link>

          <nav className={`main-nav ${mobileOpen ? "mobile-active" : ""}`}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            <button className="icon-btn desktop-only">
              <Bell size={20} />
            </button>

            <button className="profile-btn desktop-only">
              <User size={18} />
            </button>

            <button
              className="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
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
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const [myList, setMyList] = useState(false);

  return (
    <section className="hero">
      <div
        className="hero-backdrop"
        style={{
          backgroundImage: `url(${movies[0].image})`,
        }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-label">
          <span>FEATURED</span>
          <span className="hero-rating">
            <Star size={14} fill="currentColor" />
            8.6
          </span>
        </div>

        <h1>Dune: Part Two</h1>

        <div className="hero-meta">
          <span>2024</span>
          <span>2h 46m</span>
          <span>Sci-Fi</span>
          <span className="quality">4K</span>
        </div>

        <p>
          Paul Atreides unites with Chani and the Fremen while seeking revenge
          against the conspirators who destroyed his family.
        </p>

        <div className="hero-buttons">
          <Link to="/movies/1" className="primary-btn">
            <Play size={19} fill="currentColor" />
            Watch Now
          </Link>

          <button
            className="secondary-btn"
            onClick={() => setMyList(!myList)}
          >
            {myList ? <Check size={19} /> : <Plus size={19} />}
            {myList ? "Added" : "My List"}
          </button>
        </div>
      </div>

      <div className="hero-fade" />
    </section>
  );
}

/* =========================================================
   CONTENT CARD
========================================================= */

function MediaCard({ item, type }) {
  return (
    <Link
      to={`/${type}/${item.id}`}
      className="media-card"
    >
      <div className="card-image-wrap">
        <img src={item.image} alt={item.title} loading="lazy" />

        <div className="card-gradient" />

        <div className="card-hover">
          <div className="play-circle">
            {type === "stories" ? (
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
          {type === "stories" ? (
            <>
              <span>{item.genre}</span>
              <span>•</span>
              <span>{item.views} views</span>
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

function ContentRow({ title, items, type, seeAll = true }) {
  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">DISCOVER</span>
          <h2>{title}</h2>
        </div>

        {seeAll && (
          <Link to={`/${type}`} className="see-all">
            See all
            <ChevronRight size={17} />
          </Link>
        )}
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
    <div>
      <Hero />

      <main className="page-content">
        <ContentRow
          title="Trending Movies"
          items={movies}
          type="movies"
        />

        <ContentRow
          title="Popular Series"
          items={series}
          type="series"
        />

        <section className="story-feature">
          <div className="story-feature-bg" />

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
          items={stories}
          type="stories"
        />
      </main>
    </div>
  );
}

/* =========================================================
   LIST PAGE
========================================================= */

function ListingPage({ title, items, type, description }) {
  return (
    <main className="listing-page">
      <div className="listing-header">
        <span className="section-kicker">STORYFLIX</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="large-card-grid">
        {items.map((item) => (
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
  const [myList, setMyList] = useState(false);
  const navigate = useNavigate();

  const isStory = type === "stories";

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <img
          src={item.image}
          alt=""
          className="detail-backdrop"
        />

        <div className="detail-overlay" />

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="detail-content">
          <div className="detail-type">
            {isStory ? (
              <>
                <BookOpen size={15} />
                Story
              </>
            ) : type === "series" ? (
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

          <h1>{item.title}</h1>

          <div className="detail-meta">
            {isStory ? (
              <>
                <span>{item.genre}</span>
                <span>•</span>
                <span>{item.views} views</span>
              </>
            ) : (
              <>
                <span>{item.year}</span>
                <span>•</span>
                <span>{item.genre}</span>
                <span>•</span>
                <span>{type === "series" ? "TV Series" : "Movie"}</span>
              </>
            )}
          </div>

          <p>{item.description}</p>

          <div className="detail-actions">
            <Link
              to={
                isStory
                  ? `/stories/${item.id}/chapter/1`
                  : "#"
              }
              className="primary-btn"
            >
              {isStory ? (
                <>
                  <BookOpen size={18} />
                  Start Reading
                </>
              ) : (
                <>
                  <Play size={18} fill="currentColor" />
                  Watch Trailer
                </>
              )}
            </Link>

            <button
              className="secondary-btn"
              onClick={() => setMyList(!myList)}
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
          <h2>About this {isStory ? "story" : "title"}</h2>
          <p>{item.description}</p>
        </div>

        <div className="info-box">
          <div>
            <span>Release</span>
            <strong>{item.year || "Ongoing"}</strong>
          </div>

          <div>
            <span>Rating</span>
            <strong>{item.rating}/10</strong>
          </div>

          <div>
            <span>Genre</span>
            <strong>{item.genre}</strong>
          </div>
        </div>
      </section>

      <section className="detail-recommendations">
        <ContentRow
          title="You May Also Like"
          items={isStory ? stories : type === "series" ? series : movies}
          type={type}
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

        <button className="reader-settings">
          Aa
        </button>
      </div>

      <article className="chapter">
        <div className="chapter-number">CHAPTER ONE</div>

        <h1>The Bond That Should Never Have Been</h1>

        <div className="chapter-divider" />

        <p>
          The night the moon turned red, everyone in the kingdom knew
          something had changed.
        </p>

        <p>
          I felt it before I saw it.
        </p>

        <p>
          A strange pressure settled over my chest as I stood at the edge of
          the forest, staring at the silver light spilling between the trees.
          The wolves had gone silent.
        </p>

        <p>
          Then I heard footsteps behind me.
        </p>

        <p>
          I turned slowly.
        </p>

        <p>
          He stood beneath the moonlight, watching me with an expression I
          could not understand.
        </p>

        <p>
          The Alpha.
        </p>

        <p>
          And somehow, despite everything I had been taught, I knew exactly
          what he was.
        </p>

        <p className="chapter-ending">
          My forbidden mate.
        </p>

        <div className="chapter-navigation">
          <button disabled>
            <ChevronLeft size={18} />
            Previous
          </button>

          <button
            onClick={() =>
              navigate(`/stories/${story.id}/chapter/2`)
            }
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
   SEARCH
========================================================= */

function SearchPage() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";

  const allItems = [
    ...movies.map((x) => ({ ...x, type: "movies" })),
    ...series.map((x) => ({ ...x, type: "series" })),
    ...stories.map((x) => ({ ...x, type: "stories" })),
  ];

  const results = allItems.filter((item) =>
    `${item.title} ${item.genre}`
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

        <p>{results.length} results found</p>
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
          <Search size={40} />
          <h2>No results found</h2>
          <p>Try searching for another movie, series or story.</p>
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
        <div>
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
            <a href="#">About</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 StoryFlix. All rights reserved.
      </div>
    </footer>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

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

          {movies.map((movie) => (
            <Route
              key={movie.id}
              path={`/movies/${movie.id}`}
              element={<DetailPage item={movie} type="movies" />}
            />
          ))}

          {series.map((show) => (
            <Route
              key={show.id}
              path={`/series/${show.id}`}
              element={<DetailPage item={show} type="series" />}
            />
          ))}

          {stories.map((story) => (
            <React.Fragment key={story.id}>
              <Route
                path={`/stories/${story.id}`}
                element={<DetailPage item={story} type="stories" />}
              />

              <Route
                path={`/stories/${story.id}/chapter/1`}
                element={<StoryReader story={story} />}
              />

              <Route
                path={`/stories/${story.id}/chapter/2`}
                element={<StoryReader story={story} />}
              />
            </React.Fragment>
          ))}

          <Route path="/search" element={<SearchPage />} />

          <Route
            path="*"
            element={
              <main className="not-found">
                <div>
                  <span className="section-kicker">404</span>
                  <h1>Page not found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                  <Link to="/" className="primary-btn">
                    Back to Home
                  </Link>
                </div>
              </main>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
