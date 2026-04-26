import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
]

type LandingPageProps = {
  onSubmitGrievance?: () => void
}

const LandingPage = ({ onSubmitGrievance }: LandingPageProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">

      {/* Decorative blob — top right */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 bg-brand/30"
        style={{ borderRadius: "70% 30% 60% 40% / 50% 60% 40% 60%" }}
      />

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-foreground">AIM</p>
          <p className="text-xs text-muted-foreground">Grievance Portal</p>
        </div>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
          <button
            aria-label="Search"
            className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
          >
            <Search className="size-4 text-muted-foreground" />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto flex max-w-7xl items-center gap-12 px-8 pb-24 pt-12">
        {/* Left — headline + CTA */}
        <div className="z-10 max-w-lg flex-1">
          <h1 className="mb-8 text-5xl font-black leading-tight tracking-tight text-foreground">
            Help us resolve workplace grievances safely and fairly
          </h1>
          {/* Uses --primary (brand yellow) via variant="default" */}
          <Button
            onClick={onSubmitGrievance}
            className="h-auto rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-widest"
          >
            Submit a Grievance
          </Button>
        </div>

        {/* Right — blob-clipped placeholder image */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Soft yellow glow behind the image */}
          <div
            className="absolute h-[420px] w-[480px] bg-brand/25"
            style={{ borderRadius: "60% 40% 70% 30% / 50% 70% 30% 60%", transform: "translate(12px, -8px)" }}
          />
          <div
            className="relative h-[400px] w-[460px] overflow-hidden"
            style={{ borderRadius: "60% 40% 70% 30% / 50% 70% 30% 60%" }}
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&auto=format&fit=crop&q=80"
              alt="Two people shaking hands in a professional setting"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Decorative blob — bottom left */}
      <div
        className="pointer-events-none absolute -bottom-16 -left-20 h-64 w-72 bg-brand/25"
        style={{ borderRadius: "70% 30% 40% 60% / 60% 40% 70% 30%" }}
      />
    </div>
  )
}

export default LandingPage
