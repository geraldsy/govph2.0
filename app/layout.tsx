/* eslint-disable tailwindcss/classnames-order */
import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { SiteFooter } from "@/components/app/site-footer"
import { SiteHeader } from "@/components/app/site-header"
import { TailwindIndicator } from "@/components/imports/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon-16x16.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className="flex flex-col justify-center min-h-screen antialiased bg-background">
          <SiteHeader />
          <div className="container flex-1 ">{children}</div>
          <SiteFooter />
          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}
