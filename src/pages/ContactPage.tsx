import { useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

const ContactPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4 sm:px-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4" />
            Back
          </button>
          <span className="text-border">|</span>
          <span className="text-sm font-bold uppercase tracking-widest text-foreground">AIM</span>
          <span className="text-xs text-muted-foreground">Contact Us</span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h1 className="mb-6 text-4xl font-black tracking-tight text-foreground">Contact Us</h1>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>

            <div className="space-y-4 pt-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <p className="font-medium text-foreground">info@aimcri.co.nz</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                <p className="font-medium text-foreground">+64 9 000 0000</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Address</p>
                <p className="font-medium text-foreground">Lorem ipsum street, Auckland, New Zealand</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 space-y-5">
            <h2 className="text-lg font-bold text-foreground">Send a Message</h2>
            <p className="text-sm text-muted-foreground">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>

            <div className="space-y-4">
              <div className="grid gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  type="text"
                  placeholder="Lorem Ipsum"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  type="email"
                  placeholder="lorem@ipsum.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  rows={5}
                  placeholder="Lorem ipsum dolor sit amet..."
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
