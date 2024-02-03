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

  // Animation Algorithm
  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    // Animation Frame
    const step = () => {
      requestId = undefined;
      setXCoord((prev) => prev + 0.5);
      handleRequestAnimationFrame();
    };

    let requestId: number | undefined = window.requestAnimationFrame(step);

    // Request Animation Frame Handler
    const handleRequestAnimationFrame = () => {
      if (!requestId) requestId = window.requestAnimationFrame(step);
    };

    // Cancel Animation Frame Handler
    const handleCancelAnimationFrame = () => {
      if (requestId) window.cancelAnimationFrame(requestId);
      requestId = undefined;
    };

    // Event Listeners
    slider.addEventListener("mouseenter", handleCancelAnimationFrame);
    slider.addEventListener("mouseleave", handleRequestAnimationFrame);

    return () => {
      handleCancelAnimationFrame();

      slider.removeEventListener("mouseenter", handleCancelAnimationFrame);
      slider.removeEventListener("mouseleave", handleRequestAnimationFrame);
    };
  }, [direction]);

  // Rebuilding items array
  useEffect(() => {
    if (!sliderRef.current) return;

    const lastSliderChild = sliderRef.current.lastElementChild as HTMLElement;

    const newReviewsArr = [...reviewsState];
    if (
      +xCoord >=
      lastSliderChild.getBoundingClientRect().width +
        parseFloat(getComputedStyle(sliderRef.current as Element).gap)
    ) {
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
        transform: `translateX(${direction === "left" ? "-" : ""}${xCoord}px)`,
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
