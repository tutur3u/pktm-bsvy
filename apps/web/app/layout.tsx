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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const siteName = "Phòng khám PGS TS BS. Trần Thanh Vỹ";
const pageTitle = "Điều trị lõm ngực bằng phương pháp Nuss";
const pageDescription =
  "Tư vấn và điều trị lõm ngực bằng phương pháp Nuss cùng PGS TS BS. Trần Thanh Vỹ, chuyên gia tiên phong ứng dụng kỹ thuật Nuss tại Việt Nam.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${pageTitle} | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: pageDescription,
  applicationName: siteName,
  keywords: [
    "điều trị lõm ngực",
    "phẫu thuật Nuss",
    "phương pháp Nuss",
    "PGS TS BS Trần Thanh Vỹ",
    "bác sĩ Trần Thanh Vỹ",
    "điều trị lõm ngực cho trẻ em",
    "phẫu thuật lõm ngực tại Việt Nam",
    "phòng khám lồng ngực",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "healthcare",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName,
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Điều trị lõm ngực bằng phương pháp Nuss cùng PGS TS BS. Trần Thanh Vỹ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
