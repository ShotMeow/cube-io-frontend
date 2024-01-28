import type { FC } from "react";
import Image from "next/image";

import UserIcon from "@/shared/assets/icons/UserIcon";

import styles from "./ReviewCard.module.scss";
import type { ReviewType } from "../../../types/reviews.types";

interface Props extends ReviewType {}

const ReviewCard: FC<Props> = ({ avatarSrc, text, nickname, name }) => {
  return (
    <article className={styles.review}>
      <div className={styles.inner}>
        <header>
          <div className={styles.avatar}>
            {avatarSrc ? <Image src={avatarSrc} alt={name} /> : <UserIcon />}
          </div>
          <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <p className={styles.nickname}>{nickname}</p>
          </div>
        </header>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default ReviewCard;
