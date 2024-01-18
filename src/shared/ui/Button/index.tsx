import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant: "fill" | "stroke";
}

const Button: FC<Props> = ({ variant, children, ...props }) => {
  return (
    <button
      className={classNames(
        {
          [styles.fill]: variant === "fill",
          [styles.stroke]: variant === "stroke",
        },
        styles.button,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
