import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "PKTM SG | Điều trị lõm ngực bằng phương pháp Nuss",
  description:
    "Landing page giới thiệu dịch vụ điều trị lõm ngực bằng phương pháp Nuss của PGS TS BS. Trần Thanh Vỹ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} text-balance`}>
        {children}
      </body>
    </html>
  );
}
