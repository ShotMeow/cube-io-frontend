import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant: "fill" | "stroke";
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
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
  },
);

Button.displayName = "Button";

export default Button;
