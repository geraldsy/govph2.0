import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { buttonVariants } from "../ui/button"

export default function ButtonListSection() {
  return (
    <section id="services-list" className="" data-aos="fade-up">
      <div className="grid grid-cols-4 gap-4 snap-align-center">
        <Link
          href="/"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "default" })}
        >
          "button variant: default"
        </Link>
        <Link
          href="/"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "secondary" })}
        >
          button variant: secondary
        </Link>
        <Link
          href="/"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "destructive" })}
        >
          button variant: destructive
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href="/"
          className={buttonVariants({ variant: "outline" })}
        >
          button variant: outline
        </Link>
      </div>
    </section>
  )
}
