"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModelViewer3D } from "@/components/model-viewer-3d"
import type { Product } from "@/lib/data"

interface ProductCard3DProps {
  product: Product
}

export function ProductCard3D({ product }: ProductCard3DProps) {
  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
          {/* Replace with real factory models */}
          <ModelViewer3D
            src={product.modelPath}
            alt={product.name}
            poster={product.images[0]}
            className="h-full w-full"
            showARButton={false}
            showPoster={false}
          />
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>
        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>
        <Button asChild variant="outline" size="sm" className="mt-4">
          <Link href={`/products/${product.id}`}>Request Price</Link>
        </Button>
      </div>
    </div>
  )
}
