import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export default function ServicesSection() {
  const items = siteConfig.servicesList
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid grid-cols-12 grid-rows-1 gap-x-5">
        {siteConfig.servicesList.map((item, index) => (
          <Link href={item.href}>
            <div
              key={index}
              className="p-4 mx-auto bg-blue-200 rounded-full h-15 w-15"
            >
              <Image
                src={require(`@/public/eservicesicons/${item.image}`).default}
                alt={item.category}
                className=""
              />
            </div>
            <span className="mt-2">{item.category}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
