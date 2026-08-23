import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  List,
  Minus,
  Plus,
  Sun,
  Moon,
} from "lucide-react";

import { stories } from "../data/content";

const chapters = [
  {
    id: 1,
    title: "The Awakening",
    content: [
      `The rain had been falling for hours.

      Emma stood beside the bedroom window, watching the drops race down the glass. The entire house was quiet, but she couldn't shake the feeling that something was wrong.`,

      `She had felt it before.

      That strange pressure in her chest. The sudden warmth beneath her skin. The heartbeat that didn't seem entirely hers.`,

      `Tonight, however, it was different.`,

      `A sharp pain suddenly tore through her shoulder.

      Emma gasped and stumbled away from the window. Her hand immediately went to the place where the pain had started.`,

      `There was nothing there.

      No wound.

      No blood.

      Only a faint silver mark beneath her skin.`,

      `"What is happening to me?" she whispered.`,

      `Outside, somewhere beyond the trees, a wolf howled.`,

      `Emma froze.`,

      `The sound wasn't frightening.

      It was familiar.`,

      `Almost like someone was calling her name.`,

      `She stepped toward the window again, but before she could reach it, another howl echoed through the darkness.`,

      `This time, the mark on her shoulder burned.`,

      `And somewhere deep inside the forest, something answered.`,
    ],
  },

  {
    id: 2,
    title: "The Mark",
    content: [
      `Emma barely slept that night.

      Every time she closed her eyes, she saw the forest.`,

      `By morning, the silver mark had become darker.`,

      `She stood in front of the mirror and pulled her shirt away from her shoulder.`,

      `The mark looked almost like a crescent moon surrounded by tiny lines.`,

      `"That's impossible."`,

      `She touched it carefully.`,

      `The moment her fingers made contact, a voice appeared inside her mind.`,

      `"Find me."`,

      `Emma stepped backward.`,

      `Someone was standing outside her bedroom door.`,

      `She could hear breathing.`,

      `Slow.

      Deep.

      Not human.`,
    ],
  },

  {
    id: 3,
    title: "The Forbidden Bond",
    content: [
      `The forest was darker than Emma remembered.`,

      `She shouldn't have come here.

      Every instinct told her to turn around.`,

      `But the voice had become impossible to ignore.`,

      `"Emma."`,

      `She stopped.`,

      `A figure emerged between the trees.`,

      `Tall.

      Silent.

      Watching her.`,

      `Their eyes met.`,

      `And the mark on Emma's shoulder suddenly burned brighter than ever.`,
    ],
  },

  {
    id: 4,
    title: "The Alpha",
    content: [
      `The man stepped closer.`,

      `"You shouldn't be here."`,

      `Emma swallowed.`,

      `"Then why did you call me?"`,

      `His expression changed.`,

      `For the first time, she saw something in his eyes that looked like fear.`,

      `"Because I didn't."`,
    ],
  },

  {
    id: 5,
    title: "Blood Moon",
    content: [
      `The moon turned red above the mountains.`,

      `Every wolf in the territory could feel the change.`,

      `And somewhere in the middle of it all, Emma finally understood what the mark meant.`,

      `She wasn't chosen by the pack.`,

      `She was connected to its Alpha.`,
    ],
  },

  {
    id: 6,
    title: "The Secret",
    content: [
      `There were secrets buried beneath the old estate.`,

      `Secrets the Alpha had spent years protecting.`,

      `But Emma had already discovered the first one.`,

      `The bond between them wasn't an accident.`,

      `Someone had created it.`,
    ],
  },

  {
    id: 7,
    title: "The Rejection",
    content: [
      `Emma stared at him.`,

      `"Say it."`,

      `He looked away.`,

      `"I reject the bond."`,

      `The words broke something inside her.`,

      `But neither of them expected what happened next.`,
    ],
  },

  {
    id: 8,
    title: "Into the Forest",
    content: [
      `Emma ran.`,

      `She didn't know where she was going.`,

      `She only knew she couldn't stay.`,

      `Behind her, the wolves began to howl.`,

      `And the Alpha followed.`,
    ],
  },
];

