import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon, X, Star, Film, Tv, BookOpen } from "lucide-react";

import { movies, series, stories } from "../data/content";

function ResultCard({ item, type }) {
  const isMovie = type === "movie";
  const isSeries = type === "series";

  const href = isMovie
    ? `/movies/${item.id}`
    : isSeries
      ? `/series/${item.id}`
      : `/stories/${item.id}`;

  const Icon = isMovie ? Film : isSeries ? Tv : BookOpen;

  return (
    <Link
      to={href}
      className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-900">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-3 pt-12">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs font-semibold">
              <Star size={13} fill="currentColor" />
              {item.rating}
            </span>

            <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
              <Icon size={12} />
              {type}
            </span>
          </div>
        </div>
      </div>

      <div className="p-3">
        <h3 className="truncate text-sm font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-1 truncate text-xs text-zinc-500">
          {isMovie || isSeries
            ? `${item.year} • ${item.genre}`
            : `${item.genre} • ${item.views || "Popular"}`}
        </p>
      </div>
    </Link>
  );
}

function ResultSection({ title, items, type }) {
  if (!items.length) return null;

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-black md:text-2xl">
          {title}
        </h2>

        <span className="text-xs text-zinc-500">
          {items.length} result{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item) => (
          <ResultCard
            key={`${type}-${item.id}`}
            item={item}
            type={type}
          />
        ))}
      </div>
    </section>
  );
}

export default function Search() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return {
        movies: [],
        series: [],
        stories: [],
      };
    }

    const matches = (item) => {
      const searchableText = [
        item.title,
        item.genre,
        item.description,
        item.author,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    };

    return {
      movies: movies.filter(matches),
      series: series.filter(matches),
      stories: stories.filter(matches),
    };
  }, [normalizedQuery]);

  const totalResults =
    results.movies.length +
    results.series.length +
    results.stories.length;

  const clearSearch = () => setQuery("");

  return (
    <main className="min-h-screen bg-[#070707] px-5 pb-20 pt-28 text-white lg:px-8">

      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
            Discover
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Search StoryFlix
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-500 md:text-base">
            Find movies, series and stories you'll love.
          </p>
        </div>

        {/* SEARCH BOX */}
        <div className="relative mt-8 max-w-3xl">

          <SearchIcon
            size={21}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                clearSearch();
              }
            }}
            autoFocus
            type="search"
            placeholder="Search movies, series and stories..."
            className="h-16 w-full rounded-2xl border border-white/10 bg-white/[0.05] pl-14 pr-14 text-base text-white outline-none placeholder:text-zinc-600 transition focus:border-white/25 focus:bg-white/[0.07]"
          />

          {query && (
            <button
              onClick={clearSearch}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-2 text-zinc-500 transition hover:bg-white/10 hover:text-white"
            >
              <X size={19} />
            </button>
          )}

        </div>

        {/* EMPTY STATE */}
        {!query.trim() && (
          <div className="mt-20 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <SearchIcon size={28} className="text-zinc-600" />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              What are you looking for?
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600">
              Search for a movie, TV series, genre, author or story.
            </p>

          </div>
        )}

        {/* RESULTS */}
        {query.trim() && totalResults > 0 && (
          <>
            <div className="mt-10 border-b border-white/10 pb-4">
              <p className="text-sm text-zinc-500">
                Showing{" "}
                <span className="font-bold text-white">
                  {totalResults}
                </span>{" "}
                result{totalResults !== 1 ? "s" : ""} for{" "}
                <span className="font-bold text-white">
                  "{query}"
                </span>
              </p>
            </div>

            <ResultSection
              title="Movies"
              items={results.movies}
              type="movie"
            />

            <ResultSection
              title="Series"
              items={results.series}
              type="series"
            />

            <ResultSection
              title="Stories"
              items={results.stories}
              type="story"
            />
          </>
        )}

        {/* NO RESULTS */}
        {query.trim() && totalResults === 0 && (
          <div className="mt-20 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <SearchIcon size={28} className="text-zinc-600" />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              No results found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600">
              We couldn't find anything matching "{query}".
              Try another title, genre or author.
            </p>

            <button
              onClick={clearSearch}
              className="mt-6 rounded-lg bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
            >
              Clear Search
            </button>

          </div>
        )}

      </div>
    </main>
  );
}
