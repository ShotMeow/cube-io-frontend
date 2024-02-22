import type { FC, HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Grid.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  size: "small" | "big";
}

const Grid: FC<Props> = ({ size, className, ...props }) => {
  return (
    <div
      className={classNames(
        {
          [styles.grid]: true,
          [styles.small]: size === "small",
          [styles.big]: size === "big",
        },
        className,
      )}
      {...props}
    />
  );
};

export default Grid;
