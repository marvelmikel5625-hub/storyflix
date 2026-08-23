import { Link } from "react-router-dom";
import { Play, Plus, Star } from "lucide-react";

export default function Hero({ movie }) {
  return (
    <section className="relative min-h-[680px] overflow-hidden">

      <img
        src={movie.backdrop}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1400px] items-end px-5 pb-20 pt-32 lg:px-8">

        <div className="max-w-2xl">

          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">

            <span className="rounded bg-red-500 px-2.5 py-1 text-[10px] font-black tracking-wider">
              FEATURED
            </span>

            <span className="flex items-center gap-1 text-zinc-300">
              <Star size={14} fill="currentColor" />
              {movie.rating}
            </span>

            <span className="text-zinc-400">
              {movie.year}
            </span>

            <span className="text-zinc-400">
              {movie.genre}
            </span>

          </div>

          <h1 className="text-5xl font-black tracking-[-2px] md:text-7xl">
            {movie.title}
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-300 md:text-base">
            {movie.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              to={`/movies/${movie.id}`}
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
            >
              <Play size={17} fill="black" />
              Watch Now
            </Link>

            <button className="flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur transition hover:bg-white/20">
              <Plus size={18} />
              My List
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
