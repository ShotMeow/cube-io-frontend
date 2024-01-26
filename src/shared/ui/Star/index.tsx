import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Star: FC<Props> = ({ width = 14, height = 14, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      {...props}
    >
      <path
        d="M6.5 0L8.25559 4.74441L13 6.5L8.25559 8.25559L6.5 13L4.74441 8.25559L0 6.5L4.74441 4.74441L6.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Star;
