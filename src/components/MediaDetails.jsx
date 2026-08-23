import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Plus,
  Star,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";
import ContentCard from "./ContentCard";

export default function MediaDetails({
  item,
  type,
  relatedItems = [],
}) {
  const navigate = useNavigate();

  if (!item) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070707] px-5 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-black">
            Content not found
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 rounded-lg bg-white px-5 py-3 text-sm font-bold text-black"
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }

  const isMovie = type === "movie";

  return (
    <main className="bg-[#070707] text-white">

      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden">

        <img
          src={item.backdrop || item.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/20" />

        <div className="relative mx-auto flex min-h-[620px] max-w-[1400px] items-end px-5 pb-16 pt-28 lg:px-8">

          <div className="max-w-3xl">

            <button
              onClick={() => navigate(-1)}
              className="mb-8 flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Back
            </button>

            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">

              <span className="rounded bg-red-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider">
                {isMovie ? "Movie" : "Series"}
              </span>

              <span className="flex items-center gap-1 text-zinc-200">
                <Star
                  size={14}
                  fill="currentColor"
                />
                {item.rating}
              </span>

              <span className="text-zinc-400">
                {item.year}
              </span>

              <span className="text-zinc-400">
                {item.genre}
              </span>

            </div>

            <h1 className="text-5xl font-black tracking-[-2px] md:text-7xl">
              {item.title}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
              {item.description ||
                `Explore ${item.title}, one of the most popular ${isMovie ? "movies" : "series"} available on StoryFlix.`}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={() => alert("Trailer player coming soon")}
                className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
              >
                <Play size={17} fill="black" />
                Watch Trailer
              </button>

              <button className="flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur transition hover:bg-white/20">
                <Plus size={18} />
                My List
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* INFORMATION */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">

          <div>

            <h2 className="text-xl font-black">
              Overview
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
              {item.description ||
                `Discover everything about ${item.title}, including its story, genre, release information and more.`}
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">

            <h3 className="text-sm font-bold">
              Information
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-center gap-3 text-sm">
                <Calendar
                  size={16}
                  className="text-zinc-500"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Release
                  </p>

                  <p className="mt-1 text-zinc-300">
                    {item.year}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Star
                  size={16}
                  className="text-zinc-500"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Rating
                  </p>

                  <p className="mt-1 text-zinc-300">
                    {item.rating}/10
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Clock
                  size={16}
                  className="text-zinc-500"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Type
                  </p>

                  <p className="mt-1 text-zinc-300">
                    {isMovie ? "Movie" : "TV Series"}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* RELATED */}
      {relatedItems.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-8">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-xl font-black md:text-2xl">
              You May Also Like
            </h2>

            <Link
              to={isMovie ? "/movies" : "/series"}
              className="flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-white"
            >
              See all
              <ChevronRight size={15} />
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

            {relatedItems.slice(0, 6).map((related) => (
              <ContentCard
                key={related.id}
                item={related}
                type={isMovie ? "movie" : "series"}
              />
            ))}

          </div>

        </section>
      )}

    </main>
  );
}
