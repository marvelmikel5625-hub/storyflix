import { Link } from "react-router-dom";
import { Play, BookOpen, Star } from "lucide-react";

export default function ContentCard({ item, type }) {
  const story = type === "story";

  const path = story
    ? `/stories/${item.id}`
    : type === "movie"
      ? `/movies/${item.id}`
      : `/series/${item.id}`;

  return (
    <Link to={path} className="group block">

      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900">

        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

        <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">

          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-black">

            {story ? (
              <>
                <BookOpen size={13} />
                Read
              </>
            ) : (
              <>
                <Play size={13} fill="black" />
                Watch
              </>
            )}

          </span>

        </div>

        {item.rating && (
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-xs font-semibold backdrop-blur">
            <Star size={11} fill="currentColor" />
            {item.rating}
          </div>
        )}

      </div>

      <h3 className="mt-3 truncate text-sm font-bold">
        {item.title}
      </h3>

      <p className="mt-1 truncate text-xs text-zinc-500">
        {story
          ? `${item.genre} • ${item.views} views`
          : `${item.year} • ${item.genre}`}
      </p>

    </Link>
  );
}
