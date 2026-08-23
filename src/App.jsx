import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Stories from "./pages/Stories";
import Search from "./pages/Search";

import MovieDetails from "./pages/MovieDetails";
import SeriesDetails from "./pages/SeriesDetails";
import StoryDetails from "./pages/StoryDetails";
import ChapterReader from "./pages/ChapterReader";

function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 text-white">
      <div className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center text-center">
        <div>
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl">
            404
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Page not found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-500">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-zinc-200"
          >
            Back to StoryFlix
          </a>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased">
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Movies */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />

        {/* Series */}
        <Route path="/series" element={<Series />} />
        <Route path="/series/:id" element={<SeriesDetails />} />

        {/* Stories */}
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:id" element={<StoryDetails />} />

        {/* Story reader */}
        <Route
          path="/stories/:id/chapter/:chapterId"
          element={<ChapterReader />}
        />

        {/* Search */}
        <Route path="/search" element={<Search />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
