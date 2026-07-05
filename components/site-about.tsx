import Image from "next/image"
import { BadgeCheck, Clock, HandCoins, Users } from "lucide-react"

const points = [
  {
    icon: BadgeCheck,
    title: "Reliable",
    description: "On-time, every time, with consistent results you can count on.",
  },
  {
    icon: Users,
    title: "Trained",
    description: "Background-checked, professionally trained cleaning experts.",
  },
  {
    icon: HandCoins,
    title: "Affordable",
    description: "Transparent, fair pricing with no hidden fees or surprises.",
  },
  {
    icon: Clock,
    title: "Flexible",
    description: "Scheduling that works around your day, including weekends.",
  },
]

export function SiteAbout() {
  return (
    <section id="about" className="scroll-mt-16 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 overflow-hidden rounded-2xl border border-border shadow-lg lg:order-1">
          <Image
            src="/about-team.png"
            alt="Friendly SparkleClean team in blue uniforms ready to clean"
            width={640}
            height={520}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A cleaning company you can genuinely rely on
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            For over a decade, SparkleClean has helped families and businesses enjoy cleaner, healthier spaces. Our
            mission is simple: deliver dependable, high-quality cleaning at a price that makes sense.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point.title} className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card text-primary shadow-sm">
                  <point.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
