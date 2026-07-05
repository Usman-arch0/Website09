import { Home, Building2, Sparkles, Truck } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Home Cleaning",
    description: "Regular, thorough cleaning that keeps every room of your home fresh, tidy, and welcoming.",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "Spotless workspaces that boost productivity and leave a great impression on your clients.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "A top-to-bottom reset that tackles built-up grime, hidden corners, and hard-to-reach spots.",
  },
  {
    icon: Truck,
    title: "Move-In / Move-Out",
    description: "Detailed cleaning for empty spaces so you can move in fresh or hand over with confidence.",
  },
]

export function SiteServices() {
  return (
    <section id="services" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cleaning solutions for every space
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Whatever you need cleaned, we have a tailored service to make it shine.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
