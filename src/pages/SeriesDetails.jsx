import { useParams } from "react-router-dom";

import MediaDetails from "../components/MediaDetails";
import { series } from "../data/content";

export default function SeriesDetails() {
  const { id } = useParams();

  const show = series.find(
    (item) => item.id === Number(id)
  );

  const relatedSeries = series.filter(
    (item) => item.id !== Number(id)
  );

  return (
    <MediaDetails
      item={show}
      type="series"
      relatedItems={relatedSeries}
    />
  );
}
