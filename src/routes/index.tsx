import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AirCool — Klimatizace s montáží po celé ČR" },
      { name: "description", content: "Prodej a montáž klimatizací, tepelných čerpadel a čističek vzduchu. Certifikovaná firma od roku 2004." },
      { property: "og:title", content: "AirCool — Klimatizace s montáží" },
      { property: "og:description", content: "Prodej a montáž klimatizací. Certifikovaná firma od roku 2004." },
    ],
  }),
  component: Index,
});

const categories = [
  { name: "AKCE", icon: "🔥", hot: true },
  { name: "Klimatizace s montáží", icon: "❄️" },
  { name: "Single Split", icon: "🌬️" },
  { name: "Multi Split", icon: "💨" },
  { name: "Tepelná čerpadla", icon: "🌡️" },
  { name: "Klimatizace na topení", icon: "🔆" },
  { name: "Klimatizace s dotací", icon: "💰" },
  { name: "Příslušenství", icon: "🔧" },
  { name: "Montáž", icon: "🛠️" },
  { name: "Čističky vzduchu", icon: "🌿" },
  { name: "Mobilní klimatizace", icon: "📦" },
  { name: "Ozónové generátory", icon: "⚡" },
];

const brands = ["Vivax", "Samsung", "Beko", "TCL", "Mitsubishi", "LG", "Daikin", "Toshiba", "Panasonic"];

type Product = {
  brand: string;
  name: string;
  power: string;
  price: number;
  icon: string;
  badges: ("akce" | "montaz" | "darek" | "novinka")[];
};

const deals: Product[] = [
  { brand: "Vivax", name: "R+ White 1+1", power: "3,5 kW", price: 26432, icon: "❄️", badges: ["akce", "montaz"] },
  { brand: "Beko", name: "Evolutio Pro 1+1", power: "3,5 kW", price: 26880, icon: "🌀", badges: ["montaz"] },
  { brand: "TCL", name: "Elite F1", power: "2,6 kW", price: 23296, icon: "💨", badges: ["akce", "montaz"] },
  { brand: "Samsung", name: "AR35 1+1", power: "3,5 kW", price: 26768, icon: "🌬️", badges: ["montaz", "darek"] },
  { brand: "Mitsubishi", name: "HI ZS 1+1", power: "3,5 kW", price: 36848, icon: "❄️", badges: ["montaz"] },
  { brand: "TCL", name: "FreshIN C7 1+1", power: "3,6 kW", price: 30352, icon: "🌿", badges: ["akce", "montaz"] },
  { brand: "Toshiba", name: "Daiseikai 10 Wood 1+1", power: "2,5 kW", price: 59012, icon: "🌲", badges: ["montaz", "darek"] },
  { brand: "Aux", name: "Freedom 1+1", power: "3,5 kW", price: 22500, icon: "💨", badges: ["akce", "montaz"] },
  { brand: "Samsung", name: "AR35 1+1 bez montáže", power: "3,5 kW", price: 19844, icon: "🌬️", badges: ["akce"] },
];

const novelties: Product[] = [
  { brand: "TCL", name: "GentleCool P6", power: "novinka", price: 28900, icon: "✨", badges: ["novinka"] },
  { brand: "Beko", name: "Evolutio Pro", power: "novinka", price: 26880, icon: "🌀", badges: ["novinka"] },
  { brand: "LG", name: "Artcool Mirror", power: "Design", price: 42500, icon: "🪞", badges: ["novinka"] },
  { brand: "Toshiba", name: "Haori", power: "Premium", price: 54900, icon: "🎌", badges: ["novinka"] },
  { brand: "LG", name: "Standard", power: "2,5 kW", price: 21900, icon: "❄️", badges: [] },
  { brand: "Služba", name: "Montáž 1+1", power: "instalace", price: 8400, icon: "🛠️", badges: [] },
  { brand: "Služba", name: "Montáž 1+2", power: "instalace", price: 12320, icon: "🔧", badges: [] },
  { brand: "Služba", name: "Servis klimatizace", power: "údržba", price: 2420, icon: "⚙️", badges: [] },
];

const reviews = [
  { name: "Petr Novák", rating: 5, text: "Skvělý přístup, rychlá montáž a profesionální servis. Klimatizace funguje bezvadně." },
  { name: "Jana Dvořáková", rating: 5, text: "Doporučuji. Cena byla férová a technici opravdu věděli, co dělají." },
  { name: "Martin Svoboda", rating: 5, text: "Tepelné čerpadlo nainstalováno přesně v termínu. Vše jak na obrázku." },
];

