import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  Eye,
  Star,
  ChevronRight,
  User,
} from "lucide-react";

import { stories } from "../data/content";

export default function StoryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const story = stories.find(
    (item) => item.id === Number(id)
  );

  if (!story) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070707] px-5 text-white">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            404
          </p>

          <h1 className="mt-3 text-3xl font-black">
            Story Not Found
          </h1>

          <p className="mt-3 text-sm text-zinc-500">
            We couldn't find the story you're looking for.
          </p>

          <button
            onClick={() => navigate("/stories")}
            className="mt-6 rounded-lg bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
          >
            Browse Stories
          </button>
        </div>
      </main>
    );
  }

  /*
    Temporary chapters for the prototype.

    Later these will come from Supabase.
  */
  const chapters = [
    {
      id: 1,
      title: "The Awakening",
      date: "Aug 20, 2026",
    },
    {
      id: 2,
      title: "The Mark",
      date: "Aug 19, 2026",
    },
    {
      id: 3,
      title: "The Forbidden Bond",
      date: "Aug 18, 2026",
    },
    {
      id: 4,
      title: "The Alpha",
      date: "Aug 17, 2026",
    },
    {
      id: 5,
      title: "Blood Moon",
      date: "Aug 16, 2026",
    },
    {
      id: 6,
      title: "The Secret",
      date: "Aug 15, 2026",
    },
    {
      id: 7,
      title: "The Rejection",
      date: "Aug 14, 2026",
    },
    {
      id: 8,
      title: "Into the Forest",
      date: "Aug 13, 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0">
          <img
            src={story.image}
            alt=""
            className="h-full w-full object-cover opacity-20 blur-2xl"
          />

          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-5 pb-16 pt-28 lg:px-8">

          <button
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <div className="grid items-center gap-10 md:grid-cols-[260px_1fr]">

            {/* COVER */}
            <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-xl border border-white/10 shadow-2xl md:mx-0">
              <img
                src={story.image}
                alt={story.title}
                className="aspect-[2/3] w-full object-cover"
              />
            </div>

            {/* INFORMATION */}
            <div>

              <div className="flex flex-wrap items-center gap-2">

                <span className="rounded bg-red-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider">
                  Story
                </span>

                <span className="text-sm text-zinc-400">
                  {story.genre}
                </span>

              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                {story.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-5 text-sm">

                <span className="flex items-center gap-1.5">
                  <Star
                    size={15}
                    fill="currentColor"
                  />
                  {story.rating}
                </span>

                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Eye size={15} />
                  {story.views || "Popular"}
                </span>

              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                {story.description ||
                  `Discover ${story.title}, a gripping serialized story available exclusively on StoryFlix.`}
              </p>

              {/* AUTHOR */}
              <div className="mt-7 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <User size={18} className="text-zinc-400" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Written by
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    {story.author || "StoryFlix Author"}
                  </p>
                </div>

              </div>

              {/* ACTIONS */}
              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  to={`/stories/${story.id}/chapter/1`}
                  className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
                >
                  <BookOpen size={17} />
                  Start Reading
                </Link>

                <button
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur transition hover:bg-white/20"
                >
                  <Bookmark size={17} />
                  Add to Library
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* STORY CONTENT */}
      <section className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">

          {/* CHAPTERS */}
          <div>

            <div className="mb-6 flex items-end justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">
                  Read now
                </p>

                <h2 className="mt-2 text-2xl font-black md:text-3xl">
                  Chapters
                </h2>
              </div>

              <span className="text-xs text-zinc-600">
                {chapters.length} chapters
              </span>

            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">

              {chapters.map((chapter, index) => (
                <Link
                  key={chapter.id}
                  to={`/stories/${story.id}/chapter/${chapter.id}`}
                  className="group flex items-center justify-between border-b border-white/10 px-5 py-5 transition last:border-b-0 hover:bg-white/[0.04]"
                >

                  <div className="flex items-center gap-4">

                    <span className="w-8 text-xs font-bold text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-sm font-bold group-hover:text-white">
                        {chapter.title}
                      </h3>

                      <p className="mt-1 text-xs text-zinc-600">
                        {chapter.date}
                      </p>
                    </div>

                  </div>

                  <ChevronRight
                    size={18}
                    className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-white"
                  />

                </Link>
              ))}

            </div>

          </div>

          {/* SIDEBAR */}
          <aside>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">

              <h3 className="text-sm font-bold">
                About this story
              </h3>

              <div className="mt-5 space-y-5">

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Genre
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    {story.genre}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Rating
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-300">
                    <Star size={14} fill="currentColor" />
                    {story.rating}/5
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Readers
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    {story.views || "Popular"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Status
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    Ongoing
                  </p>
                </div>

              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}
