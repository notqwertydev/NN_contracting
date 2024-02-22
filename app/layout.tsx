"use client";
import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Header from "@/components/NavHeader";
import { BorderBeam } from "@/components/magicui/border-beam";
import { usePathname } from "next/navigation"
import SplashScreen from "@/components/SplashScreen"
import React, { useState, useEffect } from "react"


const inter = Roboto_Condensed({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "NN | Engineering & Contracting ",
//   description: "NN Engineering & Contracting",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const pathname = usePathname()
  console.log(pathname)
  const isHome = pathname === "/"

  

  const [isLoading, setIsLoading] = useState(isHome)


  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])


  return (
    <html lang="en">
      <title>NN | Engineering & Contracting</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="NN Engineering & Contracting" />
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>

        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)}

          />
        ) : (

          <>
            <Header />

            {children}


          </>
        )}

      </body>
    </html>
  );
}
