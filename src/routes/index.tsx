import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Menu, X, Instagram, Youtube, Phone, Mail, MapPin, Play, ArrowRight, Music2 } from "lucide-react";

const logoImg = "/classy-aureon-logo.jpg";
const heroImg = "/photo-pianist.png";
const galleryPiano = "/photo-piano.png";
const galleryViolin = "/photo-bass.png";
const galleryCello = "/photo-singer.png";
const galleryQuartet = "/photo-duo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "5522999972625";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de saber sobre a Classy Aureon para o meu evento.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Repertório", href: "#repertorio" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Repertoire />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 h-20 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src={logoImg} alt="Classy Aureon" className="h-16 w-16 rounded-full object-cover ring-1 ring-gold/40 shrink-0" />
          <span className="hidden sm:block font-serif text-xl tracking-wide text-gold-gradient truncate">Classy Aureon</span>
        </a>
        <nav className="hidden lg:flex items-center justify-center gap-10">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground hover:text-gold transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 justify-self-end">
          <a href="#contato" className="hidden lg:inline-flex btn-ghost-gold !py-2.5 !px-5 !text-[0.68rem]">Reservar Data</a>
          <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-gold p-2" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.28em] text-muted-foreground hover:text-gold">
                {n.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)} className="btn-ghost-gold self-start">Reservar Data</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Banda Classy Aureon em performance de casamento" className="h-full w-full object-cover animate-slow-zoom" width={1920} height={1200} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="eyebrow mb-8">Música sofisticada ao vivo</div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[1.02] tracking-tight">
            <span className="block text-foreground">Experiência musical</span>
            <span className="block italic text-gold-gradient">de alto padrão</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed font-light">
            Oferecemos uma arquitetura sonora exclusiva e repertório personalizado para cada tipo de evento, alinhado ao único piano de cauda dourado e portátil do Brasil.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#contato" className="btn-gold">Solicitar Proposta <ArrowRight size={14} /></a>
            <a href="#portfolio" className="btn-ghost-gold">Ver Portfólio</a>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 lg:left-12 right-6 lg:right-12 flex items-end justify-between gap-6 pointer-events-none">
          <div className="hidden md:flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground animate-shimmer">
            <span className="h-px w-8 bg-gold" />
            Role para descobrir
          </div>
          <div className="hidden md:grid grid-cols-3 gap-10 text-right">
            {[
              { n: "12+", l: "Anos de palco" },
              { n: "400+", l: "Cerimônias" },
              { n: "5★", l: "Avaliação" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-gold-gradient">{s.n}</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={galleryViolin} alt="Violinista da Classy Aureon" loading="lazy" width={1200} height={1500} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-6 lg:-right-12 bg-card border border-gold/30 p-8 max-w-[240px] shadow-soft">
            <div className="text-sm text-foreground/90 leading-relaxed">
              Intérpretes com mais de <span className="text-gold-gradient font-medium">10 anos</span> de <span className="text-gold-gradient font-medium">experiência internacional</span>.
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <div className="eyebrow mb-6">Sobre a PRODUTORA</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Uma produtora musical <em className="italic text-gold-gradient">esculpida</em> para o seu evento.
          </h2>
          <div className="mt-10 space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              Formada por músicos com passagem por orquestras sinfônicas e conservatórios, a Classy Aureon nasceu para traduzir emoção em som ao vivo — com o rigor da música erudita e a sensibilidade dos grandes momentos.
            </p>
            <p>
              Nosso Ensemble combina <span className="text-gold">Piano de Cauda</span> à instrumentos eruditos e populares, com repertório que atravessa Bach, Beethoven, trilhas de cinema e releituras de artistas do pop contemporâneo.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6">
            {[
              "Cerimônia religiosa",
              "Recepção & coquetel",
              "Trilha de entrada",
              "Bodas & jantares privados",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 border-t border-border/60 pt-4">
                <Music2 size={16} className="text-gold mt-1 shrink-0" />
                <span className="text-sm text-foreground/90">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Repertoire() {
  const items = [
    { t: "Clássicos Eternos", d: "Pachelbel, Bach, Debussy, Beethoven e as peças que definem cerimônias inesquecíveis." },
    { t: "Trilhas de Cinema", d: "John Willians (Star Wars, Harry Potter, Indiana Jones), Hans Zimmer (Interstellar, Cornfield Chase), Yiruma (River Flows in You, Kiss The Rain)." },
    { t: "Pop Reimaginado", d: "Coldplay, Adele, Beatles, Ed Sheeran em arranjos exclusivos." },
  ];
  return (
    <section id="repertorio" className="py-32 lg:py-40 border-y border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <div className="eyebrow mb-6">Repertório</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Do tradicional ao moderno, <em className="italic text-gold-gradient">sob medida</em>.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border/60">
          {items.map((it, i) => (
            <div key={it.t} className="bg-background p-10 lg:p-12 group transition-colors hover:bg-card">
              <div className="font-serif text-6xl text-gold/30 group-hover:text-gold/60 transition-colors">0{i + 1}</div>
              <h3 className="mt-6 font-serif text-2xl">{it.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed font-light">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const photos = [
    { src: galleryQuartet, alt: "Quarteto em salão de baile", span: "lg:col-span-8 lg:row-span-2 aspect-[16/11]" },
    { src: galleryPiano, alt: "Pianista em performance", span: "lg:col-span-4 aspect-[4/5]" },
    { src: galleryViolin, alt: "Violinista em cerimônia", span: "lg:col-span-4 aspect-[4/3]" },
    { src: galleryCello, alt: "Violoncelista ao entardecer", span: "lg:col-span-6 aspect-[4/3]" },
    { src: galleryQuartet, alt: "Ensemble ao vivo", span: "lg:col-span-6 aspect-[4/3]" },
  ];

  return (
    <section id="portfolio" className="py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">Portfólio</div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Cada apresentação, <em className="italic text-gold-gradient">uma composição única</em>.
            </h2>
          </div>
          <a href="#contato" className="text-[0.72rem] uppercase tracking-[0.28em] text-gold hover:text-gold-soft flex items-center gap-2">
            Solicitar performance <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
          {photos.map((p, i) => (
            <figure key={i} className={`relative overflow-hidden group ${p.span}`}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">Classy Aureon</span>
                <div className="font-serif text-lg text-foreground mt-1">{p.alt}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {[{ img: galleryQuartet, t: "Live at Copacabana Palace" }, { img: galleryPiano, t: "Cerimônia · Fasano" }].map((v, i) => (
            <div key={i} className="relative aspect-video overflow-hidden bg-card border border-border group cursor-pointer">
              <img src={v.img} alt="Performance em vídeo" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="h-20 w-20 rounded-full border border-gold/60 flex items-center justify-center backdrop-blur-sm bg-background/30 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                  <Play size={26} className="text-gold group-hover:text-primary-foreground translate-x-0.5 transition-colors" />
                </div>
                <div className="text-center">
                  <div className="font-serif text-xl">{v.t}</div>
                  <div className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground mt-1">Vídeo · 2:41</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contato" className="relative py-32 lg:py-44 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-6">Contato</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Vamos compor <em className="italic text-gold-gradient">o seu evento</em>.
          </h2>
          <p className="mt-8 text-muted-foreground text-lg font-light leading-relaxed">
            Conte-nos sobre a sua data. Retornamos em até 24 horas com uma proposta personalizada.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { icon: Phone, label: "WhatsApp", value: "+55 (22) 99997-2625", href: WHATSAPP_URL },
              { icon: Mail, label: "E-mail", value: "contato@classyaureon.com", href: "mailto:contato@classyaureon.com" },
              { icon: MapPin, label: "Atendemos", value: "São Paulo · Rio · destinos nacionais", href: undefined as string | undefined },
            ].map((c) => {
              const Inner = (
                <>
                  <div className="h-11 w-11 shrink-0 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                    <c.icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{c.label}</div>
                    <div className="font-serif text-lg text-foreground truncate">{c.value}</div>
                  </div>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="group flex items-center gap-4">{Inner}</a>
              ) : (
                <div key={c.label} className="group flex items-center gap-4">{Inner}</div>
              );
            })}
          </div>

          <div className="mt-12 flex items-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="h-11 w-11 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
              <Phone size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-11 w-11 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="h-11 w-11 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 bg-card/60 backdrop-blur border border-border p-8 lg:p-12 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Nome" name="nome" required />
            <Field label="E-mail" name="email" type="email" required />
            <Field label="Telefone" name="telefone" type="tel" />
            <Field label="Data do Evento" name="data" type="date" />
          </div>
          <div>
            <label className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">Tipo de evento</label>
            <select name="tipo" className="mt-2 w-full bg-transparent border-b border-border py-3 text-foreground focus:border-gold focus:outline-none transition-colors">
              <option className="bg-card">Casamento</option>
              <option className="bg-card">Bodas</option>
              <option className="bg-card">Jantar privado</option>
              <option className="bg-card">Evento corporativo</option>
              <option className="bg-card">Outro</option>
            </select>
          </div>
          <div>
            <label className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">Mensagem</label>
            <textarea name="mensagem" rows={4} maxLength={1000} className="mt-2 w-full bg-transparent border-b border-border py-3 text-foreground focus:border-gold focus:outline-none resize-none transition-colors" placeholder="Conte-nos sobre o seu evento..." />
          </div>
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">Responderemos em até 24h.</p>
            <button type="submit" className="btn-gold">
              {sent ? "Mensagem enviada" : "Enviar Solicitação"} <ArrowRight size={14} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{label}{required && <span className="text-gold"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-2 w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors [color-scheme:dark]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="divider-gold mb-12" />
        <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Classy Aureon" className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/40" />
            <span className="font-serif text-lg text-gold-gradient">Classy Aureon</span>
          </div>
          <p className="text-sm text-muted-foreground md:text-center italic font-serif">
            "Onde a música clássica encontra os momentos que ficam para sempre."
          </p>
          <p className="text-xs text-muted-foreground md:text-right uppercase tracking-[0.28em]">
            © {new Date().getFullYear()} Classy Aureon
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 blur-xl group-hover:bg-gold/60 transition-colors" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-gold-soft to-gold text-primary-foreground shadow-luxe hover:scale-110 transition-transform duration-500">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/></svg>
      </span>
    </a>
  );
}
