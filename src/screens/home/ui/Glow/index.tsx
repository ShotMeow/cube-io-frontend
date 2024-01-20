import type { FC, HTMLAttributes } from "react";
import styles from "./Glow.module.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Glow: FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={classNames(
        {
          [styles.glow]: true,
        },
        className,
      )}
      {...props}
    />
  );
};

export default Glow;
