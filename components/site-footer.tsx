import { AtSign, Globe, Mail, MessageCircle, Phone, Sparkles } from "lucide-react"

const socials = [
  { label: "Facebook", icon: Globe, href: "#" },
  { label: "Instagram", icon: AtSign, href: "#" },
  { label: "LinkedIn", icon: MessageCircle, href: "#" },
]

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-lg tracking-tight text-foreground">SparkleClean</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional cleaning you can trust. Reliable, trained, and affordable cleaning for homes and offices.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <a href="tel:+18005550199" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" />
                  (800) 555-0199
                </a>
              </li>
              <li>
                <a href="mailto:hello@sparkleclean.com" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  hello@sparkleclean.com
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SparkleClean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
