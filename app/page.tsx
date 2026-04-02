import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Shield, Truck, Search, FileText, MessageSquare, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getFeaturedProducts } from "@/lib/data"
import { ProductCard3D } from "@/components/product-card-3d"

const trustFeatures = [
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Worldwide delivery to over 100 countries with reliable logistics partners",
  },
  {
    icon: Shield,
    title: "Export-Ready",
    description: "All products meet international quality standards and export requirements",
  },
  {
    icon: Truck,
    title: "Direct from Factory",
    description: "Connect directly with manufacturers, eliminating middlemen costs",
  },
]

const howItWorks = [
  {
    icon: Search,
    step: "01",
    title: "Browse Products",
    description: "Explore our 3D catalog of premium furniture from verified manufacturers",
  },
  {
    icon: FileText,
    step: "02",
    title: "Request Price",
    description: "Submit an inquiry for products you are interested in with your specifications",
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Receive Quote",
    description: "Get a personalized quote directly from our manufacturing partners",
  },
  {
    icon: Package,
    step: "04",
    title: "Place Order",
    description: "Confirm your order and track delivery to your destination",
  },
]

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-furniture.jpg"
            alt="Premium furniture showroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Based in Kayseri, Turkey
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Connecting Global Buyers with Trusted Manufacturers
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kayseri is one of the largest furniture manufacturing hubs in Turkey. 
            Access premium quality furniture directly from verified factories.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/products">
                Browse Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products with 3D Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Interactive 3D Preview
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Featured Products
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard3D key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why KGH Section */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Why Choose KGH
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Trusted Worldwide
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Simple Process
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-5xl font-bold text-secondary mb-4">{step.step}</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground text-background mb-4">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
            Ready to Source Premium Furniture?
          </h2>
          <p className="mt-4 text-lg text-background/70 leading-relaxed">
            Connect with verified manufacturers in Kayseri and get competitive pricing for your business.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
