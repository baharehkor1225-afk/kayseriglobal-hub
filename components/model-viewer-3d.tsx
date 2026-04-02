"use client"

import { useEffect, useRef, useState, createElement } from "react"
import { Smartphone } from "lucide-react"

interface ModelViewer3DProps {
  src: string
  alt: string
  poster?: string
  className?: string
  showARButton?: boolean
  showPoster?: boolean
}

// Replace with real factory models - these are placeholder paths
export function ModelViewer3D({
  src,
  alt,
  poster,
  className = "",
  showARButton = true,
  showPoster = false,
}: ModelViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<any>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Dynamically import model-viewer only on client
    import("@google/model-viewer")
      .then(() => setIsReady(true))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Failed to load model-viewer", error)
      })
  }, [])

  useEffect(() => {
    if (!isReady || !modelRef.current) return

    // Set attributes on the model-viewer web component
    modelRef.current.setAttribute("src", src)
    modelRef.current.setAttribute("alt", alt)
    if (showPoster && poster) {
      modelRef.current.setAttribute("poster", poster)
    }
    modelRef.current.setAttribute("auto-rotate", "true")
    modelRef.current.setAttribute("camera-controls", "true")
    modelRef.current.setAttribute("shadow-intensity", "1")
    modelRef.current.setAttribute("ar", "true")
    modelRef.current.setAttribute("ar-scale", "fixed")
    modelRef.current.setAttribute("ar-placement", "floor")
    modelRef.current.setAttribute("ar-modes", "webxr scene-viewer quick-look")
  }, [isReady, src, alt, poster, showPoster])

  if (!isReady) {
    return (
      <div className={`relative ${className} bg-secondary`} style={{ minHeight: "240px" }}>
        {/* waiting for model-viewer runtime to load */}
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {createElement(
        "model-viewer" as any,
        {
          ref: modelRef,
          style: {
            width: "100%",
            height: "100%",
            backgroundColor: "hsl(var(--secondary))",
            borderRadius: "0.5rem",
          },
        },
        showARButton &&
          createElement(
            "button",
            {
              slot: "ar-button",
              className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground shadow-lg border border-border hover:bg-secondary transition-colors",
            },
            createElement(Smartphone, { className: "h-4 w-4" }),
            " View in your space"
          )
      )}
    </div>
  )
}
