import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const UnsplashIcon: FC<Props> = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.625 8.063V3H15.375V8.063H8.625ZM15.375 10.875H21V21H3V10.875H8.625V15.938H15.375V10.875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UnsplashIcon;
