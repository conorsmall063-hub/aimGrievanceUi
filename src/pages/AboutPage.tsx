import { SiteHeader } from "@/components/features/SiteHeader"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader showBackButton title="AIM" subtitle="About Us" />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h1 className="mb-6 text-4xl font-black tracking-tight text-foreground">About Us</h1>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">Our Mission</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">Our Values</h2>
            <p>
              Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
            <p>
              Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
              molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-foreground">Est.</h3>
              <p className="text-3xl font-black text-foreground">2018</p>
              <p className="mt-2 text-sm text-muted-foreground">Providing ethical workplace investigation services across New Zealand.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-foreground">Cases Handled</h3>
              <p className="text-3xl font-black text-foreground">500+</p>
              <p className="mt-2 text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-foreground">Team Size</h3>
              <p className="text-3xl font-black text-foreground">24</p>
              <p className="mt-2 text-sm text-muted-foreground">Dedicated professionals across compliance, risk, and investigations.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default AboutPage
