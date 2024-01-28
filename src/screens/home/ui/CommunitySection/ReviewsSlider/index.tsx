"use client";
import { type FC, useEffect, useRef, useState } from "react";

import styles from "./ReviewsSlider.module.scss";

import { ReviewType } from "../../../types/reviews.types";
import ReviewCard from "../ReviewCard";

interface Props {
  reviews: ReviewType[];
  direction?: "left" | "right";
}

const ReviewsSlider: FC<Props> = ({ reviews, direction = "right" }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [xCoord, setXCoord] = useState<number>(0);
  const [reviewsState, setReviewsState] = useState<ReviewType[]>(reviews);

  useEffect(() => {
    const step = () => {
      requestId = undefined;
      setXCoord((prev) => prev + 0.5);
      handleRequestAnimationFrame();
    };

    let requestId: number | undefined = window.requestAnimationFrame(step);

    const handleRequestAnimationFrame = () => {
      if (!requestId) requestId = window.requestAnimationFrame(step);
    };

    const handleCancelAnimationFrame = () => {
      if (requestId) window.cancelAnimationFrame(requestId);
      requestId = undefined;
    };

    return () => {
      handleCancelAnimationFrame();
    };
  }, [direction]);

  useEffect(() => {
    const lastSliderChild = sliderRef.current?.lastElementChild as HTMLElement;

    if (+xCoord >= lastSliderChild.getBoundingClientRect().width + 24) {
      const newReviewsArr = [...reviewsState];

      switch (direction) {
        case "left":
          newReviewsArr.push(newReviewsArr.shift() as ReviewType);
          break;
        case "right":
          newReviewsArr.unshift(newReviewsArr.pop() as ReviewType);
          break;
        default:
          break;
      }

      setXCoord(0);
      setReviewsState(newReviewsArr);
    }
  }, [direction, reviewsState, xCoord]);

  return (
    <div
      ref={sliderRef}
      style={{
        left: `${direction === "right" && xCoord}px`,
        right: `${direction === "left" && xCoord}px`,
      }}
      className={styles.slider}
    >
      {reviewsState.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </div>
  );
};

export default ReviewsSlider;
