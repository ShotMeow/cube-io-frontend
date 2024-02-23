"use client";

import { type FC, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import styles from "./HeadingChapter.module.scss";
import Arrow from "@/shared/ui/Arrow";
import Button from "@/shared/ui/Button";

const MotionButton = motion(Button);

const HeadingChapter: FC = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = (words: string) => {
    let wordsArray = words.split(" ");

    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={styles.info}>
      <h1>{renderWords("Learning 3D is Never Been Easier")}</h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        Explore the world of 3D designed for beginners. Making the creative
        process enjoyable and accessible to everyone.
      </motion.p>
      <div className={styles.actions}>
        <MotionButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          variant="fill"
        >
          Try Cube.io for Free
        </MotionButton>
        <MotionButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 2 }}
          variant="stroke"
        >
          See Examples <Arrow />
        </MotionButton>
      </div>
    </div>
  );
};

export default HeadingChapter;
