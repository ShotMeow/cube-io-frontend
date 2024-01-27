import type { FC } from "react";

import styles from "./IntegrateSection.module.scss";

import DiscordIcon from "@/shared/assets/icons/DiscordIcon";
import DockerIcon from "@/shared/assets/icons/DockerIcon";
import GithubIcon from "@/shared/assets/icons/GithubIcon";
import KubernetesIcon from "@/shared/assets/icons/KubernetesIcon";
import UnsplashIcon from "@/shared/assets/icons/UnsplashIcon";
import VimeoIcon from "@/shared/assets/icons/VimeoIcon";
import VscodeIcon from "@/shared/assets/icons/VscodeIcon";
import WixIcon from "@/shared/assets/icons/WixIcon";

import Button from "@/shared/ui/Button";
import Arrow from "@/shared/ui/Arrow";
import Logo from "@/shared/ui/Logo";

const IntegrateSection: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h3>
          Integrate Your 3D Design <br /> with Anything You Want
        </h3>
        <p>
          Effortlessly blend the power of our 3D design software with a leading
          no-code web builder. Unleash creativity seamlessly by integrating
          cutting-edge 3D capabilities into popular no-code web development
          platforms.
        </p>
        <Button variant="fill">
          More Information <Arrow />
        </Button>
      </div>
      <div className={styles.brands}>
        <span>
          <DiscordIcon />
        </span>
        <span>
          <DockerIcon />
        </span>
        <span>
          <GithubIcon />
        </span>
        <span>
          <KubernetesIcon />
        </span>
        <span>
          <Logo iconOnly />
        </span>
        <span>
          <UnsplashIcon />
        </span>
        <span>
          <VimeoIcon />
        </span>
        <span>
          <VscodeIcon />
        </span>
        <span>
          <WixIcon />
        </span>
      </div>
    </section>
  );
};

export default IntegrateSection;
