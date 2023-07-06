import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import egovlogo from "@/public/egov-logo-light-bg.svg"
import { Menu } from "lucide-react"

import { Button } from "../ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import MenuList from "./menu-list"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur">
      <div className="container flex items-center h-10 my-10 ">
        <header className="flex justify-between w-full flex-nowrap">
          <Link href="/" className="flex items-center mr-2">
            <Image src={egovlogo} alt="eGOV Logo" priority height={40} />
          </Link>
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-4/5 sm:w-[540px]">
                <SheetHeader>
                  <SheetDescription>
                    <MenuList />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex">
            <MenuList />
          </div>
        </header>
      </div>
    </header>
  )
}
