import ContentCard from "../components/ContentCard";
import { stories } from "../data/content";

export default function Stories() {
  return (
    <main className="mx-auto max-w-[1400px] px-5 pb-20 pt-32 lg:px-8">

      <div className="mb-10">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500">
          Read
        </p>

        <h1 className="mt-2 text-4xl font-black md:text-5xl">
          Stories
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Discover addictive stories, novels and serialized fiction.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {stories.map((story) => (
          <ContentCard
            key={story.id}
            item={story}
            type="story"
          />
        ))}
      </div>

    </main>
  );
}
