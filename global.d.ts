import React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": {
        src?: string
        alt?: string
        poster?: string
        "auto-rotate"?: boolean | string
        "camera-controls"?: boolean | string
        "shadow-intensity"?: string | number
        ar?: boolean | string
        "ar-modes"?: string
        style?: React.CSSProperties
        children?: React.ReactNode
      }
    }
  }
}

export {}
