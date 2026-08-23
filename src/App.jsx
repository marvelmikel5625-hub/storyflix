import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Stories from "./pages/Stories";
import Search from "./pages/Search";

import MovieDetails from "./pages/MovieDetails";
import SeriesDetails from "./pages/SeriesDetails";

function App() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Movies */}
        <Route path="/movies" element={<Movies />} />

        <Route
          path="/movies/:id"
          element={<MovieDetails />}
        />

        {/* Series */}
        <Route path="/series" element={<Series />} />

        <Route
          path="/series/:id"
          element={<SeriesDetails />}
        />

        {/* Stories */}
        <Route path="/stories" element={<Stories />} />

        {/* Search */}
        <Route
          path="/search"
          element={<Search />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <main className="flex min-h-[70vh] items-center justify-center px-5">
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
          }
        />
      </Routes>
    </div>
  );
}

export default App;
