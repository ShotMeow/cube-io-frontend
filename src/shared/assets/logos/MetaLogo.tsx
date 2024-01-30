import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const MetaLogo: FC<Props> = ({ width = 104, height = 21, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 104 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.2836 3.59168C15.363 3.69036 15.4623 3.77119 15.575 3.82886C15.6878 3.88654 15.8114 3.91976 15.9379 3.92637C16.0644 3.93298 16.1908 3.91282 16.309 3.8672C16.4271 3.82159 16.5343 3.75156 16.6236 3.66167C19.6436 0.611675 22.7036 -1.81833 26.8336 1.87168C30.7436 5.36168 32.1536 12.1117 30.7136 17.5017C30.3069 19.0083 29.4202 19.9883 28.0536 20.4417C25.0469 21.4417 22.6202 20.595 20.7736 17.9017C19.0936 15.455 17.5569 13.035 16.1636 10.6417C16.0986 10.5319 16.005 10.4416 15.893 10.3805C15.781 10.3194 15.6548 10.2898 15.5281 10.2949C15.4014 10.3001 15.279 10.3398 15.1742 10.4097C15.0695 10.4796 14.9862 10.5771 14.9336 10.6917C13.4736 13.8017 10.1836 20.3817 6.26357 20.7817C2.11357 21.1917 0.0735718 18.0117 0.00357179 14.2817C-0.0864282 9.39168 1.51357 3.20167 6.03357 0.831675C9.29357 -0.874992 12.3769 0.0450087 15.2836 3.59168ZM23.6336 16.3417C23.9526 16.8551 24.4376 17.244 25.008 17.4438C25.5785 17.6437 26.2001 17.6426 26.7698 17.4406C27.3395 17.2387 27.8231 16.848 28.1402 16.3335C28.4574 15.8189 28.5891 15.2114 28.5136 14.6117L27.7036 7.89168C27.6442 7.39704 27.4467 6.92915 27.1336 6.54168L24.6136 3.44167C24.1782 2.90629 23.5512 2.56182 22.8659 2.48152C22.1805 2.40122 21.4909 2.59142 20.9436 3.01167L19.0436 4.47167C18.5207 4.87346 18.1663 5.45578 18.0498 6.10485C17.9333 6.75392 18.063 7.42312 18.4136 7.98168L23.6336 16.3417ZM4.80357 6.56168C4.43572 6.96768 4.19269 7.47111 4.10357 8.01167L3.06357 14.3417C2.95934 14.9821 3.07676 15.6389 3.39643 16.2036C3.71609 16.7682 4.21886 17.2069 4.82163 17.4471C5.4244 17.6872 6.09107 17.7145 6.71146 17.5245C7.33185 17.3344 7.8688 16.9383 8.23357 16.4017L13.2136 9.02168C13.6276 8.41017 13.7881 7.66184 13.6612 6.93434C13.5344 6.20684 13.1301 5.55698 12.5336 5.12168L10.7336 3.81167C10.1651 3.39756 9.46348 3.20829 8.76382 3.28029C8.06416 3.35228 7.41584 3.68046 6.94357 4.20167L4.80357 6.56168Z"
        fill="currentColor"
      />
      <path
        d="M41.1935 6.52182L41.2735 20.0118C41.2735 20.3452 41.1069 20.5185 40.7735 20.5318L38.5435 20.5818C38.4744 20.5832 38.4057 20.5707 38.3415 20.5451C38.2772 20.5196 38.2187 20.4815 38.1694 20.4331C38.12 20.3847 38.0808 20.3269 38.054 20.2632C38.0273 20.1994 38.0135 20.131 38.0135 20.0618L37.9835 1.50182C37.9804 1.33092 38.0349 1.16395 38.1383 1.02786C38.2417 0.891773 38.388 0.794525 38.5535 0.751823C39.5469 0.498489 40.5402 0.488489 41.5335 0.721822C41.8869 0.801822 42.1502 1.00182 42.3235 1.32182L48.3735 12.4918C48.4005 12.5397 48.4397 12.5795 48.4872 12.6072C48.5346 12.6349 48.5886 12.6495 48.6435 12.6495C48.6985 12.6495 48.7524 12.6349 48.7999 12.6072C48.8473 12.5795 48.8865 12.5397 48.9135 12.4918L54.9935 1.46182C55.2002 1.08849 55.5035 0.838489 55.9035 0.711823C56.9035 0.391823 57.8369 0.455156 58.7035 0.901822C59.0102 1.05516 59.1635 1.30516 59.1635 1.65182V19.8318C59.1635 20.3052 58.9269 20.5418 58.4535 20.5418H56.4935C56.1402 20.5418 55.9635 20.3652 55.9635 20.0118L56.0635 6.25182C56.0702 5.40515 55.8635 5.35182 55.4435 6.09182C54.1035 8.49182 52.7235 11.0318 51.3035 13.7118C50.8369 14.5918 50.2535 15.2485 49.5535 15.6818C49.3031 15.8372 49.0236 15.9397 48.7321 15.983C48.4406 16.0263 48.1433 16.0095 47.8585 15.9336C47.5738 15.8578 47.3075 15.7244 47.0762 15.5418C46.8449 15.3592 46.6534 15.1312 46.5135 14.8718L41.9235 6.34182C41.4302 5.42182 41.1869 5.48182 41.1935 6.52182Z"
        fill="currentColor"
      />
      <path
        d="M83.0436 8.86166L83.1636 16.6717C83.1688 17.0626 83.3263 17.436 83.6028 17.7125C83.8792 17.9889 84.2527 18.1465 84.6436 18.1517L86.7836 18.1917C86.9627 18.1977 87.1368 18.2509 87.2879 18.3458C87.4391 18.4407 87.5618 18.5739 87.6436 18.7317C87.8302 19.105 87.8869 19.5083 87.8136 19.9417C87.7808 20.1117 87.6969 20.2673 87.5734 20.3873C87.4499 20.5072 87.2928 20.5856 87.1236 20.6117C85.5302 20.8783 83.9669 20.835 82.4336 20.4817C81.9669 20.375 81.6069 20.1183 81.3536 19.7117C79.5036 16.7917 80.2336 12.2017 80.2836 8.83166C80.2902 8.45833 80.1102 8.27166 79.7436 8.27166L78.2236 8.25166C78.0055 8.25209 77.7931 8.17978 77.6195 8.04597C77.4459 7.91216 77.3208 7.72434 77.2636 7.51166L77.0736 6.83166C76.9069 6.21833 77.1402 5.895 77.7736 5.86166L79.5236 5.78166C79.7216 5.77386 79.9088 5.68898 80.0452 5.54514C80.1816 5.40129 80.2563 5.20986 80.2536 5.01166L80.2336 2.42166C80.2269 1.655 80.6036 1.295 81.3636 1.34166L82.0136 1.37166C82.8269 1.425 83.2202 1.85833 83.1936 2.67166L83.1036 5.03166C83.1009 5.13443 83.1191 5.23669 83.1571 5.33242C83.1951 5.42814 83.2521 5.51539 83.3248 5.58902C83.3975 5.66265 83.4844 5.72117 83.5804 5.76112C83.6763 5.80108 83.7794 5.82167 83.8836 5.82166L86.9236 5.78166C87.0447 5.78024 87.1649 5.80329 87.2768 5.84942C87.3886 5.89554 87.4898 5.96376 87.5741 6.0499C87.6583 6.13604 87.7239 6.23827 87.7668 6.35035C87.8097 6.46242 87.829 6.58197 87.8236 6.70166L87.8036 7.20166C87.7906 7.51121 87.6554 7.80321 87.4272 8.01463C87.1989 8.22605 86.8959 8.33992 86.5836 8.33166L83.6736 8.25166C83.2469 8.23833 83.0369 8.44166 83.0436 8.86166Z"
        fill="currentColor"
      />
      <path
        d="M66.2635 14.1118C65.1169 14.0918 64.8269 14.5785 65.3935 15.5718L65.7635 16.2218C66.4035 17.3418 67.3635 17.9918 68.6435 18.1718C70.3102 18.3985 72.0902 18.0851 73.9835 17.2318C74.1826 17.1414 74.4113 17.1307 74.6235 17.2018C75.5969 17.5151 75.6602 18.2185 74.8135 19.3118C74.7148 19.4433 74.585 19.5527 74.4335 19.6318C72.8469 20.4918 71.0302 20.8718 68.9835 20.7718C60.8435 20.3818 59.8235 8.71181 66.7035 5.89181C72.2435 3.61181 76.0035 8.36181 76.1835 13.4818C76.2035 14.0018 75.9535 14.2585 75.4335 14.2518L66.2635 14.1118ZM65.4035 12.1018L73.1835 12.0618C73.226 12.0618 73.2667 12.045 73.2967 12.015C73.3267 11.9849 73.3435 11.9442 73.3435 11.9018V11.8418C73.3409 11.3428 73.2405 10.8492 73.0481 10.3892C72.8557 9.92913 72.5751 9.51169 72.2222 9.16069C71.8694 8.80968 71.4512 8.53198 70.9916 8.34343C70.532 8.15489 70.0399 8.05919 69.5435 8.06181H69.0035C68.5071 8.06442 68.0161 8.1653 67.5585 8.35868C67.1009 8.55207 66.6856 8.83417 66.3365 9.1889C65.9873 9.54362 65.7111 9.96401 65.5236 10.4261C65.336 10.8881 65.2409 11.3828 65.2435 11.8818V11.9418C65.2435 11.9628 65.2477 11.9836 65.2557 12.003C65.2638 12.0225 65.2755 12.0401 65.2904 12.0549C65.3053 12.0698 65.3229 12.0816 65.3423 12.0896C65.3617 12.0977 65.3825 12.1018 65.4035 12.1018Z"
        fill="currentColor"
      />
      <path
        d="M100.993 6.52163C101.467 5.69496 102.17 5.40163 103.103 5.64163C103.53 5.74829 103.747 6.02496 103.753 6.47163L103.823 19.8816C103.823 20.255 103.643 20.4783 103.283 20.5516C102.343 20.745 101.51 20.525 100.783 19.8916C100.483 19.6316 100.16 19.595 99.8135 19.7816C97.3335 21.1416 93.3735 21.3916 91.2835 19.0116C88.7835 16.1616 88.4335 11.0116 90.6635 8.13163C92.9902 5.12496 96.1868 4.66163 100.253 6.74163C100.573 6.90163 100.82 6.82829 100.993 6.52163ZM100.905 12.0891C100.906 11.573 100.805 11.0618 100.609 10.5847C100.412 10.1075 100.123 9.67375 99.7591 9.30818C99.3948 8.9426 98.9621 8.65236 98.4856 8.45402C98.0092 8.25568 97.4983 8.15313 96.9822 8.15223L96.3022 8.15103C95.7861 8.15012 95.2749 8.25087 94.7977 8.44754C94.3206 8.6442 93.8868 8.93292 93.5212 9.29722C93.1557 9.66151 92.8654 10.0942 92.6671 10.5707C92.4687 11.0472 92.3662 11.558 92.3653 12.0741L92.3617 14.1341C92.3608 14.6502 92.4615 15.1614 92.6582 15.6386C92.8549 16.1158 93.1436 16.5495 93.5079 16.9151C93.8722 17.2807 94.3049 17.5709 94.7814 17.7692C95.2578 17.9676 95.7687 18.0701 96.2848 18.071L96.9648 18.0722C97.4809 18.0731 97.9921 17.9724 98.4693 17.7757C98.9464 17.5791 99.3802 17.2903 99.7457 16.926C100.111 16.5617 100.402 16.129 100.6 15.6525C100.798 15.1761 100.901 14.6652 100.902 14.1491L100.905 12.0891Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MetaLogo;