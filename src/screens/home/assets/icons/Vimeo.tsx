import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const VimeoIcon: FC<Props> = ({ width = 24, height = 24, ...props }) => {
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
        d="M21.062 10.4139C19.026 14.7629 14.113 20.6809 11.008 20.6809C7.948 20.6809 7.507 14.1539 5.835 9.81189C5.012 7.67389 4.481 8.16589 2.939 9.24489L2 8.03089C4.248 6.05489 6.499 3.75889 7.88 3.63189C9.439 3.48389 10.397 4.54789 10.753 6.82489C11.228 9.81889 11.89 14.4659 13.044 14.4659C13.944 14.4659 16.161 10.7799 16.276 9.46189C16.479 7.53189 14.855 7.47289 13.448 8.07489C15.676 0.779891 24.942 2.12489 21.062 10.4139Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VimeoIcon;
