import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Modal } from "~/components/Modal";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "HashSmith",
  description: "Miner status",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        {children}
        <Suspense fallback={<div></div>}>
          <Modal />
        </Suspense>
      </body>
    </html>
  );
}
