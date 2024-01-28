import type { FC } from "react";

import styles from "./CommunitySection.module.scss";

import Grid from "@/shared/ui/Grid";

import ReviewsSlider from "./ReviewsSlider";
import { reviewsData } from "../../data/reviews.data";

const CommunitySection: FC = () => {
  return (
    <section className={styles.section}>
      <hgroup>
        <h2>Our loving community</h2>
        <h3>Loved by 3D Artist Around The World</h3>
      </hgroup>
      <p>Here&apos;s what people are saying about us</p>
      <Grid size="big" />
      <div className={styles.reviews}>
        <ReviewsSlider reviews={reviewsData.slice(0, 5)} />
      </div>
      <div className={styles.reviews}>
        <ReviewsSlider reviews={reviewsData.slice(0, 5)} direction="left" />
      </div>
    </section>
  );
};

export default CommunitySection;
