import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";
import bottle from "@/assets/velvet-bottle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VELVET by Sarkar | Vanilla · Amber · Tonka Eau de Parfum" },
      {
        name: "description",
        content:
          "VELVET — a warm vanilla, amber and tonka eau de parfum from the Sarkar collection. 100ml, unisex, ₹1,799 incl. of all taxes.",
      },
      { property: "og:title", content: "VELVET by Sarkar" },
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
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Announcement + nav */}
      <div className="bg-primary py-2.5 text-center">
        <p className="text-[0.6rem] font-medium tracking-[0.18em] text-primary-foreground">
          TWO 5ML SAMPLES FREE WITH EVERY ORDER
        </p>
      </div>
      <header className="sticky top-0 z-10 border-b border-border bg-background">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="text-[0.6rem] tracking-[0.2em] text-muted-foreground">UNISEX</span>
          <span className="font-display text-xl font-extrabold tracking-[0.35em]">SARKAR</span>
          <a
            href="#buy"
            className="bg-primary px-4 py-2 text-[0.65rem] font-medium tracking-[0.1em] text-primary-foreground"
          >
            Buy Now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-cream px-5 py-24 text-center sm:py-32">
        <h1 className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-8xl">
          VELVET
        </h1>
        <p className="mt-6 text-[0.65rem] font-medium tracking-[0.35em] text-muted-foreground sm:text-xs">
          WARM. QUIET. UNSHAKEN.
        </p>
        <Button variant="goldSolid" size="wide" className="mt-10 text-[0.65rem]" asChild>
          <a href="#product">Explore Parfum</a>
        </Button>
      </section>

      {/* Notes */}
      <section className="border-y border-border px-5 py-16 text-center sm:py-20">
        <div className="flex flex-wrap justify-center gap-2">
          {["VANILLA", "AMBER", "TONKA"].map((n) => (
            <span
              key={n}
              className="bg-secondary px-4 py-2 text-[0.65rem] font-medium tracking-[0.2em]"
            >
              {n}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-md font-display text-xl font-semibold leading-snug sm:text-2xl">
          Power doesn't shout. It settles into a room and stays.
        </p>
      </section>

      {/* Product */}
      <section id="product" className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-md">
          <img
            src={bottle}
            alt="VELVET by Sarkar — chess-piece perfume bottle with pale honey yellow parfum, 100ml"
            width={1024}
            height={1280}
            className="mx-auto w-full max-w-sm"
          />
          <p className="mt-6 text-center text-[0.65rem] font-medium tracking-[0.25em] text-muted-foreground">
            100ML · EAU DE PARFUM
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream px-5 py-20 text-center sm:py-24">
        <h2 className="text-[0.6rem] font-medium tracking-[0.3em] text-muted-foreground">
          THE SARKAR COLLECTION
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
          Velvet stands beside Throne, Regal, Noble and Orion as the calmest presence on the shelf.
          Vanilla and amber worn close to the skin, tonka holding the last word. Composure, bottled.
        </p>
      </section>

      {/* Pricing */}
      <section id="buy" className="px-5 py-20 text-center sm:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">
          VELVET <span className="text-lg font-semibold">(100ML)</span>
        </h2>
        <p className="mt-6 font-display text-4xl font-bold">₹1,799</p>
        <Button variant="goldSolid" size="wide" className="mt-8 text-[0.65rem]">
          Add to Cart
        </Button>
        <p className="mt-4 text-[0.7rem] text-muted-foreground">Incl. of all taxes</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 text-center">
          <span className="font-display text-xl font-extrabold tracking-[0.35em]">SARKAR</span>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Shop All", "Know Sarkar", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[0.7rem] tracking-[0.12em] text-muted-foreground hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-foreground">
              <Instagram className="size-4" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-foreground">
              <Facebook className="size-4" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground">
              <Twitter className="size-4" />
            </a>
          </div>
          <p className="text-[0.65rem] tracking-[0.1em] text-muted-foreground">
            © 2026 Sarkar Perfume. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
