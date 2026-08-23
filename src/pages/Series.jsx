import ContentCard from "../components/ContentCard";
import { series } from "../data/content";

export default function Series() {
  return (
    <main className="mx-auto max-w-[1400px] px-5 pb-20 pt-32 lg:px-8">

      <div className="mb-10">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500">
          Discover
        </p>

        <h1 className="mt-2 text-4xl font-black md:text-5xl">
          Series
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Explore popular television series and shows.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {series.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            type="series"
          />
        ))}
      </div>

    </main>
  );
}
