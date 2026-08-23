import { Link } from "react-router-dom";
import {
  Play,
  Plus,
  ChevronRight,
  Star,
  BookOpen,
  Film,
  Tv,
} from "lucide-react";

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: "2024",
    genre: "Sci-Fi",
    rating: "8.6",
    image:
      "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: "2023",
    genre: "Drama",
    rating: "8.6",
    image:
      "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 3,
    title: "The Batman",
    year: "2022",
    genre: "Crime",
    rating: "7.8",
    image:
      "https://image.tmdb.org/t/p/w780/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 4,
    title: "Interstellar",
    year: "2014",
    genre: "Adventure",
    rating: "8.7",
    image:
      "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    year: "2021",
    genre: "Action",
    rating: "8.0",
    image:
      "https://image.tmdb.org/t/p/w780/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    id: 6,
    title: "Avatar: The Way of Water",
    year: "2022",
    genre: "Fantasy",
    rating: "7.6",
    image:
      "https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    year: "2019",
    genre: "Action",
    rating: "8.3",
    image:
      "https://image.tmdb.org/t/p/w780/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 8,
    title: "John Wick",
    year: "2014",
    genre: "Action",
    rating: "7.4",
    image:
      "https://image.tmdb.org/t/p/w780/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
  },
];

const series = [
  {
    id: 101,
    title: "Stranger Things",
    year: "2016",
    genre: "Sci-Fi",
    rating: "8.6",
    image:
      "https://image.tmdb.org/t/p/w780/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    id: 102,
    title: "The Last of Us",
    year: "2023",
    genre: "Drama",
    rating: "8.6",
    image:
      "https://image.tmdb.org/t/p/w780/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  },
  {
    id: 103,
    title: "Wednesday",
    year: "2022",
    genre: "Mystery",
    rating: "8.0",
    image:
      "https://image.tmdb.org/t/p/w780/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
  },
  {
    id: 104,
    title: "House of the Dragon",
    year: "2022",
    genre: "Fantasy",
    rating: "8.4",
    image:
      "https://image.tmdb.org/t/p/w780/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
  },
  {
    id: 105,
    title: "The Boys",
    year: "2019",
    genre: "Action",
    rating: "8.7",
    image:
      "https://image.tmdb.org/t/p/w780/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    id: 106,
    title: "Breaking Bad",
    year: "2008",
    genre: "Crime",
    rating: "9.5",
    image:
      "https://image.tmdb.org/t/p/w780/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
  },
];

const stories = [
  {
    id: 201,
    title: "The Alpha's Last Forbidden Bond",
    genre: "Werewolf Romance",
    views: "2.4M",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1511108690759-009324a90311?w=900&q=85",
  },
  {
    id: 202,
    title: "The Billionaire's Secret Bride",
    genre: "Billionaire Romance",
    views: "1.8M",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=900&q=85",
  },
  {
    id: 203,
    title: "Moonlight Academy",
    genre: "Fantasy",
    views: "954K",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=900&q=85",
  },
  {
    id: 204,
    title: "The Vampire's Promise",
    genre: "Vampire Romance",
    views: "1.2M",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&q=85",
  },
  {
    id: 205,
    title: "The King's Hidden Daughter",
    genre: "Royal Romance",
    views: "731K",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d2374?w=900&q=85",
  },
  {
    id: 206,
    title: "Married to My Enemy",
    genre: "Enemies to Lovers",
    views: "1.5M",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=900&q=85",
  },
];

function SectionHeader({ icon: Icon, title, link }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
          <Icon size={18} />
        </div>

        <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">
          {title}
        </h2>
      </div>

      <Link
        to={link}
        className="group flex shrink-0 items-center gap-1 text-sm font-medium text-zinc-500 transition hover:text-white"
      >
        See all
        <ChevronRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="group block min-w-[155px] flex-1 sm:min-w-[180px] lg:min-w-0"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900">
        <img
          src={movie.image}
          alt={movie.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-bold backdrop-blur-md">
          <Star size={11} className="fill-yellow-400 text-yellow-400" />
          {movie.rating}
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-between opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-xs font-semibold text-white">
            {movie.year}
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            <Play size={13} fill="currentColor" />
          </span>
        </div>
      </div>

      <h3 className="mt-3 line-clamp-1 text-sm font-bold text-white transition group-hover:text-red-400">
        {movie.title}
      </h3>

      <p className="mt-1 text-xs text-zinc-500">
        {movie.year} • {movie.genre}
      </p>
    </Link>
  );
}

function StoryCard({ story }) {
  return (
    <Link
      to={`/stories/${story.id}`}
      className="group block min-w-[155px] flex-1 sm:min-w-[180px] lg:min-w-0"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-bold backdrop-blur-md">
          <Star size={11} className="fill-yellow-400 text-yellow-400" />
          {story.rating}
        </div>

        <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="flex items-center gap-1 text-xs font-medium text-white">
            <BookOpen size={13} />
            Read now
          </span>
        </div>
      </div>

      <h3 className="mt-3 line-clamp-2 text-sm font-bold leading-5 text-white transition group-hover:text-red-400">
        {story.title}
      </h3>

      <p className="mt-1 line-clamp-1 text-xs text-zinc-500">
        {story.genre} • {story.views} views
      </p>
    </Link>
  );
}

function HorizontalRow({ children }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none sm:gap-5">
      {children}
    </div>
  );
}

