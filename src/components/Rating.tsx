import { memo } from "react";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => (
  <form className="rating rating-xs">
    {[...Array(5)].map((_, index) => (
      <input
        key={index}
        type="radio"
        name="rating"
        className="mask mask-star-2 bg-orange-400"
        checked={rating === index + 1}
        readOnly
      />
    ))}
  </form>
);

export default memo(Rating);
