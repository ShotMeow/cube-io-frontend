import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const AmazonLogo: FC<Props> = ({ width = 90, height = 27, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.46177 6.07312C8.36843 5.94645 8.68177 5.44979 8.40177 4.58312L8.22177 4.01312C8.10144 3.6278 7.8501 3.29639 7.51078 3.07565C7.17145 2.8549 6.76526 2.75856 6.36177 2.80312C4.12177 3.05312 3.65177 5.08312 1.40177 5.10312C0.961766 5.10312 0.681766 4.62979 0.561766 3.68312C0.534099 3.46668 0.557789 3.24753 0.630856 3.04399C0.703923 2.84044 0.824244 2.65842 0.981766 2.51312C3.7751 -0.0935462 6.93843 -0.513547 10.4718 1.25312C10.8568 1.44613 11.1805 1.74201 11.4065 2.10761C11.6326 2.47321 11.7521 2.8941 11.7518 3.32312C11.7518 6.30312 11.1818 10.4731 12.6518 13.2131C12.8184 13.5198 12.8084 13.8198 12.6218 14.1131C12.2751 14.6531 11.8051 15.0531 11.2118 15.3131C11.0404 15.3915 10.8501 15.4208 10.6615 15.3979C10.4728 15.375 10.2931 15.3007 10.1418 15.1831L8.95177 14.2731C8.78405 14.1452 8.57637 14.0811 8.36576 14.0921C8.15514 14.1031 7.95526 14.1885 7.80177 14.3331C4.86177 17.1531 -0.588234 15.5631 0.0517661 10.9631C0.581766 7.10312 4.27177 6.49312 7.46177 6.07312ZM8.45177 9.75312C8.54633 9.52577 8.57164 9.27555 8.52452 9.03387C8.4774 8.79219 8.35995 8.5698 8.18691 8.39462C8.01387 8.21945 7.79294 8.09928 7.55186 8.0492C7.31077 7.99911 7.06026 8.02135 6.83177 8.11312L4.58177 9.01312C4.37489 9.09732 4.19435 9.23542 4.05894 9.41304C3.92352 9.59067 3.83817 9.80133 3.81177 10.0231L3.60177 11.7531C3.58033 11.9303 3.59707 12.1099 3.65086 12.2801C3.70465 12.4502 3.79423 12.6068 3.9136 12.7395C4.03296 12.8721 4.17934 12.9776 4.34288 13.049C4.50643 13.1203 4.68335 13.1558 4.86177 13.1531L6.23177 13.1231C6.47455 13.1184 6.71071 13.0431 6.91139 12.9063C7.11206 12.7696 7.26856 12.5774 7.36177 12.3531L8.45177 9.75312Z"
        fill="currentColor"
      />
      <path
        d="M43.5618 6.05305C43.8401 5.99346 44.0943 5.85218 44.2918 5.6473C44.4894 5.44241 44.6213 5.18324 44.6707 4.90295C44.7201 4.62266 44.6847 4.33401 44.5691 4.07393C44.4535 3.81386 44.2629 3.59419 44.0218 3.44305C42.6151 2.55638 41.4118 2.77972 40.4118 4.11305C40.138 4.47718 39.7699 4.75866 39.3481 4.92633C38.9263 5.09399 38.4672 5.14131 38.0218 5.06305L37.6018 4.99305C37.4553 4.96675 37.3166 4.9081 37.1956 4.82136C37.0747 4.73463 36.9747 4.622 36.9028 4.4917C36.831 4.36139 36.7891 4.21669 36.7803 4.06814C36.7714 3.9196 36.7959 3.77095 36.8518 3.63305C38.8818 -1.22695 48.9518 -1.85695 48.3818 5.75305C48.1751 8.51305 48.3918 10.993 49.0318 13.193C49.1318 13.5464 49.0751 13.8697 48.8618 14.163C48.4218 14.783 47.8651 15.243 47.1918 15.543C46.8384 15.703 46.5518 15.6197 46.3318 15.293C46.0984 14.9464 45.8084 14.6664 45.4618 14.453C45.2588 14.3294 45.0233 14.27 44.786 14.2825C44.5487 14.295 44.3206 14.3788 44.1318 14.523C40.8518 17.043 36.0818 16.133 36.5118 10.963C36.8618 6.74305 40.3318 6.74305 43.5618 6.05305ZM44.7918 9.60305C44.8661 9.38402 44.875 9.14808 44.8174 8.92408C44.7598 8.70007 44.6381 8.49772 44.4673 8.34176C44.2965 8.1858 44.0839 8.083 43.8556 8.04594C43.6273 8.00887 43.3932 8.03914 43.1818 8.13305L41.1318 9.05305C40.9159 9.15038 40.734 9.3099 40.6093 9.5112C40.4846 9.7125 40.4228 9.94643 40.4318 10.183L40.4918 12.093C40.4977 12.2966 40.5556 12.4952 40.6602 12.6699C40.7648 12.8446 40.9124 12.9895 41.089 13.0908C41.2656 13.1922 41.4652 13.2465 41.6688 13.2486C41.8724 13.2508 42.0731 13.2007 42.2518 13.103L43.5018 12.423C43.7647 12.2811 43.9646 12.0455 44.0618 11.763L44.7918 9.60305Z"
        fill="currentColor"
      />
      <path
        d="M56.3418 3.3332L53.2518 3.3532C52.4451 3.3532 51.9151 2.96987 51.6618 2.2032C51.6018 2.00987 51.5885 1.80987 51.6218 1.6032C51.7018 1.0632 52.0118 0.753201 52.5518 0.673201C55.1385 0.293201 57.8885 0.199868 60.8018 0.393201C61.0457 0.408669 61.2816 0.485936 61.4873 0.61773C61.6931 0.749524 61.8619 0.931509 61.978 1.14656C62.094 1.3616 62.1534 1.60263 62.1506 1.84697C62.1477 2.0913 62.0828 2.3309 61.9618 2.5432C60.5351 5.05653 58.9251 7.41987 57.1318 9.6332C57.0527 9.73067 57.0009 9.84737 56.9816 9.97139C56.9624 10.0954 56.9763 10.2223 57.022 10.3392C57.0678 10.4561 57.1437 10.5588 57.242 10.6367C57.3403 10.7147 57.4576 10.7653 57.5818 10.7832L60.0218 11.1432C60.9218 11.2699 61.5585 11.7465 61.9318 12.5732C62.1251 12.9999 62.2318 13.4365 62.2518 13.8832C62.2851 14.7032 61.9118 14.9865 61.1318 14.7332C58.1051 13.7399 55.0285 13.8132 51.9018 14.9532C51.4485 15.1199 51.2051 14.9599 51.1718 14.4732C50.9918 11.3532 54.8018 6.6732 56.7518 4.1532C56.8099 4.07731 56.8455 3.98663 56.8546 3.89149C56.8636 3.79635 56.8458 3.70058 56.803 3.6151C56.7603 3.52962 56.6944 3.45786 56.6128 3.40802C56.5313 3.35818 56.4374 3.33225 56.3418 3.3332Z"
        fill="currentColor"
      />
      <path
        d="M69.8102 16.0029C68.1447 15.9942 66.5518 15.1493 65.3818 13.6541C64.2119 12.1589 63.5609 10.1359 63.5719 8.03011C63.5774 6.98743 63.7452 5.95581 64.0659 4.99415C64.3865 4.03249 64.8537 3.15963 65.4407 2.4254C66.0277 1.69116 66.723 1.10994 67.487 0.714915C68.251 0.319889 69.0687 0.118795 69.8934 0.123115C71.559 0.131849 73.1519 0.976745 74.3218 2.47193C75.4917 3.96712 76.1427 5.99013 76.1317 8.09591C76.1263 9.1386 75.9584 10.1702 75.6378 11.1319C75.3171 12.0935 74.85 12.9664 74.263 13.7006C73.676 14.4349 72.9806 15.0161 72.2166 15.4111C71.4526 15.8061 70.6349 16.0072 69.8102 16.0029ZM69.9427 13.293C70.5819 13.2941 71.1958 12.7431 71.6495 11.7612C72.1032 10.7793 72.3594 9.44693 72.3618 8.05721C72.363 7.36908 72.3019 6.68758 72.1819 6.05161C72.0619 5.41565 71.8853 4.83768 71.6624 4.35071C71.4394 3.86374 71.1744 3.4773 70.8825 3.21347C70.5906 2.94963 70.2774 2.81355 69.9609 2.81302C69.3218 2.81192 68.7078 3.36294 68.2541 4.34484C67.8005 5.32674 67.5442 6.6591 67.5418 8.04881C67.5406 8.73695 67.6018 9.41845 67.7218 10.0544C67.8418 10.6904 68.0183 11.2683 68.2412 11.7553C68.4642 12.2423 68.7292 12.6287 69.0211 12.8926C69.3131 13.1564 69.6262 13.2925 69.9427 13.293Z"
        fill="currentColor"
      />
      <path
        d="M21.3418 3.49298L20.5118 3.52298C20.0688 3.53853 19.6491 3.72554 19.3413 4.04455C19.0335 4.36357 18.8616 4.78966 18.8618 5.23298L18.8118 14.953C18.8105 15.0528 18.7896 15.1514 18.7502 15.2431C18.7108 15.3348 18.6537 15.4178 18.5822 15.4875C18.5107 15.5571 18.4262 15.612 18.3334 15.649C18.2407 15.6859 18.1416 15.7043 18.0418 15.703L16.3718 15.673C15.6452 15.6663 15.3085 15.2996 15.3618 14.573C15.6818 10.2996 15.6518 6.08631 15.2718 1.93298C15.2512 1.68696 15.298 1.43997 15.4071 1.21849C15.5162 0.99702 15.6835 0.80942 15.8911 0.675813C16.0987 0.542205 16.3388 0.467629 16.5855 0.460083C16.8323 0.452537 17.0765 0.512305 17.2918 0.632977C18.7052 1.42631 20.0718 1.40298 21.3918 0.562978C21.9182 0.228362 22.5484 0.0966093 23.1647 0.192285C23.7811 0.28796 24.3416 0.604532 24.7418 1.08298C25.5085 1.99631 26.3318 2.11964 27.2118 1.45298C29.3918 -0.197023 33.8918 0.0329776 33.8518 3.63298C33.8118 7.57298 33.8485 11.2663 33.9618 14.713C33.9818 15.3196 33.6885 15.6363 33.0818 15.663L31.1518 15.743C31.0182 15.7498 30.8845 15.7292 30.7591 15.6824C30.6337 15.6356 30.5192 15.5636 30.4227 15.4708C30.3262 15.378 30.2497 15.2665 30.1979 15.143C30.1462 15.0196 30.1203 14.8868 30.1218 14.753L30.2218 4.96298C30.2352 3.54298 29.5718 3.06964 28.2318 3.54298L27.7218 3.71298C26.7485 4.05964 26.2685 4.74964 26.2818 5.78298L26.4118 14.743C26.4147 14.9872 26.3223 15.223 26.1543 15.4003C25.9863 15.5776 25.7559 15.6826 25.5118 15.693L23.8518 15.753C23.1318 15.773 22.7752 15.423 22.7818 14.703L22.8418 4.94298C22.8485 3.93631 22.3485 3.45298 21.3418 3.49298Z"
        fill="currentColor"
      />
      <path
        d="M82.5717 1.65299C83.3451 1.05965 84.2184 0.66632 85.1917 0.472986C88.7517 -0.237014 89.7217 2.62299 89.6217 5.48299C89.5084 8.68299 89.5484 11.6563 89.7417 14.403C89.8084 15.263 89.4084 15.6897 88.5417 15.683H87.1117C86.1851 15.683 85.7651 15.223 85.8517 14.303C86.1451 11.0697 86.1351 7.77632 85.8217 4.42299C85.7684 3.83632 85.4484 3.52299 84.8617 3.48299C83.0484 3.36299 82.0851 4.25299 81.9717 6.15299C81.7917 9.27299 81.8151 12.0797 82.0417 14.573C82.1084 15.3063 81.7751 15.6763 81.0417 15.683L79.6517 15.693C78.8584 15.6997 78.4584 15.303 78.4517 14.503L78.4017 1.36299C78.4017 1.01632 78.5617 0.782986 78.8817 0.662986C80.1284 0.189652 81.1084 0.479652 81.8217 1.53299C82.0284 1.83299 82.2784 1.87299 82.5717 1.65299Z"
        fill="currentColor"
      />
      <path
        d="M57.4118 18.1732C55.7051 17.9332 53.8818 18.0265 51.9418 18.4532C51.9078 18.4608 51.8726 18.4603 51.8388 18.4517C51.805 18.4431 51.7734 18.4266 51.7465 18.4035C51.7195 18.3804 51.6979 18.3513 51.6832 18.3183C51.6686 18.2853 51.6612 18.2494 51.6618 18.2132V17.8032C51.6622 17.7673 51.6728 17.7324 51.6922 17.7023C51.7117 17.6722 51.7393 17.6482 51.7718 17.6332C54.2918 16.5132 56.7984 16.2398 59.2918 16.8132C59.4667 16.8522 59.6228 16.951 59.7339 17.0931C59.845 17.2351 59.9043 17.4117 59.9018 17.5932C59.8951 20.3865 58.9884 22.7198 57.1818 24.5932C57.1322 24.6459 57.0648 24.6783 56.9926 24.6838C56.9204 24.6894 56.8488 24.6677 56.7918 24.6232L56.5718 24.4532C56.5251 24.4198 56.5151 24.3765 56.5418 24.3232C57.5151 22.6165 58.0651 20.8865 58.1918 19.1332C58.2318 18.5732 57.9718 18.2532 57.4118 18.1732Z"
        fill="currentColor"
      />
      <path
        d="M13.1817 17.3831C25.9417 24.8431 40.3517 26.0431 54.1517 20.4431C55.9651 19.7098 56.1817 20.0364 54.8017 21.4231C54.0417 22.1964 53.1484 22.7931 52.1217 23.2131C37.7884 29.1198 24.6584 27.4464 12.7317 18.1931C12.5984 18.0864 12.5651 17.9564 12.6317 17.8031L12.7617 17.5231C12.7774 17.484 12.8014 17.4487 12.832 17.4198C12.8627 17.3909 12.8993 17.369 12.9393 17.3557C12.9792 17.3424 13.0216 17.3379 13.0635 17.3427C13.1054 17.3474 13.1457 17.3612 13.1817 17.3831Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AmazonLogo;
