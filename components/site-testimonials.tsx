import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    initials: "SM",
    quote:
      "SparkleClean transformed my home. The team was punctual, friendly, and incredibly thorough. My place has never looked better!",
  },
  {
    name: "James Carter",
    role: "Office Manager",
    initials: "JC",
    quote:
      "We switched to SparkleClean for our office and the difference is night and day. Reliable, professional, and great value.",
  },
  {
    name: "Priya Sharma",
    role: "Tenant",
    initials: "PS",
    quote:
      "Booked a move-out deep clean and got my full deposit back. Fast, affordable, and stress-free. Highly recommend!",
  },
]

export function SiteTestimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by customers like you
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Don&apos;t just take our word for it &mdash; here&apos;s what our clients say.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
                  {review.initials}
                </span>
                <span>
                  <span className="block font-semibold text-foreground">{review.name}</span>
                  <span className="block text-sm text-muted-foreground">{review.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