function formatPrice(p: number) {
  return p.toLocaleString("cs-CZ") + " Kč";
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-primary-deep text-primary-foreground text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="hidden sm:flex items-center gap-4 opacity-90">
            <span>✓ Certifikovaná firma od 2004</span>
            <span>✓ Montáž po celé ČR</span>
            <span>✓ Záruka kvality</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:775123900" className="hover:text-accent-glow transition-colors">📞 775 123 900</a>
            <a href="mailto:info@air-cool.cz" className="hidden md:inline hover:text-accent-glow transition-colors">✉ info@air-cool.cz</a>
          </div>
        </div>
      </div>

      {/* Sticky header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl shadow-[var(--shadow-soft)] border-b border-border"
            : "bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground text-xl shadow-[var(--shadow-glow)]">
              ❄
            </div>
            <div className="leading-tight">
              <div className="text-xl font-bold tracking-tight text-primary-deep">AirCool</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">s.r.o.</div>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Jak nakupovat</a>
            <a href="#" className="hover:text-primary transition-colors">Splátky</a>
            <a href="#" className="hover:text-primary transition-colors">Montáž</a>
            <a href="#" className="hover:text-primary transition-colors">Kontakty</a>
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-md ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Hledat klimatizaci, značku…"
                className="w-full rounded-full border border-border bg-secondary/60 py-2.5 pl-11 pr-4 text-sm outline-none transition-all focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
            </div>
          </div>

          {/* Cart */}
          <button className="relative grid h-11 w-11 place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
            🛒
            <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground text-[10px] font-bold">0</span>
          </button>
        </div>

        {/* Category bar */}
        <div className="border-t border-border bg-background/80">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((c) => (
                <a
                  key={c.name}
                  href="#"
                  className={`shrink-0 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all hover:bg-primary hover:text-primary-foreground ${
                    c.hot
                      ? "bg-[image:var(--gradient-accent)] text-accent-foreground shadow-[var(--shadow-soft)]"
                      : "text-foreground/80"
                  }`}
                >
                  <span>{c.icon}</span>
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 35%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Letní akce 2026 — sleva až 25 %
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Klimatizace<br />s montáží<br />
              <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">pod jednou střechou.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/85">
              Prodej, návrh, instalace a servis. Certifikovaná firma od roku 2004 — montáž po celé České republice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 font-semibold text-accent-foreground shadow-[var(--shadow-hover)] transition-transform hover:scale-[1.03]">
                Vybrat klimatizaci →
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                Nezávazná konzultace
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-white/80">
              <div><div className="text-2xl font-bold text-white">20+</div>let zkušeností</div>
              <div><div className="text-2xl font-bold text-white">15 000+</div>spokojených zákazníků</div>
              <div><div className="text-2xl font-bold text-white">9</div>top značek</div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-accent/30 blur-3xl" />
                <div className="relative grid h-80 w-80 place-items-center rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <div className="text-[14rem] leading-none">❄️</div>
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-2xl">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">od</div>
                  <div className="text-2xl font-bold text-primary-deep">19 844 Kč</div>
                </div>
                <div className="absolute -top-6 -right-6 rounded-2xl bg-[image:var(--gradient-accent)] px-5 py-4 text-accent-foreground shadow-2xl">
                  <div className="text-xs uppercase tracking-wider opacity-90">úspora</div>
                  <div className="text-2xl font-bold">−25 %</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals */}
      <ProductSection
        eyebrow="Bestsellery"
        title="Klimatizace výhodně"
        subtitle="Top modely za zvýhodněné ceny včetně montáže."
        products={deals}
      />

      {/* Novelty */}
      <section className="bg-[image:var(--gradient-soft)]">
        <ProductSection
          eyebrow="Právě dorazilo"
          title="Novinky"
          subtitle="Nejnovější modely a doplňkové služby."
          products={novelties}
        />
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: "🛠️", title: "Montáž klimatizace", text: "Profesionální instalace s certifikací. Záruka i na práci našich techniků." },
            { icon: "💬", title: "Odborné konzultace", text: "Pomůžeme vybrat ideální řešení podle dispozic a vašich potřeb." },
            { icon: "⚙️", title: "Servis klimatizace", text: "Pravidelná údržba, čištění a rychlé řešení poruch." },
          ].map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-[image:var(--gradient-hero)] opacity-10 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[image:var(--gradient-hero)] text-3xl shadow-[var(--shadow-card)]">
                  {b.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Více informací →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="relative overflow-hidden bg-primary-deep text-primary-foreground">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white, transparent 50%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-glow">O společnosti AirCool s.r.o.</span>
            <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Stačí se pro klimatizaci rozhodnout.<br />
              <span className="text-accent-glow">Ostatní zařídíme za Vás.</span>
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Jsme certifikovaná firma působící na trhu od roku 2004. Specializujeme se na prodej, návrh, montáž a servis klimatizačních zařízení, vzduchotechniky a tepelných čerpadel. Pracujeme po celé České republice.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {["Klimatizace", "Vzduchotechnika", "Tepelná čerpadla", "Servis"].map((s) => (
                <div key={s} className="rounded-xl bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur">
                  ✓ {s}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="text-5xl font-bold text-accent-glow">2004</div>
              <div className="mt-1 text-sm text-white/70">založení firmy</div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="text-5xl font-bold text-accent-glow">ČR</div>
              <div className="mt-1 text-sm text-white/70">montáž po celé zemi</div>
            </div>
            <div className="rounded-3xl bg-[image:var(--gradient-accent)] p-6 col-span-2">
              <div className="text-sm uppercase tracking-widest opacity-90">Volejte zdarma</div>
              <a href="tel:775123900" className="mt-1 block text-3xl font-bold">775 123 900</a>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Prodáváme značky
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {brands.map((b) => (
              <span key={b} className="text-xl font-bold text-foreground/40 transition-colors hover:text-primary">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Reference</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Co o nás říkají zákazníci</h2>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-semibold text-primary hover:underline">Všechny recenze →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-card)] hover:-translate-y-1">
              <div className="flex gap-1 text-accent text-lg">{"★".repeat(r.rating)}</div>
              <p className="mt-4 text-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Ověřený zákazník</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-xl">❄</div>
                <div>
                  <div className="text-xl font-bold">AirCool</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">s.r.o.</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">
                Klimatizace, tepelná čerpadla a vzduchotechnika s profesionální montáží po celé ČR.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-accent-glow">Nakupování</div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li><a href="#" className="hover:text-white">Jak nakupovat</a></li>
                <li><a href="#" className="hover:text-white">Splátky</a></li>
                <li><a href="#" className="hover:text-white">Montáž</a></li>
                <li><a href="#" className="hover:text-white">Reklamace</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-accent-glow">Kategorie</div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li><a href="#" className="hover:text-white">Single Split</a></li>
                <li><a href="#" className="hover:text-white">Multi Split</a></li>
                <li><a href="#" className="hover:text-white">Tepelná čerpadla</a></li>
                <li><a href="#" className="hover:text-white">Čističky vzduchu</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-accent-glow">Kontakty</div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>✉ <a href="mailto:info@air-cool.cz" className="hover:text-white">info@air-cool.cz</a></li>
                <li>📞 <a href="tel:775123900" className="hover:text-white">775 123 900</a></li>
                <li>📞 <a href="tel:725517189" className="hover:text-white">725 517 189</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
            <div>© AirCool 2026 — Všechna práva vyhrazena.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Obchodní podmínky</a>
              <a href="#" className="hover:text-white">Ochrana osobních údajů</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BadgeChip({ kind }: { kind: Product["badges"][number] }) {
  const map = {
    akce: { label: "AKCE", cls: "bg-[image:var(--gradient-accent)] text-accent-foreground" },
    montaz: { label: "VČETNĚ MONTÁŽE", cls: "bg-primary text-primary-foreground" },
    darek: { label: "DÁREK ZDARMA", cls: "bg-success text-white" },
    novinka: { label: "NOVINKA", cls: "bg-primary-deep text-primary-foreground" },
  } as const;
  const b = map[kind];
  return (
    <span className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${b.cls}`}>
      {b.label}
    </span>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[var(--shadow-hover)]">
      {p.badges.length > 0 && (
        <div className="absolute top-4 left-4 z-10 flex flex-col items-start gap-1.5">
          {p.badges.map((b) => <BadgeChip key={b} kind={b} />)}
        </div>
      )}
      <div className="relative h-56 overflow-hidden bg-[image:var(--gradient-soft)]">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundImage: "radial-gradient(circle at center, oklch(0.62 0.2 245 / 0.15), transparent 70%)" }} />
        <div className="absolute inset-0 grid place-items-center text-7xl transition-transform duration-500 group-hover:scale-110">
          {p.icon}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">{p.brand}</div>
        <h3 className="mt-1 font-bold leading-snug">{p.name}</h3>
        <div className="mt-1 text-sm text-muted-foreground">{p.power}</div>
        <div className="mt-auto pt-4">
          <div className="flex items-baseline gap-2">
            <div className="text-2xl font-bold text-primary-deep">{formatPrice(p.price)}</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]">
              Do košíku
            </button>
            <button className="rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductSection({
  eyebrow,
  title,
  subtitle,
  products,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  products: Product[];
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        </div>
        <a href="#" className="text-sm font-semibold text-primary hover:underline">Zobrazit vše →</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p, i) => <ProductCard key={i} p={p} />)}
      </div>
    </div>
  );
}
