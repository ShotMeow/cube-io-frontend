import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";
import { Montserrat } from "next/font/google";
import classNames from "classnames";

import "@/app/styles/globals.scss";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const montserrat = Montserrat({
  weight: ["300", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Cube.io - 3D Web Based Editor",
  description:
    "Explore the world of 3D designed for beginners. Making the creative process enjoyable and accessible to everyone.",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={classNames(
          montserrat.variable,
          "flex flex-col justify-between",
        )}
      >
        <Header />
        <div className="h-full flex flex-col justify-between">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
