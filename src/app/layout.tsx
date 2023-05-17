import "./globals.css";
import { Karla, DM_Serif_Display } from "next/font/google";

export const karla = Karla({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

export const dm_serif_display = DM_Serif_Display({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
});

export const metadata = {
  title: "Insure landing page",
  description: "Mockup of an Insure company landing page by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${karla.variable} ${dm_serif_display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
