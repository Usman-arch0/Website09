"use client"

import { useState } from "react"
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  "Home Cleaning",
  "Office Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
]

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"

export function SiteContact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get In Touch</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get your free quote today
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us about your space and we&apos;ll get back to you with a no-obligation quote within 24 hours.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            <li className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Call us</span>
                <a href="tel:+18005550199" className="font-medium text-foreground hover:text-primary">
                  (800) 555-0199
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Email us</span>
                <a href="mailto:hello@sparkleclean.com" className="font-medium text-foreground hover:text-primary">
                  hello@sparkleclean.com
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Service area</span>
                <span className="font-medium text-foreground">Greater Metro Area</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">
                Your request has been received. We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input id="name" name="name" type="text" required placeholder="Jane Doe" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-sm font-medium text-foreground">
                  Service type
                </label>
                <select id="service" name="service" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your space..."
                  className={fieldClass}
                />
              </div>
              <Button type="submit" size="lg" className="mt-2 w-full">
                Get a Free Quote
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
