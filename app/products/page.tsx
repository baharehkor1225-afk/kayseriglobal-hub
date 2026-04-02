import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilters } from "@/components/product-filters"
import { ProductCard3D } from "@/components/product-card-3d"
import { getFilteredProducts } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products - KGH | Premium Furniture from Kayseri",
  description: "Browse our 3D catalog of premium furniture from verified manufacturers in Kayseri, Turkey.",
}

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string
    material?: string
    style?: string
  }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const products = getFilteredProducts(
    params.category,
    params.material,
    params.style
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Interactive 3D Preview
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Collection
            </h1>
            <p className="mt-2 text-muted-foreground">
              Browse our curated selection of premium furniture. Rotate, zoom, and view in AR.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 border-b border-border pb-6">
            <Suspense fallback={<div className="h-10" />}>
              <ProductFilters />
            </Suspense>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard3D key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-lg text-muted-foreground">
                No products found matching your filters.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your filter criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
