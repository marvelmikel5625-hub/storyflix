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
    <main className="flex min-h-[75vh] items-center justify-center bg-[#070707] px-5 text-white">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
          404
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Header />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* MOVIES */}
        <Route
          path="/movies"
          element={<Movies />}
        />

        <Route
          path="/movies/:id"
          element={<MovieDetails />}
        />

        {/* SERIES */}
        <Route
          path="/series"
          element={<Series />}
        />

        <Route
          path="/series/:id"
          element={<SeriesDetails />}
        />

        {/* STORIES */}
        <Route
          path="/stories"
          element={<Stories />}
        />

        <Route
          path="/stories/:id"
          element={<StoryDetails />}
        />

        {/* CHAPTER READER */}
        <Route
          path="/stories/:id/chapter/:chapterId"
          element={<ChapterReader />}
        />

        {/* SEARCH */}
        <Route
          path="/search"
          element={<Search />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </div>
  );
}
