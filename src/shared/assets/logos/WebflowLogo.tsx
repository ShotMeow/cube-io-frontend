import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const WebflowLogo: FC<Props> = ({ width = 122, height = 31, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 122 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M47.9803 9.37039C48.8403 8.79039 49.5403 8.20039 50.5703 7.89039C54.5403 6.68039 57.0303 9.07039 57.2503 12.8404C57.4703 16.5471 56.6636 19.6204 54.8303 22.0604C52.137 25.6537 49.0136 26.3537 45.4603 24.1604C45.2952 24.0577 45.1083 23.9943 44.9141 23.9752C44.72 23.9562 44.5236 23.9819 44.3403 24.0504L41.3403 25.2104C41.2132 25.2597 41.0755 25.2752 40.9406 25.2555C40.8058 25.2358 40.6783 25.1816 40.5706 25.098C40.4629 25.0145 40.3786 24.9045 40.326 24.7787C40.2734 24.653 40.2542 24.5157 40.2703 24.3804C41.0703 17.9071 41.827 11.8371 42.5403 6.17039C42.9136 3.16372 44.387 1.13372 46.9603 0.0803888C47.1302 0.00942343 47.3158 -0.0151877 47.4983 0.00906917C47.6808 0.033326 47.8535 0.105582 47.9989 0.218456C48.1444 0.33133 48.2572 0.480778 48.326 0.651536C48.3947 0.822293 48.4169 1.00824 48.3903 1.19039L47.3003 8.94039C47.2136 9.58706 47.4403 9.73039 47.9803 9.37039ZM47.2723 21.8031C47.5997 21.9287 47.9737 21.9232 48.373 21.7869C48.7723 21.6506 49.1891 21.3861 49.5996 21.0085C50.0101 20.631 50.4063 20.1478 50.7655 19.5865C51.1246 19.0252 51.4398 18.3968 51.693 17.7372C51.9462 17.0776 52.1324 16.3997 52.2411 15.7422C52.3497 15.0848 52.3787 14.4606 52.3262 13.9053C52.2738 13.3501 52.141 12.8747 51.9355 12.5062C51.7299 12.1377 51.4557 11.8833 51.1283 11.7577C50.801 11.632 50.427 11.6375 50.0276 11.7739C49.6283 11.9102 49.2115 12.1747 48.801 12.5522C48.3905 12.9298 47.9944 13.413 47.6352 13.9743C47.276 14.5356 46.9608 15.164 46.7076 15.8236C46.4544 16.4832 46.2682 17.1611 46.1595 17.8185C46.0509 18.476 46.022 19.1002 46.0744 19.6554C46.1268 20.2107 46.2596 20.6861 46.4652 21.0546C46.6707 21.4231 46.945 21.6774 47.2723 21.8031Z"
        fill="currentColor"
      />
      <path
        d="M60.4704 11.7604L59.6104 11.4304C59.4052 11.353 59.2237 11.2233 59.0839 11.0542C58.9442 10.885 58.851 10.6824 58.8136 10.4662C58.7763 10.25 58.796 10.0278 58.8708 9.8216C58.9457 9.61538 59.0731 9.43228 59.2404 9.29042L61.1004 7.71042C61.4004 7.45042 61.5938 7.12708 61.6804 6.74042C62.6604 2.19375 65.6971 0.0270826 70.7904 0.240416C70.9453 0.245416 71.0925 0.309182 71.2021 0.418764C71.3117 0.528345 71.3754 0.675526 71.3804 0.830416C71.5004 3.96042 68.7704 3.87042 67.0504 5.48042C66.4104 6.08042 66.2771 6.75042 66.6504 7.49042C66.7971 7.77708 67.0338 7.91708 67.3604 7.91042L69.1904 7.88042C69.5504 7.87375 69.7571 8.04375 69.8104 8.39042C70.1504 10.4604 68.1404 11.1004 66.6704 11.7604C66.4873 11.8433 66.3285 11.9724 66.2094 12.1353C66.0903 12.2982 66.0149 12.4894 65.9904 12.6904L64.4604 24.9404C64.2404 26.7004 63.4738 28.1737 62.1604 29.3604C61.6404 29.8271 61.0271 30.2271 60.3204 30.5604C59.1538 31.1071 58.6538 30.7437 58.8204 29.4704L60.9904 12.6304C61.0438 12.2037 60.8704 11.9137 60.4704 11.7604Z"
        fill="currentColor"
      />
      <path
        d="M76.4004 2.0804C77.3338 3.5804 77.6904 5.20373 77.4704 6.9504L75.6404 21.2504C75.4271 22.9437 74.6938 24.3771 73.4404 25.5504C72.8738 26.0771 72.2138 26.4971 71.4604 26.8104C70.2671 27.3037 69.7704 26.9137 69.9704 25.6404C70.8438 20.1471 71.8371 12.1037 72.9504 1.5104C73.0971 0.14373 73.7504 -0.172937 74.9104 0.560397C75.5038 0.927063 76.0004 1.43373 76.4004 2.0804Z"
        fill="currentColor"
      />
      <path
        d="M29.7504 18.0503C28.7437 18.2636 28.5137 18.8036 29.0604 19.6703L29.4804 20.3403C29.7669 20.7883 30.181 21.1402 30.6694 21.3506C31.1578 21.5609 31.6981 21.62 32.2204 21.5203C33.8204 21.2103 36.6204 20.2103 38.0504 21.1703C38.7304 21.6236 38.7537 22.1103 38.1204 22.6303C34.4404 25.637 30.8337 26.247 27.3004 24.4603C25.3071 23.4536 24.2204 21.7403 24.0404 19.3203C23.6671 14.367 25.3471 10.8036 29.0804 8.63029C32.6304 6.57029 40.5004 7.54029 39.0604 13.4203C38.1704 17.0803 32.6604 17.4503 29.7504 18.0503ZM34.3891 11.5627C34.1998 11.2526 33.7719 11.1055 33.1994 11.154C32.6269 11.2024 31.9569 11.4423 31.3366 11.8209C31.0295 12.0084 30.7438 12.2243 30.4959 12.4562C30.248 12.6882 30.0428 12.9317 29.8919 13.1729C29.741 13.414 29.6474 13.6481 29.6165 13.8617C29.5856 14.0753 29.618 14.2643 29.7117 14.4179C29.901 14.728 30.329 14.875 30.9014 14.8266C31.4739 14.7782 32.1439 14.5383 32.7642 14.1597C33.0713 13.9722 33.357 13.7563 33.6049 13.5243C33.8528 13.2924 34.058 13.0488 34.2089 12.8077C34.3598 12.5665 34.4534 12.3325 34.4843 12.1188C34.5152 11.9052 34.4829 11.7162 34.3891 11.5627Z"
        fill="currentColor"
      />
      <path
        d="M82.3251 24.759C81.4295 24.2565 80.6616 23.547 80.0651 22.6712C79.4687 21.7954 79.0554 20.7703 78.8488 19.6546C78.6423 18.5388 78.6465 17.3542 78.8614 16.1684C79.0762 14.9825 79.4973 13.8187 80.1008 12.7433C80.7043 11.668 81.4782 10.7021 82.3784 9.90097C83.2787 9.0998 84.2876 8.47898 85.3476 8.07396C86.4076 7.66893 87.4978 7.48765 88.5562 7.54044C89.6145 7.59323 90.6201 7.87908 91.5157 8.38165C92.4112 8.88421 93.1792 9.59366 93.7756 10.4695C94.3721 11.3453 94.7854 12.3704 94.9919 13.4861C95.1985 14.6019 95.1942 15.7865 94.9794 16.9723C94.7646 18.1582 94.3434 19.322 93.74 20.3973C93.1365 21.4727 92.3626 22.4385 91.4623 23.2397C90.5621 24.0409 89.5532 24.6617 88.4932 25.0667C87.4332 25.4718 86.3429 25.653 85.2846 25.6003C84.2263 25.5475 83.2206 25.2616 82.3251 24.759ZM85.7276 21.739C86.0891 21.8252 86.4782 21.7799 86.8727 21.6058C87.2671 21.4316 87.6592 21.132 88.0265 20.7241C88.3939 20.3162 88.7293 19.8079 89.0135 19.2283C89.2978 18.6487 89.5254 18.0092 89.6834 17.3461C90.0024 16.0072 90.0183 14.6539 89.7275 13.5841C89.4368 12.5143 88.8633 11.8156 88.1332 11.6416C87.7717 11.5555 87.3826 11.6008 86.9881 11.7749C86.5936 11.9491 86.2016 12.2487 85.8342 12.6566C85.4669 13.0645 85.1315 13.5728 84.8472 14.1524C84.5629 14.732 84.3353 15.3715 84.1774 16.0345C83.8584 17.3735 83.8425 18.7268 84.1332 19.7966C84.424 20.8664 84.9975 21.5651 85.7276 21.739Z"
        fill="currentColor"
      />
      <path
        d="M16.6804 18.7004C17.9104 14.5304 18.7804 9.22039 23.6204 7.91039C23.8604 7.84372 24.0804 7.88372 24.2804 8.03039C24.4233 8.13421 24.5276 8.28225 24.5765 8.45083C24.6255 8.61942 24.6163 8.79883 24.5504 8.96039C22.9638 12.8937 21.3604 16.7871 19.7404 20.6404C18.6404 23.2737 16.7104 24.8337 13.9504 25.3204C13.8422 25.3388 13.7314 25.3347 13.6249 25.3084C13.5183 25.2821 13.4183 25.2341 13.3311 25.1675C13.2439 25.101 13.1713 25.0171 13.1178 24.9213C13.0644 24.8254 13.0312 24.7196 13.0204 24.6104C12.7604 21.8037 12.3704 19.0304 11.8504 16.2904C11.6038 14.9837 11.2438 14.9537 10.7704 16.2004C9.31042 20.0804 8.67042 23.7404 4.14042 25.2304C3.16708 25.5504 2.60042 25.2037 2.44042 24.1904L0.0504167 9.20039C-0.169583 7.81372 0.330417 7.46705 1.55042 8.16039C2.18375 8.52039 2.80708 8.93372 3.42042 9.40039C4.56042 10.2604 5.17042 11.4004 5.25042 12.8204L5.52042 17.9704C5.58708 19.1971 5.86708 19.2471 6.36042 18.1204C8.07042 14.1804 8.74042 9.21039 13.5604 7.94039C13.72 7.8988 13.8868 7.89297 14.0489 7.92331C14.211 7.95364 14.3644 8.0194 14.4981 8.11589C14.6319 8.21237 14.7427 8.3372 14.8226 8.48146C14.9025 8.62571 14.9496 8.78584 14.9604 8.95039C15.1604 12.0504 15.5537 15.2904 16.1404 18.6704C16.2737 19.4704 16.4537 19.4804 16.6804 18.7004Z"
        fill="currentColor"
      />
      <path
        d="M102.33 18.2003C102.41 19.1203 102.62 19.1503 102.96 18.2903C104.37 14.6403 105.49 9.93035 109.4 8.08035C110.654 7.48701 111.36 7.88035 111.52 9.26035L112.39 16.9403C112.624 19.0137 113.074 19.0637 113.74 17.0903C115.05 13.2303 115.98 8.62034 120.7 7.89034C120.806 7.8732 120.915 7.88514 121.014 7.9249C121.113 7.96465 121.2 8.03072 121.265 8.11602C121.33 8.20132 121.37 8.30263 121.381 8.40909C121.393 8.51555 121.375 8.62315 121.33 8.72034C119.61 12.4803 118.077 16.2037 116.73 19.8903C115.76 22.5403 113.97 24.3903 111.25 25.2803C110.284 25.6003 109.734 25.2537 109.6 24.2403L108.64 16.8903C108.414 15.1303 107.987 15.0803 107.36 16.7403C105.99 20.3703 104.85 23.9103 100.8 25.2803C100.621 25.3405 100.43 25.3606 100.241 25.3393C100.053 25.3179 99.871 25.2557 99.7084 25.1568C99.5458 25.0579 99.4064 24.9248 99.2997 24.7665C99.193 24.6083 99.1216 24.4288 99.0904 24.2403L96.6004 9.12035C96.4004 7.90035 96.8671 7.54035 98.0004 8.04035C98.8138 8.40035 99.5738 8.89035 100.28 9.51035C101.467 10.5637 102.07 11.8837 102.09 13.4703C102.11 15.0303 102.19 16.607 102.33 18.2003Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WebflowLogo;
