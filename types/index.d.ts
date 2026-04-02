import React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerProps
    }
  }
}

interface ModelViewerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src?: string
  alt?: string
  poster?: string
  "auto-rotate"?: boolean | string
  "camera-controls"?: boolean | string
  "shadow-intensity"?: string | number
  ar?: boolean | string
  "ar-modes"?: string
  loading?: "auto" | "lazy" | "eager"
  reveal?: "auto" | "manual"
  "camera-orbit"?: string
  "min-camera-orbit"?: string
  "max-camera-orbit"?: string
  "min-field-of-view"?: string
  "max-field-of-view"?: string
}

export {}
