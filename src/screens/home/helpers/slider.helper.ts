import type { SetStateAction } from "react";
import type { ReviewType } from "../types/reviews.types";

export const handleChangePosition = (
  reviewsArr: ReviewType[],
  setXCoord: (value: SetStateAction<number>) => void,
  setReviewsState: (value: SetStateAction<ReviewType[]>) => void,
) => {
  const newReviewsArr = reviewsArr;

  newReviewsArr.unshift(newReviewsArr.pop() as ReviewType);

  setXCoord(0);
  setReviewsState(newReviewsArr);
};
