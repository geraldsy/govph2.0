import React from "react"

// this section is not officially in the BIR, this is for the sole purpose of seeing the theme font colors and background colors
export default function ColorsSection() {
  return (
    <div className="space-y-4 ">
      <div className="p-4 rounded-lg bg-primary">
        <span className="text-primary-foreground">
          Primary Background and Foreground
        </span>
      </div>

      <div className="p-4 rounded-lg bg-secondary">
        <span className="text-secondary-foreground">
          Secondary Background and Foreground
        </span>
      </div>

      <div className="p-4 rounded-lg bg-accent">
        <span className="text-accent-foreground">
          Accent Background and Foreground
        </span>
      </div>

      <div className="p-4 rounded-lg bg-muted">
        <span className="text-muted-foreground">
          Muted Background and Foreground
        </span>
      </div>

      <div className="p-4 rounded-lg bg-popover">
        <span className="text-foreground">
          Popover Background and Foreground
        </span>
      </div>

      <div className="p-4 rounded-lg bg-border">
        <span className="text-bg-foreground">
          Border Background and Foreground
        </span>
      </div>

      <div className="p-4 rounded-lg bg-input">
        <span className="text-input-foreground">
          Input Background and Foreground
        </span>
      </div>

      <div className="p-4 rounded-lg bg-card">
        <span className="text-card-foreground">
          Card Background and Foreground
        </span>
      </div>

      <div className="p-4 rounded-lg bg-destructive">
        <span className="text-destructive-foreground">
          Destructive Background and Foreground
        </span>
      </div>
    </div>
  )
}
