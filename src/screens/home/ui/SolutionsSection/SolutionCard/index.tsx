"use client";

import { type FC, type MouseEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import classNames from "classnames";

import styles from "./SolutionCard.module.scss";

import { SolutionType } from "../../../types/solutions.types";

import Grid from "@/shared/ui/Grid";
import Glow from "@/shared/ui/Glow";
import { useIntersection } from "@/shared/hooks/useIntersection";

interface Props extends SolutionType {}

const SolutionCard: FC<Props> = ({ imageSrc, description, heading }) => {
  const ref = useRef<HTMLElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false);

  const isIntersecting = useIntersection(ref);

  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);

    const x = (event.clientX - left - width / 2) / 25;
    const y = (event.clientY - top - height / 2) / 25;
    ref.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!ref.current) return;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setIsMouseEntered(false);
    ref.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(30px) translateY(30px) translateZ(30px) rotateX(30px) rotateY(30px) rotateZ(30)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <div
      style={{
        perspective: "1000px",
      }}
    >
      <article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={classNames(
          {
            [styles.intersection]: isIntersecting,
          },
          styles.card,
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className={styles.cursor}>
          <div />
          <motion.div style={style} />
          <motion.div style={style} />
        </div>
        <Grid className={styles.grid} size="small" />
        <Image src={imageSrc} alt={heading} />
        <h4 className="[transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]">
          {heading}
        </h4>
        <p className="[transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]">
          {description}
        </p>
        <Glow className={styles.glow} />
      </article>
    </div>
  );
};

export default SolutionCard;
