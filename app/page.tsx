"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import ButtonListSection from "@/components/app/button-list-section"
import ColorsSection from "@/components/app/colors-section"
import HeroSection from "@/components/app/hero-section"
import ServicesSection from "@/components/app/services-section"

import initializeAOS from "../utils/aosConfig"

export default function IndexPage() {
  useEffect(() => {
    initializeAOS()
  }, [])

  return (
    <div className="flex flex-col space-y-5">
      <HeroSection />
      <ButtonListSection />
      <ColorsSection />
      {/* <ServicesSection /> */}
    </div>
  )
}
