import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const KubernetesIcon: FC<Props> = ({ width = 24, height = 24, ...props }) => {
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
        d="M10.013 13.7381L7.75899 14.1251C8.08585 15.0392 8.70113 15.8223 9.51199 16.3561L10.377 14.2611C10.3971 14.227 10.4096 14.189 10.4134 14.1496C10.4172 14.1102 10.4123 14.0704 10.399 14.0331C10.377 13.8531 10.195 13.7381 10.013 13.7381ZM10.878 10.8241C11.083 10.8241 11.265 10.6651 11.265 10.4601L11.379 8.18311L10.923 8.27411C10.1246 8.46191 9.39236 8.86362 8.80499 9.43611L10.695 10.7791C10.764 10.8011 10.81 10.8241 10.878 10.8241ZM9.87599 12.3041C9.90819 12.2671 9.93262 12.224 9.94783 12.1773C9.96303 12.1307 9.96871 12.0815 9.96451 12.0326C9.96031 11.9837 9.94633 11.9361 9.92339 11.8928C9.90045 11.8494 9.86903 11.8111 9.83099 11.7801L8.14599 10.2771C7.64876 11.1145 7.41821 12.0835 7.48499 13.0551L9.69399 12.4181C9.78499 12.3951 9.83099 12.3721 9.87599 12.3041ZM11.333 13.1011L11.949 13.3971L12.563 13.1011L12.723 12.4401L12.29 11.8941H11.607L11.174 12.4401L11.333 13.1011ZM12.677 10.6651C12.791 10.8241 13.018 10.8471 13.177 10.7561L15.044 9.43611C14.3519 8.74442 13.4439 8.31038 12.471 8.20611L12.608 10.5061C12.6078 10.5359 12.6139 10.5655 12.6258 10.5929C12.6376 10.6202 12.6551 10.6448 12.677 10.6651Z"
        fill="currentColor"
      />
      <path
        d="M21.944 14.103L20.214 6.65698C20.101 6.29298 19.827 5.99698 19.485 5.81498L12.541 2.48998C12.359 2.39898 12.154 2.37598 11.972 2.37598C11.79 2.37598 11.585 2.37598 11.403 2.42098L4.45699 5.76898C4.28594 5.84718 4.1353 5.96388 4.01682 6.10994C3.89833 6.256 3.81523 6.42748 3.77399 6.61098L2.06599 14.103C1.99799 14.49 2.08899 14.877 2.31599 15.196L7.12099 21.139C7.39399 21.412 7.78099 21.595 8.16799 21.618H15.819C16.229 21.663 16.616 21.481 16.867 21.139L21.672 15.196C21.899 14.877 21.99 14.49 21.944 14.103ZM19.099 14.604C19.053 14.604 19.031 14.604 18.985 14.581C18.963 14.558 18.963 14.558 18.94 14.558C18.894 14.558 18.872 14.536 18.848 14.536C18.757 14.513 18.689 14.468 18.598 14.422C18.5495 14.4176 18.5026 14.4022 18.461 14.377H18.439C18.2032 14.2852 17.959 14.2166 17.71 14.172H17.688C17.6208 14.1703 17.5556 14.1946 17.506 14.24C17.506 14.24 17.506 14.263 17.483 14.263L17.3 14.239C16.8817 15.5349 16.0077 16.6353 14.84 17.336L14.908 17.518C14.908 17.518 14.886 17.518 14.886 17.54C14.8654 17.5739 14.8528 17.612 14.849 17.6515C14.8452 17.6909 14.8503 17.7308 14.864 17.768C14.955 17.996 15.069 18.223 15.228 18.428V18.473C15.2651 18.505 15.296 18.5437 15.319 18.587C15.3847 18.6532 15.4385 18.7304 15.478 18.815C15.501 18.837 15.524 18.86 15.524 18.883C15.524 18.883 15.546 18.883 15.546 18.905C15.5878 19.0141 15.5958 19.1333 15.569 19.247C15.5553 19.3012 15.5298 19.3517 15.4944 19.3949C15.459 19.4381 15.4144 19.4729 15.364 19.497C15.296 19.519 15.25 19.542 15.181 19.542C15.0912 19.5386 15.0039 19.5115 14.9278 19.4636C14.8518 19.4157 14.7898 19.3485 14.748 19.269C14.726 19.269 14.726 19.247 14.726 19.247C14.704 19.224 14.704 19.202 14.68 19.179C14.635 19.111 14.612 19.02 14.589 18.929L14.543 18.792V18.77C14.4682 18.5253 14.3691 18.2888 14.247 18.064C14.2031 17.9995 14.1391 17.9513 14.065 17.927C14.065 17.904 14.065 17.904 14.042 17.904L13.951 17.745C13.723 17.813 13.472 17.904 13.222 17.95C12.812 18.064 12.402 18.109 11.993 18.109C11.3156 18.1137 10.6434 17.9902 10.012 17.745L9.92099 17.927C9.92099 17.95 9.92099 17.95 9.89799 17.95C9.82374 17.9741 9.75968 18.0223 9.71599 18.087C9.60199 18.315 9.48799 18.542 9.41999 18.793L9.37499 18.93C9.35199 19.021 9.30699 19.089 9.28399 19.18C9.26199 19.203 9.23899 19.225 9.23899 19.248C9.21599 19.248 9.21599 19.27 9.21599 19.27C9.17444 19.3497 9.11246 19.417 9.03639 19.465C8.96031 19.513 8.87287 19.5399 8.78299 19.543C8.72759 19.5383 8.67362 19.523 8.62399 19.498C8.52123 19.4377 8.44523 19.3407 8.41143 19.2264C8.37763 19.1122 8.38856 18.9894 8.44199 18.883C8.46499 18.883 8.46499 18.86 8.46499 18.86C8.48699 18.837 8.48699 18.815 8.50999 18.792C8.57799 18.701 8.62399 18.61 8.66899 18.564C8.71399 18.518 8.73699 18.496 8.75999 18.45V18.427C8.90329 18.2198 9.02525 17.9987 9.12399 17.767C9.13725 17.7296 9.14206 17.6898 9.13808 17.6504C9.13411 17.611 9.12144 17.5729 9.10099 17.539C9.10099 17.539 9.07899 17.539 9.07899 17.517L9.19299 17.357C8.97438 17.2419 8.76828 17.1045 8.57799 16.947C7.70095 16.2679 7.05007 15.3391 6.71099 14.283L6.50599 14.305C6.50599 14.305 6.50599 14.283 6.48299 14.283C6.43361 14.2373 6.36823 14.2128 6.30099 14.215H6.27899C6.0226 14.2588 5.77109 14.3275 5.52799 14.42H5.50399C5.45899 14.42 5.41299 14.443 5.36699 14.466C5.29899 14.488 5.20799 14.534 5.11699 14.557C5.09499 14.557 5.02599 14.535 5.02599 14.557C5.02599 14.58 5.02599 14.58 5.00299 14.58C4.95799 14.603 4.93499 14.603 4.88899 14.603C4.78729 14.6137 4.68513 14.5874 4.60133 14.5288C4.51753 14.4701 4.45774 14.3832 4.43299 14.284C4.42163 14.2256 4.42209 14.1655 4.43434 14.1073C4.44659 14.0491 4.47039 13.994 4.50432 13.9451C4.53826 13.8963 4.58164 13.8547 4.63191 13.8229C4.68218 13.7911 4.73831 13.7697 4.79699 13.76C4.81999 13.737 4.81999 13.737 4.84299 13.737C4.88799 13.737 4.91099 13.715 4.93399 13.715C5.02499 13.715 5.11599 13.692 5.20699 13.692C5.25199 13.67 5.29799 13.67 5.34399 13.67C5.6057 13.6486 5.86484 13.6027 6.11799 13.533C6.18599 13.487 6.25499 13.442 6.27799 13.373C6.27799 13.373 6.29999 13.373 6.29999 13.351L6.48199 13.305C6.27699 12.007 6.57299 10.687 7.27899 9.57098C7.30099 9.52598 7.32399 9.50298 7.34699 9.45698L7.21599 9.32498C7.21524 9.33142 7.2139 9.33778 7.21199 9.34398V9.32098L7.21599 9.32498C7.22599 9.25998 7.18499 9.17998 7.14399 9.13898C6.96199 8.95698 6.73399 8.81998 6.50599 8.68398L6.36999 8.61498C6.28388 8.5743 6.20009 8.5289 6.11899 8.47898C6.09699 8.47898 6.05099 8.43398 6.05099 8.43398C6.05099 8.43398 6.05099 8.41098 6.02899 8.41098C5.93883 8.3337 5.8798 8.22631 5.86288 8.10877C5.84595 7.99123 5.87229 7.87155 5.93699 7.77198C6.00499 7.65798 6.11899 7.61298 6.25599 7.61298C6.3718 7.61578 6.48363 7.65574 6.57499 7.72698L6.59799 7.74998C6.61999 7.77198 6.64299 7.77198 6.66599 7.79498C6.73399 7.86398 6.77999 7.93198 6.84799 7.99998C6.87099 8.02198 6.91599 8.04498 6.93899 8.09098C7.09799 8.27298 7.30299 8.45498 7.50799 8.61498C7.55299 8.63698 7.59899 8.65998 7.64499 8.65998C7.68999 8.65998 7.71299 8.63698 7.73599 8.63698H7.75899L7.89599 8.72798C8.64667 7.92523 9.62343 7.36937 10.697 7.13398C10.97 7.08798 11.22 7.04298 11.471 7.01998L11.494 6.83798V6.79298C11.562 6.74798 11.585 6.67898 11.608 6.61098C11.608 6.33798 11.608 6.08698 11.563 5.83698V5.81398C11.563 5.76898 11.563 5.72298 11.54 5.67698C11.5139 5.58817 11.4987 5.49648 11.495 5.40398V5.29098C11.495 5.17698 11.54 5.06298 11.632 4.97198C11.746 4.85798 11.882 4.78998 12.019 4.81298C12.1321 4.82867 12.235 4.88679 12.3069 4.97555C12.3788 5.06431 12.4142 5.17707 12.406 5.29098V5.42798C12.383 5.51898 12.383 5.60998 12.361 5.70098C12.361 5.74598 12.338 5.79198 12.338 5.83698V5.85998C12.29 6.13298 12.29 6.38398 12.29 6.63398C12.313 6.70198 12.335 6.76998 12.404 6.81598V6.79298L12.427 6.97498C13.5044 7.08749 14.5292 7.49743 15.387 8.15898C15.57 8.34098 15.774 8.52298 15.956 8.70498L16.139 8.59098H16.161C16.183 8.61398 16.229 8.61398 16.252 8.61398C16.298 8.61398 16.343 8.59098 16.389 8.56898C16.594 8.43198 16.799 8.24998 16.958 8.06798C16.98 8.04498 17.026 8.02198 17.049 7.97698C17.095 7.90898 17.163 7.83998 17.232 7.77198C17.254 7.77198 17.277 7.74998 17.3 7.72698L17.322 7.70398C17.4133 7.63332 17.5246 7.59341 17.64 7.58998C17.754 7.58998 17.891 7.65798 17.959 7.74998C18.118 7.95498 18.072 8.22798 17.868 8.38698C17.868 8.40998 17.89 8.40998 17.868 8.43298C17.845 8.45498 17.822 8.45498 17.8 8.47798C17.708 8.52298 17.64 8.56898 17.549 8.61498L17.412 8.68298C17.1853 8.81395 16.9717 8.96631 16.774 9.13798C16.729 9.18398 16.706 9.27498 16.706 9.34298V9.36598L16.57 9.50298C16.934 10.072 17.208 10.71 17.367 11.37C17.504 12.03 17.549 12.713 17.458 13.373L17.64 13.419C17.6541 13.4552 17.6756 13.488 17.7031 13.5154C17.7307 13.5428 17.7637 13.5641 17.8 13.578C18.05 13.646 18.323 13.692 18.573 13.715H18.596C18.6393 13.733 18.6862 13.7406 18.733 13.737C18.824 13.737 18.915 13.737 19.005 13.76C19.051 13.76 19.097 13.76 19.097 13.783C19.097 13.805 19.119 13.805 19.142 13.805C19.2521 13.8314 19.351 13.8919 19.4247 13.978C19.4983 14.064 19.5429 14.1711 19.552 14.284C19.5176 14.3768 19.456 14.4571 19.3751 14.5142C19.2943 14.5714 19.198 14.6026 19.099 14.604Z"
        fill="currentColor"
      />
      <path
        d="M12.085 14.7181C12.011 14.6755 11.9241 14.6613 11.8404 14.678C11.7567 14.6948 11.6819 14.7413 11.63 14.8091L10.514 16.8361C10.97 16.9721 11.471 17.0641 11.949 17.0641C12.29 17.0641 12.609 17.0191 12.928 16.9501C13.087 16.9051 13.224 16.8821 13.361 16.8591L12.268 14.8781C12.199 14.8091 12.153 14.7631 12.085 14.7181ZM15.729 10.2771L14.021 11.8251C13.9773 11.8696 13.9459 11.9248 13.93 11.9851C13.884 12.1901 13.998 12.3951 14.203 12.4401L16.366 13.0551C16.4147 12.575 16.3836 12.0901 16.274 11.6201C16.1639 11.1466 15.98 10.6934 15.729 10.2771ZM13.656 13.7611C13.5761 13.7974 13.5117 13.8608 13.4742 13.9401C13.4367 14.0193 13.4285 14.1093 13.451 14.1941L14.34 16.3351C14.8916 15.9875 15.3584 15.5207 15.706 14.9691C15.888 14.7191 16.024 14.4221 16.139 14.1041L13.862 13.7171C13.7913 13.7202 13.7217 13.735 13.656 13.7611Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KubernetesIcon;