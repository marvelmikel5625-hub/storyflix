import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Stories from "./pages/Stories";

function App() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/stories" element={<Stories />} />

        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-2xl font-bold">
                Page not found
              </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
