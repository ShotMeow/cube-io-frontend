import type { FC } from "react";

import styles from "./PrimarySection.module.scss";
import HeadingChapter from "./HeadingChapter";

import AmazonLogo from "@/shared/assets/logos/AmazonLogo";
import FramerLogo from "@/shared/assets/logos/FramerLogo";
import GoogleLogo from "@/shared/assets/logos/GoogleLogo";
import MetaLogo from "@/shared/assets/logos/MetaLogo";
import MicrosoftLogo from "@/shared/assets/logos/MicrosoftLogo";
import SamsungLogo from "@/shared/assets/logos/SamsungLogo";
import SharpLogo from "@/shared/assets/logos/SharpLogo";
import ShopifyLogo from "@/shared/assets/logos/ShopifyLogo";
import WebflowLogo from "@/shared/assets/logos/WebflowLogo";
import Grid from "@/shared/ui/Grid";
import ApplicationChapter from "@/screens/home/ui/PrimarySection/ApplicationChapter";

const PrimarySection: FC = () => {
  return (
    <section className={styles.section}>
      <HeadingChapter />
      <ApplicationChapter />
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
