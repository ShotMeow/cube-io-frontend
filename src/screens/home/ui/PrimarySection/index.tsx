import type { FC } from "react";
import Image from "next/image";

import styles from "./PrimarySection.module.scss";

import appImage from "@/shared/assets/images/application.webp";

import AmazonLogo from "@/shared/assets/logos/AmazonLogo";
import FramerLogo from "@/shared/assets/logos/FramerLogo";
import GoogleLogo from "@/shared/assets/logos/GoogleLogo";
import MetaLogo from "@/shared/assets/logos/MetaLogo";
import MicrosoftLogo from "@/shared/assets/logos/MicrosoftLogo";
import SamsungLogo from "@/shared/assets/logos/SamsungLogo";
import SharpLogo from "@/shared/assets/logos/SharpLogo";
import ShopifyLogo from "@/shared/assets/logos/ShopifyLogo";
import WebflowLogo from "@/shared/assets/logos/WebflowLogo";

import Button from "@/shared/ui/Button";
import Grid from "@/shared/ui/Grid";
import Arrow from "@/shared/ui/Arrow";
import Glow from "@/shared/ui/Glow";

const PrimarySection: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h1>Learning 3D is Never Been Easier</h1>
        <p>
          Explore the world of 3D designed for beginners. Making the creative
          process enjoyable and accessible to everyone.
        </p>
        <div className={styles.actions}>
          <Button variant="fill">Try Cube.io for Free</Button>
          <Button variant="stroke">
            See Examples <Arrow />
          </Button>
        </div>
      </div>
      <span className={styles.application}>
        <Image
          src={appImage}
          alt="Application Image"
          priority
          placeholder="blur"
        />
        <Glow />
      </span>
      <Grid size="big" />
      <p>Trusted by fast-growing companies across the world</p>
      <div className={styles.organizations}>
        <AmazonLogo />
        <FramerLogo />
        <GoogleLogo />
        <MetaLogo />
        <MicrosoftLogo />
        <SamsungLogo />
        <SharpLogo />
        <ShopifyLogo />
        <WebflowLogo />
      </div>
    </section>
  );
};

export default PrimarySection;
