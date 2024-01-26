import type { FC } from "react";
import Image from "next/image";

import styles from "./PrimarySection.module.scss";
import Glow from "../../../../shared/ui/Glow";

import appImage from "../../assets/images/application.webp";

import amazon from "../../assets/icons/amazon.svg";
import framer from "../../assets/icons/framer.svg";
import google from "../../assets/icons/google.svg";
import meta from "../../assets/icons/meta.svg";
import microsoft from "../../assets/icons/microsoft.svg";
import samsung from "../../assets/icons/samsung.svg";
import sharp from "../../assets/icons/sharp.svg";
import shopify from "../../assets/icons/shopify.svg";
import webflow from "../../assets/icons/webflow.svg";

import Button from "@/shared/ui/Button";
import Grid from "@/shared/ui/Grid";
import Arrow from "@/shared/ui/Arrow";

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
        <Image src={appImage} alt="Application Image" priority />
        <Glow />
      </span>
      <Grid size="big" />
      <p>Trusted by fast-growing companies across the world</p>
      <div className={styles.organizations}>
        <Image src={amazon} alt="Amazon Logo" />
        <Image src={framer} alt="Framer Logo" />
        <Image src={google} alt="Google Logo" />
        <Image src={meta} alt="Meta Logo" />
        <Image src={microsoft} alt="Microsoft Logo" />
        <Image src={samsung} alt="Samsung Logo" />
        <Image src={sharp} alt="Sharp Logo" />
        <Image src={shopify} alt="Shopify Logo" />
        <Image src={webflow} alt="Webflow Logo" />
      </div>
    </section>
  );
};

export default PrimarySection;
