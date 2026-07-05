import { Check } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Basic",
    price: "89",
    description: "Perfect for regular upkeep of smaller homes and apartments.",
    features: ["Up to 2 bedrooms", "Kitchen & bathrooms", "Dusting & vacuuming", "Trash removal"],
    popular: false,
  },
  {
    name: "Standard",
    price: "149",
    description: "Our most popular package for a complete, thorough clean.",
    features: [
      "Up to 4 bedrooms",
      "All living areas",
      "Inside appliances",
      "Window sills & baseboards",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "Deep Clean",
    price: "229",
    description: "An intensive top-to-bottom reset for any space.",
    features: [
      "Whole-home detail",
      "Grout & tile scrub",
      "Inside cabinets & oven",
      "Move-in / move-out ready",
      "Eco-friendly products",
    ],
    popular: false,
  },
]

export function SitePricing() {
  return (
    <section id="pricing" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent packages
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Choose the plan that fits your space. No contracts, no hidden fees.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg",
                plan.popular ? "border-primary shadow-md lg:scale-105" : "border-border",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">${plan.price}</span>
                <span className="text-sm text-muted-foreground">/ visit</span>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={buttonVariants({
                  className: "mt-8 w-full",
                  variant: plan.popular ? "default" : "outline",
                })}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
