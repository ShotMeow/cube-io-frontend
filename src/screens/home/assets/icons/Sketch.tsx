import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const SketchIcon: FC<Props> = ({ width = 24, height = 24, ...props }) => {
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
        d="M6.42 9.87L12 20.78L17.58 9.87H6.42ZM5.9 4.01L2 9.24H5.62L5.9 4.01ZM12 3.42L6.63 9.24H17.37L12 3.42ZM2.04 9.87L11.13 20.45L5.72 9.87H2.04ZM11.53 3H11.38L6.54 3.51C6.54472 3.52633 6.54472 3.54367 6.54 3.56L6.27 8.71L11.53 3ZM12.87 20.45L21.96 9.87H18.28L12.87 20.45ZM17.45 3.58C17.4453 3.56367 17.4453 3.54633 17.45 3.53L13.45 3.11L12.45 3L17.71 8.71L17.45 3.58ZM18.1 4.01L18.38 9.24H22L19.78 6.26L18.1 4.01Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SketchIcon;