export default function ChapterReader() {
  const { id, chapterId } = useParams();
  const navigate = useNavigate();

  const [fontSize, setFontSize] = useState(18);
  const [darkMode, setDarkMode] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [showChapters, setShowChapters] = useState(false);

  const story = stories.find(
    (item) => item.id === Number(id)
  );

  const currentChapter = chapters.find(
    (chapter) => chapter.id === Number(chapterId)
  );

  const currentIndex = chapters.findIndex(
    (chapter) => chapter.id === Number(chapterId)
  );

  const previousChapter =
    currentIndex > 0
      ? chapters[currentIndex - 1]
      : null;

  const nextChapter =
    currentIndex < chapters.length - 1
      ? chapters[currentIndex + 1]
      : null;

  const progress = useMemo(() => {
    if (chapters.length <= 1) return 100;

    return ((currentIndex + 1) / chapters.length) * 100;
  }, [currentIndex]);

  if (!story || !currentChapter) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070707] px-5 text-white">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            404
          </p>

          <h1 className="mt-3 text-3xl font-black">
            Chapter Not Found
          </h1>

          <p className="mt-3 text-sm text-zinc-500">
            This chapter doesn't exist.
          </p>

          <Link
            to={`/stories/${id}`}
            className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-black"
          >
            Back to Story
          </Link>
        </div>
      </main>
    );
  }

  const readerBackground = darkMode
    ? "bg-[#0a0a0a] text-zinc-200"
    : "bg-[#f5f1e8] text-[#29251f]";

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${readerBackground}`}
    >
      {/* TOP BAR */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
          darkMode
            ? "border-white/10 bg-[#0a0a0a]/90"
            : "border-black/10 bg-[#f5f1e8]/90"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">

          {/* BACK */}
          <button
            onClick={() => navigate(`/stories/${story.id}`)}
            className="flex items-center gap-2 text-sm font-medium opacity-70 transition hover:opacity-100"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">
              Back to Story
            </span>
          </button>

          {/* TITLE */}
          <div className="hidden max-w-[40%] text-center md:block">
            <p className="truncate text-xs font-bold">
              {story.title}
            </p>

            <p className="truncate text-[10px] opacity-50">
              Chapter {currentChapter.id}:{" "}
              {currentChapter.title}
            </p>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-1">

            <button
              onClick={() =>
                setFontSize((size) =>
                  Math.max(14, size - 1)
                )
              }
              className="rounded-lg p-2 opacity-70 transition hover:bg-black/10 hover:opacity-100 dark:hover:bg-white/10"
              aria-label="Decrease font size"
            >
              <Minus size={17} />
            </button>

            <button
              onClick={() =>
                setFontSize((size) =>
                  Math.min(25, size + 1)
                )
              }
              className="rounded-lg p-2 opacity-70 transition hover:bg-black/10 hover:opacity-100 dark:hover:bg-white/10"
              aria-label="Increase font size"
            >
              <Plus size={17} />
            </button>

            <button
              onClick={() =>
                setDarkMode((value) => !value)
              }
              className="rounded-lg p-2 opacity-70 transition hover:bg-black/10 hover:opacity-100 dark:hover:bg-white/10"
              aria-label="Toggle reading mode"
            >
              {darkMode ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            <button
              onClick={() =>
                setBookmarked((value) => !value)
              }
              className={`rounded-lg p-2 transition hover:bg-black/10 dark:hover:bg-white/10 ${
                bookmarked
                  ? "opacity-100"
                  : "opacity-70"
              }`}
              aria-label="Bookmark chapter"
            >
              <Bookmark
                size={17}
                fill={
                  bookmarked
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

          </div>
        </div>

        {/* PROGRESS */}
        <div className="h-[2px] bg-black/10 dark:bg-white/5">
          <div
            className="h-full bg-red-500 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </header>

      {/* READER */}
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-14 md:px-8 md:pt-20">

        {/* STORY LABEL */}
        <div className="mb-8 text-center">

          <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-40">
            {story.title}
          </p>

          <div className="mx-auto mt-5 h-px w-12 bg-current opacity-20" />

        </div>

        {/* CHAPTER TITLE */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">
            Chapter {currentChapter.id}
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            {currentChapter.title}
          </h1>

        </div>

        {/* CONTENT */}
        <div
          className="mt-14"
          style={{
            fontSize: `${fontSize}px`,
          }}
        >
          {currentChapter.content.map(
            (paragraph, index) => (
              <p
                key={index}
                className="mb-7 whitespace-pre-line leading-[1.9] opacity-90"
              >
                {paragraph}
              </p>
            )
          )}
        </div>

        {/* END MARK */}
        <div className="my-14 flex items-center justify-center gap-3 opacity-30">
          <span className="h-px w-16 bg-current" />
          <span className="text-xs">✦</span>
          <span className="h-px w-16 bg-current" />
        </div>

        {/* CHAPTER NAVIGATION */}
        <div className="grid gap-3 sm:grid-cols-2">

          {previousChapter ? (
            <Link
              to={`/stories/${story.id}/chapter/${previousChapter.id}`}
              className={`flex items-center gap-3 rounded-xl border p-5 transition ${
                darkMode
                  ? "border-white/10 hover:bg-white/5"
                  : "border-black/10 hover:bg-black/5"
              }`}
            >
              <ChevronLeft size={20} />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-40">
                  Previous
                </p>

                <p className="mt-1 text-sm font-bold">
                  {previousChapter.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link
              to={`/stories/${story.id}/chapter/${nextChapter.id}`}
              className={`flex items-center justify-end gap-3 rounded-xl border p-5 text-right transition ${
                darkMode
                  ? "border-white/10 hover:bg-white/5"
                  : "border-black/10 hover:bg-black/5"
              }`}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-40">
                  Next Chapter
                </p>

                <p className="mt-1 text-sm font-bold">
                  {nextChapter.title}
                </p>
              </div>

              <ChevronRight size={20} />
            </Link>
          ) : (
            <div />
          )}

        </div>

        {/* CHAPTER LIST BUTTON */}
        <button
          onClick={() =>
            setShowChapters((value) => !value)
          }
          className={`mx-auto mt-8 flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-bold transition ${
            darkMode
              ? "border-white/10 hover:bg-white/5"
              : "border-black/10 hover:bg-black/5"
          }`}
        >
          <List size={17} />
          {showChapters
            ? "Hide Chapters"
            : "View All Chapters"}
        </button>

        {/* CHAPTER LIST */}
        {showChapters && (
          <div
            className={`mt-5 overflow-hidden rounded-xl border ${
              darkMode
                ? "border-white/10"
                : "border-black/10"
            }`}
          >
            {chapters.map((chapter) => {
              const active =
                chapter.id ===
                currentChapter.id;

              return (
                <Link
                  key={chapter.id}
                  to={`/stories/${story.id}/chapter/${chapter.id}`}
                  className={`flex items-center justify-between border-b p-4 last:border-0 ${
                    darkMode
                      ? "border-white/10"
                      : "border-black/10"
                  } ${
                    active
                      ? "bg-red-500/10"
                      : "hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <span
                      className={`text-xs font-bold ${
                        active
                          ? "text-red-500"
                          : "opacity-40"
                      }`}
                    >
                      {String(chapter.id).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="text-sm font-medium">
                      {chapter.title}
                    </span>

                  </div>

                  {active && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">
                      Reading
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}

      </article>
    </main>
  );
}
