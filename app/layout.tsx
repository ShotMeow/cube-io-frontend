import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";
import { Montserrat } from "next/font/google";

import "@/app/styles/globals.scss";
import { Header } from "@/widgets/header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Cube.io - 3D Web Based Editor",
  description:
    "Explore the world of 3D designed for beginners. Making the creative process enjoyable and accessible to everyone.",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;
