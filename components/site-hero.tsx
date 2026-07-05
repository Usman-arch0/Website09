import Image from "next/image"
import { CheckCircle2, ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = ["Vetted & trained staff", "100% satisfaction", "Eco-friendly products"]

export function SiteHero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-secondary-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Trusted by 2,000+ happy clients
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Professional Cleaning You Can Trust
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Reliable, trained, and affordable cleaning for your home and office. We bring the sparkle so you can focus
            on what matters most.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src="/hero-cleaning.png"
              alt="Professional cleaner tidying a bright modern living room"
              width={720}
              height={620}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-lg sm:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent">
              <Star className="h-5 w-5 fill-primary text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold leading-none text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">From 800+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
