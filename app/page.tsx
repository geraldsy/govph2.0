"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import HeroSection from "@/components/app/hero-section"
import ServicesSection from "@/components/app/services-section"

import initializeAOS from "../utils/aosConfig"

export default function IndexPage() {
  useEffect(() => {
    initializeAOS()
  }, [])

  return (
    <div className="flex flex-col h-screen pb-10 snap snap-y snap-mandatory">
      <HeroSection />
      <ServicesSection />
      {/* <section
        id="services-list"
        className="h-screen bg-green-300 snap-start"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-4 gap-4 snap-align-center">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "default" })}
          >
            Documentation
          </Link>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            Documentation
          </Link>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "destructive" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>
      </section> */}
    </div>
  )
}
