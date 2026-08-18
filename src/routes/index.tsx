import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VELVET by Sarkar Perfume | Vanilla, Amber & Tonka Parfum" },
      {
        name: "description",
        content:
          "VELVET — a warm vanilla, amber and tonka eau de parfum from the Sarkar collection. 100ml, unisex, ₹1,799 incl. of all taxes.",
      },
      { property: "og:title", content: "VELVET by Sarkar Perfume" },
      {
        property: "og:description",
        content: "Warm. Quiet. Unshaken. Vanilla · Amber · Tonka. 100ml Eau de Parfum.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Velvet,
});

function Velvet() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <span className="tracked text-xs text-muted-foreground">Sarkar Perfume</span>
          <span className="tracked text-xs text-primary">Unisex</span>
        </nav>
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 text-center sm:pb-32 sm:pt-24">
          <h1 className="font-display text-7xl font-light leading-none tracking-[0.12em] sm:text-9xl">
            VELVET
          </h1>
          <p className="tracked mt-8 text-[0.65rem] text-muted-foreground sm:text-xs">
            Warm. Quiet. Unshaken.
          </p>
          <Button variant="gold" size="wide" className="mt-12">
            Explore Parfum
          </Button>
        </section>
      </header>

      {/* Notes */}
      <section className="border-b border-border px-6 py-20 text-center">
        <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 border border-primary/40 px-6 py-4">
          <span className="tracked text-[0.65rem] text-primary sm:text-xs">Vanilla</span>
          <span className="text-primary/50">·</span>
          <span className="tracked text-[0.65rem] text-primary sm:text-xs">Amber</span>
          <span className="text-primary/50">·</span>
          <span className="tracked text-[0.65rem] text-primary sm:text-xs">Tonka</span>
        </div>
        <p className="mx-auto mt-8 max-w-md font-display text-xl font-light leading-relaxed text-muted-foreground sm:text-2xl">
          Power doesn't shout. It settles into a room and stays.
        </p>
      </section>

      {/* Product image placeholder */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-md">
          <div
            data-bottle-placeholder
            className="flex aspect-[3/4] w-full items-center justify-center border border-border bg-card"
          >
            <span className="tracked px-6 text-center text-[0.6rem] text-muted-foreground">
              Sarkar bottle image
            </span>
          </div>
          <p className="tracked mt-6 text-center text-[0.6rem] text-muted-foreground">
            100ml · Eau de Parfum
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border px-6 py-20 text-center">
        <h2 className="tracked text-[0.6rem] text-primary">The House of Sarkar</h2>
        <p className="mx-auto mt-8 max-w-xl font-display text-2xl font-light leading-relaxed sm:text-3xl">
          Velvet joins Throne, Regal, Noble and Orion as the quietest force in the Sarkar
          collection. Where the others declare, Velvet lingers — vanilla and amber worn close to
          the skin. Composure, bottled.
        </p>
      </section>

      {/* Pricing */}
      <section className="px-6 py-24 text-center">
        <p className="font-display text-5xl font-light tracking-wide sm:text-6xl">₹1,799</p>
        <Button variant="goldSolid" size="wide" className="mt-10">
          Add to Cart
        </Button>
        <p className="tracked mt-6 text-[0.55rem] text-muted-foreground">Incl. of all taxes</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <span className="font-display text-2xl tracking-[0.3em]">SARKAR</span>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Shop All", "Know Sarkar", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="tracked text-[0.6rem] text-muted-foreground hover:text-primary"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="size-4" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="size-4" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <Twitter className="size-4" />
            </a>
          </div>
          <p className="tracked text-[0.55rem] text-muted-foreground">
            © 2026 Sarkar Perfume. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
