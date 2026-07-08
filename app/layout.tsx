import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://muzammil-satti.vercel.app"; // update after deployment

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muzammil Satti — Data Science Student & Aspiring AI / Data Analyst",
  description:
    "Portfolio of Muzammil Satti, a Data Science student at COMSATS University Islamabad specialising in data analytics, NLP, and business intelligence with Python, R, SQL, and Power BI.",
  keywords: [
    "Muzammil Satti",
    "Data Analyst",
    "Data Scientist",
    "Data Science Portfolio",
    "Python",
    "R",
    "SQL",
    "Power BI",
    "NLP",
    "Machine Learning",
    "Islamabad",
    "COMSATS",
  ],
  authors: [{ name: "Muzammil Satti" }],
  creator: "Muzammil Satti",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Muzammil Satti — Data Science Student & Aspiring AI / Data Analyst",
    description:
      "Data analytics, NLP, and business-intelligence projects built with Python, R, SQL, and Power BI. Now building toward AI, ML, and Python backend development.",
    siteName: "Muzammil Satti Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzammil Satti — Data Science Student & Aspiring AI / Data Analyst",
    description:
      "Data analytics, NLP, and business-intelligence projects built with Python, R, SQL, and Power BI.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a12" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
