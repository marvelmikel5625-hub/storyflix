import { useParams } from "react-router-dom";

import MediaDetails from "../components/MediaDetails";
import { movies } from "../data/content";

export default function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  const relatedMovies = movies.filter(
    (item) => item.id !== Number(id)
  );

  return (
    <MediaDetails
      item={movie}
      type="movie"
      relatedItems={relatedMovies}
    />
  );
}
