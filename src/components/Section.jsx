import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";

export default function Section({
  title,
  eyebrow,
  items,
  type,
  link,
}) {
  return (
    <section className="mb-14">

      <div className="mb-5 flex items-end justify-between">

        <div>
          {eyebrow && (
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-red-500">
              {eyebrow}
            </p>
          )}

          <h2 className="text-xl font-black md:text-2xl">
            {title}
          </h2>
        </div>

        <Link
          to={link}
          className="flex items-center gap-1 text-xs font-semibold text-zinc-500 transition hover:text-white"
        >
          See all
          <ChevronRight size={15} />
        </Link>

      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            type={type}
          />
        ))}
      </div>

    </section>
  );
}
