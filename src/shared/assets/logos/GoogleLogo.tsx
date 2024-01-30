import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const GoogleLogo: FC<Props> = ({ width = 120, height = 40, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.442 18.1451L16.872 18.3451C15.872 18.3718 15.3954 17.8884 15.442 16.8951L15.502 15.6451C15.562 14.4918 16.1687 13.9151 17.322 13.9151L28.942 13.9551C29.113 13.9548 29.2776 14.0199 29.4022 14.137C29.5267 14.2541 29.6018 14.4144 29.612 14.5851C30.082 21.7351 26.782 28.6551 19.282 29.9751C10.6687 31.4884 4.63203 28.3284 1.17203 20.4951C-0.627974 16.4284 -0.354641 12.3484 1.99203 8.25511C7.10203 -0.654887 16.862 -2.37489 25.312 3.20511C26.0987 3.72511 26.152 4.30511 25.472 4.94511L23.842 6.49511C23.282 7.02178 22.6987 7.04511 22.092 6.56511C17.622 3.00511 11.002 3.56511 7.37202 8.10511C1.28202 15.7351 6.79203 27.9951 17.242 26.2751C21.1354 25.6351 23.8787 23.4284 25.472 19.6551C25.9054 18.6218 25.562 18.1184 24.442 18.1451Z"
        fill="currentColor"
      />
      <path
        d="M98.752 0.915039H96.252C95.8433 0.915039 95.512 1.24635 95.512 1.65504V29.075C95.512 29.4837 95.8433 29.815 96.252 29.815H98.752C99.1607 29.815 99.492 29.4837 99.492 29.075V1.65504C99.492 1.24635 99.1607 0.915039 98.752 0.915039Z"
        fill="currentColor"
      />
      <path
        d="M39.123 30.4169C37.8681 30.1979 36.6698 29.7278 35.5963 29.0333C34.5229 28.3389 33.5953 27.4338 32.8667 26.3697C32.1381 25.3055 31.6226 24.1032 31.3498 22.8314C31.0769 21.5596 31.0519 20.2431 31.2764 18.9572C31.5008 17.6713 31.9702 16.4411 32.6577 15.3369C33.3453 14.2327 34.2376 13.2761 35.2836 12.5216C36.3296 11.7672 37.5089 11.2298 38.7541 10.9401C39.9993 10.6503 41.2861 10.6139 42.541 10.8329C43.7958 11.0519 44.9942 11.5221 46.0676 12.2165C47.1411 12.9109 48.0686 13.816 48.7972 14.8802C49.5259 15.9443 50.0413 17.1466 50.3142 18.4184C50.5871 19.6903 50.612 21.0067 50.3876 22.2926C50.1632 23.5785 49.6938 24.8087 49.0062 25.9129C48.3186 27.0171 47.4264 27.9738 46.3804 28.7282C45.3344 29.4826 44.1551 30.02 42.9098 30.3098C41.6646 30.5995 40.3778 30.6359 39.123 30.4169ZM40.7212 26.7296C42.1839 26.7909 43.6131 26.2192 44.6944 25.1402C45.7758 24.0612 46.4206 22.5633 46.4872 20.9761C46.5201 20.1902 46.4101 19.406 46.1633 18.6682C45.9166 17.9305 45.538 17.2537 45.0492 16.6765C44.5603 16.0993 43.9708 15.633 43.3143 15.3042C42.6577 14.9754 41.947 14.7905 41.2228 14.7602C39.7601 14.6989 38.3309 15.2706 37.2495 16.3496C36.1682 17.4286 35.5233 18.9265 35.4568 20.5137C35.4238 21.2996 35.5339 22.0839 35.7806 22.8216C36.0273 23.5593 36.4059 24.2361 36.8948 24.8133C37.3836 25.3905 37.9732 25.8568 38.6297 26.1856C39.2862 26.5144 39.9969 26.6993 40.7212 26.7296Z"
        fill="currentColor"
      />
      <path
        d="M71.962 20.625C71.962 23.2214 70.9305 25.7116 69.0945 27.5475C67.2586 29.3835 64.7684 30.415 62.172 30.415C59.5755 30.415 57.0854 29.3835 55.2494 27.5475C53.4134 25.7116 52.382 23.2214 52.382 20.625C52.382 18.0285 53.4134 15.5384 55.2494 13.7024C57.0854 11.8664 59.5755 10.835 62.172 10.835C64.7684 10.835 67.2586 11.8664 69.0945 13.7024C70.9305 15.5384 71.962 18.0285 71.962 20.625ZM61.695 26.7273C62.4204 26.7971 63.1537 26.7113 63.853 26.4747C64.5522 26.2381 65.2037 25.8553 65.7703 25.3483C66.3369 24.8412 66.8074 24.2198 67.155 23.5195C67.5027 22.8192 67.7206 22.0538 67.7964 21.2669C67.9494 19.6776 67.5141 18.0974 66.5863 16.8739C65.6585 15.6504 64.3141 14.8838 62.849 14.7427C62.1235 14.6728 61.3902 14.7586 60.6909 14.9952C59.9917 15.2319 59.3402 15.6146 58.7736 16.1217C58.207 16.6287 57.7365 17.2501 57.3889 17.9504C57.0412 18.6507 56.8233 19.4161 56.7476 20.2031C56.5945 21.7923 57.0298 23.3725 57.9576 24.596C58.8854 25.8195 60.2298 26.5862 61.695 26.7273Z"
        fill="currentColor"
      />
      <path
        d="M87.412 29.0552C81.792 32.4852 75.542 29.1352 74.322 22.9252C72.872 15.5652 78.952 8.23519 86.922 11.7252C87.3008 11.8892 87.7092 11.9738 88.122 11.9738C88.5348 11.9738 88.9432 11.8892 89.322 11.7252C90.102 11.3852 90.9087 11.1952 91.742 11.1552C92.2287 11.1285 92.472 11.3619 92.472 11.8552C92.4387 18.3952 92.3954 24.1652 92.342 29.1652C92.282 33.9552 89.952 38.4652 84.932 39.1152C80.6587 39.6685 77.4087 38.2252 75.182 34.7852C74.6487 33.9585 74.8187 33.3252 75.692 32.8852L76.642 32.3952C77.5754 31.9219 78.3287 32.1252 78.902 33.0052C80.562 35.5519 82.852 36.1552 85.772 34.8152C87.0587 34.2219 87.8654 33.2385 88.192 31.8652L88.652 29.9552C88.9587 28.6619 88.5454 28.3619 87.412 29.0552ZM83.1162 26.8589C84.5496 26.924 85.9533 26.3465 87.0185 25.2535C88.0837 24.1604 88.7233 22.6414 88.7964 21.0306C88.8696 19.4197 88.3703 17.849 87.4085 16.664C86.4467 15.4789 85.1012 14.7766 83.6678 14.7115C82.2345 14.6464 80.8308 15.2239 79.7656 16.3169C78.7003 17.4099 78.0608 18.9289 77.9876 20.5398C77.9145 22.1506 78.4137 23.7213 79.3755 24.9064C80.3373 26.0915 81.6829 26.7938 83.1162 26.8589Z"
        fill="currentColor"
      />
      <path
        d="M107.122 25.1652C107.709 25.7052 108.375 26.1419 109.122 26.4752C110.582 27.1285 111.995 27.0385 113.362 26.2052L115.522 24.8852C116.435 24.3252 117.285 24.4085 118.072 25.1352C118.192 25.2419 118.299 25.3552 118.392 25.4752C119.065 26.2819 118.995 27.0219 118.182 27.6952C114.929 30.3752 111.265 30.9919 107.192 29.5452C98.7519 26.5552 100.502 12.2152 109.342 10.9452C114.212 10.2452 117.252 12.9152 118.942 17.1152C119.005 17.2699 119.036 17.4356 119.033 17.6026C119.031 17.7695 118.995 17.9342 118.928 18.0871C118.861 18.24 118.764 18.3778 118.643 18.4926C118.521 18.6073 118.378 18.6966 118.222 18.7552L107.602 22.7352C106.122 23.2885 105.962 24.0985 107.122 25.1652ZM106.112 20.3952L114.602 16.7152C114.616 16.7098 114.629 16.7015 114.64 16.6908C114.651 16.6802 114.659 16.6674 114.665 16.6533C114.67 16.6392 114.673 16.6241 114.673 16.609C114.672 16.5938 114.668 16.5789 114.662 16.5652L114.652 16.5352C114.467 16.107 114.175 15.7297 113.794 15.425C113.413 15.1204 112.949 14.8942 112.43 14.7596C111.911 14.6249 111.346 14.5843 110.768 14.6402C110.19 14.6961 109.611 14.8473 109.062 15.0852L108.712 15.2352C107.605 15.7137 106.692 16.5153 106.173 17.4641C105.653 18.4128 105.57 19.431 105.942 20.2952L105.962 20.3352C105.967 20.3494 105.976 20.3623 105.986 20.3731C105.997 20.3839 106.01 20.3924 106.024 20.398C106.038 20.4036 106.053 20.4063 106.068 20.4058C106.083 20.4053 106.098 20.4017 106.112 20.3952Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GoogleLogo;