import Link from "next/link"
import { ArrowRight, Building2, Globe2, Handshake, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - KGH | Kayseri Global Hub",
  description: "Learn about Kayseri Global Hub, connecting global buyers with trusted furniture manufacturers in Kayseri, Turkey.",
}

const stats = [
  { label: "Countries Served", value: "100+" },
  { label: "Verified Manufacturers", value: "500+" },
  { label: "Products Available", value: "10,000+" },
  { label: "Happy Clients", value: "2,000+" },
]

const values = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "We connect buyers across continents with manufacturers in Kayseri, making international sourcing seamless.",
  },
  {
    icon: Building2,
    title: "Verified Partners",
    description: "Every manufacturer in our network undergoes rigorous vetting for quality, reliability, and ethical practices.",
  },
  {
    icon: Handshake,
    title: "Direct Relationships",
    description: "Eliminate middlemen and build lasting partnerships directly with the craftspeople who create your furniture.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our multilingual team assists you throughout the sourcing process, from initial inquiry to delivery.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                About KGH
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
                Connecting Global Buyers with Trusted Manufacturers
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Kayseri Global Hub bridges the gap between international buyers and Turkey&apos;s finest furniture manufacturers, 
                based in one of the world&apos;s largest furniture production centers.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Our Story
              </h2>
              <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Kayseri has been a center of furniture manufacturing for generations. With skilled craftspeople, 
                  access to quality materials, and a tradition of excellence, the region produces some of the finest 
                  furniture in the world.
                </p>
                <p>
                  Kayseri Global Hub was founded to connect these talented manufacturers with international buyers. 
                  We bring transparency to global furniture sourcing, making it easier than ever to access premium 
                  products directly from verified factories.
                </p>
                <p>
                  Today, we serve businesses across more than 100 countries, from boutique hotels seeking unique pieces 
                  to retailers building their collections. Our platform features 3D product previews and AR technology, 
                  allowing you to visualize products before placing an order.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                What Sets Us Apart
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We&apos;re committed to making international furniture sourcing simple, transparent, and rewarding.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground text-balance">
              Ready to Start Sourcing?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Browse our 3D collection or get in touch to discuss your specific requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/products">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
