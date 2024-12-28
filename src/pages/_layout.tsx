import "../styles.css";

import type { ReactNode } from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  root: {
    backgroundColor: "aquamarine",
  },
});

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <main {...stylex.props(styles.root)}>
      <div className="font-['Nunito']">
        <meta name="description" content={data.description} />
        <link rel="icon" type="image/png" href={data.icon} />
        <Header />
        <main className="m-6 flex items-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center">
          {children}
        </main>
        <Footer />
      </div>
    </main>
  );
}

const getData = async () => {
  const data = {
    description: "An internet website!",
    icon: "/images/favicon.png",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
