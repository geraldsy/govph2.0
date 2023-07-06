import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export default function MenuList() {
  const items = siteConfig.mainNav

  return (
    <div className="flex flex-wrap">
      {items?.length ? (
        <nav className="flex flex-col gap-y-6 md:gap-5 md:flex-row">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center font-bold transition-colors text-md text-foreground hover:text-foreground/60"
                >
                  {item.title}
                </Link>
              )
          )}
          {/* <Button className="flex justify-between w-full transition-all rounded-full hover:scale-105">
            <span className="flex justify-center flex-1 mr-2">
              Get the eGOV App now
            </span>
            <Download className="w-4 h-4 " />
          </Button> */}
        </nav>
      ) : null}
    </div>
  )
}
