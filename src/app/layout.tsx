import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaimegonzalez.dev"),
  title: "Jaime González — Full-Stack Developer",
  description:
    "Full-stack developer building complete applications, from database to production.",
  openGraph: {
    title: "Jaime González — Full-Stack Developer",
    description:
      "Live projects: Carga+ (NestJS + PostgreSQL + Prisma) and a Notifications API with the Strategy pattern.",
    url: "https://jaimegonzalez.dev",
    siteName: "Jaime González",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
