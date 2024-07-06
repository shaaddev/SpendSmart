import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";

const mont = Montserrat({ 
  variable: '--font-mont',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "ft-nt",
  description: "Finance Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-screen-2xl">
            {children}
          </main>
          <Toaster />
        </Providers>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
