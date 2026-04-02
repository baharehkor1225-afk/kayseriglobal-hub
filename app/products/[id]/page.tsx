import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InquiryForm } from "@/components/inquiry-form"
import { ModelViewer3D } from "@/components/model-viewer-3d"
import { getProductById, products } from "@/lib/data"
import type { Metadata } from "next"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: "Product Not Found - KGH",
    }
  }

  return {
    title: `${product.name} - KGH | Kayseri Global Hub`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* 3D Product Viewer */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
                {/* Replace with real factory models */}
                <ModelViewer3D
                  src={product.modelPath}
                  alt={product.name}
                  poster={product.images[0]}
                  className="h-full w-full"
                  showARButton={true}
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Drag to rotate. Pinch to zoom. Tap AR button to view in your space.
              </p>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {product.name}
                </h1>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="mt-8 border-t border-border pt-8">
                  <h2 className="text-sm font-medium text-foreground uppercase tracking-wider">
                    Specifications
                  </h2>
                  <dl className="mt-4 space-y-4">
                    <div className="flex justify-between border-b border-border pb-4">
                      <dt className="text-muted-foreground">Material</dt>
                      <dd className="font-medium text-foreground">{product.material}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-4">
                      <dt className="text-muted-foreground">Style</dt>
                      <dd className="font-medium text-foreground">{product.style}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-4">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="font-medium text-foreground">{product.category}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-4">
                      <dt className="text-muted-foreground">Origin</dt>
                      <dd className="font-medium text-foreground">Kayseri, Turkey</dd>
                    </div>
                  </dl>
                </div>

                {/* Available Options */}
                <div className="mt-8">
                  <h2 className="text-sm font-medium text-foreground uppercase tracking-wider">
                    Available Options
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Standard", "Premium", "Custom"].map((option) => (
                      <span
                        key={option}
                        className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in this product? Request a personalized quote from our manufacturing partners.
                </p>
                <InquiryForm productName={product.name} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
