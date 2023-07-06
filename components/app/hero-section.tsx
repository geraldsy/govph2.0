import React from "react"
import Image from "next/image"
import heroImage from "@/public/hero-image.png"
import jeep from "@/public/jeep.png"

import SearchBar from "@/components/app/search-bar"

export default function HeroSection() {
  return (
    <section
      className="h-screen snap-start"
      id="hero-section"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 gap-x-14">
        <Image src={heroImage} alt="hero Image" className="md:order-last" />
        <div className="space-y-5">
          <Image
            src={jeep}
            alt="jeep Image"
            height={94}
            className="hidden md:flex"
          />
          <p className="text-4xl font-bold">Welcome to GOV.PH</p>
          <p>
            The GOV.PH or National Government Portal (NGP) is a single window
            uniting all web-based government content to maximize efficiency and
            provide rapid, high-quality services to citizens.
          </p>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  )
}
