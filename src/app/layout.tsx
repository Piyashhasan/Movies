import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "./globals.css";
import "../styles/app.scss";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie - Home",
  description: "Movie app. Know about your favorite movies ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={josefin.className}>
        {children}
      </body>
    </html>
  );
}
