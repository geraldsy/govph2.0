"use client"

import React, { useState } from "react"
import { Building2, Cog, ListChecks } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export default function SearchBar() {
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleCommandFocus = () => {
    setShowSuggestions(true)
  }

  const handleCommandBlur = () => {
    setShowSuggestions(false)
  }
  return (
    <Command className="border rounded-lg shadow-md">
      <CommandInput
        placeholder="Search GOV.PH"
        onFocus={handleCommandFocus}
        onBlur={handleCommandBlur}
      />
      <CommandList>
        {showSuggestions && (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Cog className="w-4 h-4 mr-2" />
                <span>eServices</span>
              </CommandItem>
              <CommandItem>
                <Building2 className="w-4 h-4 mr-2" />
                <span>Agencies</span>
              </CommandItem>
              <CommandItem>
                <ListChecks className="w-4 h-4 mr-2" />
                <span>Government Projects</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
          </>
        )}
        <CommandSeparator />
      </CommandList>
    </Command>
  )
}
