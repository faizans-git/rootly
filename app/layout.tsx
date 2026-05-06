import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora", // matches @theme --font-display: var(--font-lora)
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans", // matches @theme --font-sans: var(--font-dm-sans)
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Farmfolk — Fresh from the source",
    template: "%s | Farmfolk",
  },
  description:
    "Certified organic fruits, vegetables, free-range meats and pantry staples — sourced from local farms and delivered to your door.",
  keywords: ["organic", "grocery", "farm fresh", "local food", "delivery"],
  openGraph: {
    title: "Farmfolk",
    description: "Fresh from the source.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
