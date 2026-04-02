"use client"

import { useEffect, useRef } from "react"
import { Smartphone } from "lucide-react"

interface ModelViewer3DProps {
  src: string
  alt: string
  poster?: string
  className?: string
  showARButton?: boolean
}

// Replace with real factory models - these are placeholder paths
export function ModelViewer3D({
  src,
  alt,
  poster,
  className = "",
  showARButton = true,
}: ModelViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically import model-viewer only on client
    import("@google/model-viewer")
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* @ts-expect-error - model-viewer is a custom element */}
      <model-viewer
        src={src}
        alt={alt}
        poster={poster}
        auto-rotate
        camera-controls
        shadow-intensity="1"
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "hsl(var(--secondary))",
          borderRadius: "0.5rem",
        }}
      >
        {showARButton && (
          <button
            slot="ar-button"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground shadow-lg border border-border hover:bg-secondary transition-colors"
          >
            <Smartphone className="h-4 w-4" />
            View in your space
          </button>
        )}
      </model-viewer>
    </div>
  )
}
