import Hero from "../components/Hero";
import Section from "../components/Section";
import { movies, series, stories } from "../data/content";

export default function Home() {
  return (
    <main>

      <Hero movie={movies[0]} />

      <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-8">

        <Section
          eyebrow="Movies"
          title="Trending Movies"
          items={movies}
          type="movie"
          link="/movies"
        />

        <Section
          eyebrow="Series"
          title="Popular Series"
          items={series}
          type="series"
          link="/series"
        />

        <Section
          eyebrow="Stories"
          title="Trending Stories"
          items={stories}
          type="story"
          link="/stories"
        />

      </div>

    </main>
  );
}
