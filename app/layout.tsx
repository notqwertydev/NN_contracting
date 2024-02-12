import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Header from "@/components/NavHeader";
import { BorderBeam } from "@/components/magicui/border-beam";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NN | Engineering & Contracting ",
  description: "NN Engineering & Contracting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header />

        {children}




      </body>
    </html>
  );
}
