import { SiteNavbar } from "@/components/site-navbar"
import { SiteHero } from "@/components/site-hero"
import { SiteServices } from "@/components/site-services"
import { SiteAbout } from "@/components/site-about"
import { SitePricing } from "@/components/site-pricing"
import { SiteTestimonials } from "@/components/site-testimonials"
import { SiteContact } from "@/components/site-contact"
import { SiteFooter } from "@/components/site-footer"
import { Button, buttonVariants } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <main>
        <SiteHero />
        <SiteServices />
        <SiteAbout />
        <SitePricing />
        <SiteTestimonials />
        <SiteContact />
      </main>
      <SiteFooter />

      {/* Always-visible Book Now button on mobile */}
      <a href="#contact" className={buttonVariants({ size: "lg", className: "fixed bottom-5 right-5 z-40 shadow-lg sm:hidden" })}>Book Now</a>
    </div>
  )
}
