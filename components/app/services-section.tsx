import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export default function ServicesSection() {
  const items = siteConfig.servicesList
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid grid-flow-col grid-rows-1">
        {siteConfig.servicesList.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="flex flex-col items-center justify-center p-4 bg-blue-200 rounded-full h-15 w-15 ">
              <Image
                src={require(`@/public/eservicesicons/${item.image}`).default}
                alt={item.category}
                className="rounded-full w-14 h-14"
              />
              <span className="mt-2">{item.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