export default function Home() {
  const featured = movies[0];

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden sm:min-h-[720px]">
        <img
          src="https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
          alt={featured.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />

        <div className="relative mx-auto flex min-h-[680px] max-w-[1500px] items-end px-5 pb-24 sm:min-h-[720px] sm:px-8 sm:pb-28 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-md bg-red-600 px-2.5 py-1 text-white">
                FEATURED
              </span>

              <span className="flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-white backdrop-blur-md">
                <Star
                  size={11}
                  className="fill-yellow-400 text-yellow-400"
                />
                {featured.rating}
              </span>

              <span className="rounded-md bg-white/10 px-2.5 py-1 text-zinc-200 backdrop-blur-md">
                {featured.year}
              </span>

              <span className="rounded-md bg-white/10 px-2.5 py-1 text-zinc-200 backdrop-blur-md">
                {featured.genre}
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              {featured.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
              Paul Atreides unites with Chani and the Fremen while seeking
              revenge against the conspirators who destroyed his family.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={`/movies/${featured.id}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-zinc-200"
              >
                <Play size={16} fill="currentColor" />
                Watch Now
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                <Plus size={17} />
                My List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-[1500px] space-y-14 px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* MOVIES */}
        <section>
          <SectionHeader
            icon={Film}
            title="Trending Movies"
            link="/movies"
          />

          <HorizontalRow>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </HorizontalRow>
        </section>

        {/* SERIES */}
        <section>
          <SectionHeader
            icon={Tv}
            title="Popular Series"
            link="/series"
          />

          <HorizontalRow>
            {series.map((item) => (
              <MovieCard
                key={item.id}
                movie={item}
              />
            ))}
          </HorizontalRow>
        </section>

        {/* STORIES */}
        <section>
          <SectionHeader
            icon={BookOpen}
            title="Trending Stories"
            link="/stories"
          />

          <HorizontalRow>
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
              />
            ))}
          </HorizontalRow>
        </section>

        {/* PROMOTIONAL SECTION */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/50 via-zinc-950 to-zinc-950 p-7 sm:p-10 lg:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Your next obsession
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Stories that keep you up all night.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
              Discover addictive novels, unforgettable characters and worlds
              worth getting lost in.
            </p>

            <Link
              to="/stories"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-500"
            >
              <BookOpen size={17} />
              Explore Stories
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
