import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import ReviewTile from "../../components/Tile/ReviewTile";
import { loadSimilarReviews } from "../../fetchData/fetchReviews";
import withLoading from "../../fetchData/withLoading";
import { convertDate } from "../../utils/convertDate";

function SimilarArticles({ data: reviews }) {
  return (
    <Carousel>
      {Array(10)
        .fill(reviews)
        .flat()
        .map((a, idx) => (
          <ReviewTile
            key={idx}
            articleId={a.id}
            title={a.title}
            src="https://allegro.stati.pl/AllegroIMG/PRODUCENCI/Bethesda/Fallout%204/GOTY/f2.jpg"
            author={a.authorName}
            date={convertDate(a.publishDate)}
          />
        ))}
    </Carousel>
  );
}
export default withLoading(SimilarArticles, async (fetchId: number) => loadSimilarReviews(fetchId));