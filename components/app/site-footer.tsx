import React from "react"
import Image from "next/image"
import Link from "next/link"
import egovlogodarkbg from "@/public/egov-logo-dark-bg.svg"
import republikangpilipinaslogo from "@/public/republikangpilipinaslogo-dark-bg.svg"

export function SiteFooter() {
  return (
    <footer className="container w-full gap-5 py-16 text-white bg-darkblue ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="mx-auto md:mx-0">
          <Image
            src={republikangpilipinaslogo}
            alt="Republika ng Pilipinas Logo"
            priority
          />
        </div>

        <div className="">
          <Image src={egovlogodarkbg} alt="eGOV Logo" priority />
          <span>
            All content is in the public domain unless otherwise stated.
          </span>
        </div>
        <div>
          <span className="font-bold"> About Us</span>
          <p>
            Learn more about the Philippine government, its structure, how
            government works and the people behind it.
          </p>
          <ul>
            <li>
              <Link href="/">GOVPH</Link>
            </li>
            <li>
              <Link href="/">OpenData PH</Link>
            </li>
            <li>
              <Link href="/">Official Gazette</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-bold"> Government Links</span>
          <ul>
            <li className=" hover:underline">
              <Link href="/">Office of the President</Link>
            </li>
            <li className=" hover:underline">
              <Link href="/">Office of the Vice President</Link>
            </li>
            <li className=" hover:underline">
              <Link href="/">Senate of the Philippines</Link>
            </li>
            <li className=" hover:underline">
              <Link href="/">House of Representatives</Link>
            </li>
            <li className=" hover:underline">
              <Link href="/">Supreme Court</Link>
            </li>
            <li className=" hover:underline">
              <Link href="/">Court of Appeals</Link>
            </li>
            <li className=" hover:underline">
              <Link href="/">Sandiganbayan</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
