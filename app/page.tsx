import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Cpu,
  Gem,
  Globe2,
  Layers3,
  MessageCircle,
  MousePointer2,
  PanelTop,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/55SEUNUMEROAQUI?text=Ol%C3%A1,%20vim%20pelo%20Instagram%20e%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20Norte%20One";

const services = [
  {
    id: "sites",
    eyebrow: "Presença digital",
    title: "Sites profissionais que vendem por você.",
    text: "Criamos sites modernos, rápidos e estratégicos para sua empresa transmitir confiança, gerar autoridade e transformar visitantes em clientes.",
    bullets: [
      "Layout premium e responsivo",
      "Copy profissional focada em conversão",
      "Integração com WhatsApp",
      "Otimização para presença digital",
    ],
    cta: "Quero um site profissional",
    icon: Globe2,
    visual: "site",
  },
  {
    id: "nfc",
    eyebrow: "Networking inteligente",
    title: "Cartão NFC inteligente para networking moderno.",
    text: "Substitua o cartão de papel por uma experiência digital elegante. Compartilhe WhatsApp, Instagram, site, localização e portfólio com apenas um toque.",
    bullets: [
      "Link profissional personalizado",
      "Design premium",
      "Ideal para empresários e vendedores",
      "Atualização fácil das informações",
    ],
    cta: "Quero meu cartão NFC",
    icon: MousePointer2,
    visual: "nfc",
  },
  {
    id: "chatbot",
    eyebrow: "Atendimento 24 horas",
    title: "Atendimento automático no WhatsApp.",
    text: "Automatize respostas, capture contatos, organize pedidos e atenda clientes mesmo fora do horário comercial.",
    bullets: [
      "Respostas automáticas inteligentes",
      "Captação de leads",
      "Atendimento 24 horas",
      "Mais agilidade para vender",
    ],
    cta: "Automatizar meu WhatsApp",
    icon: Bot,
    visual: "chat",
  },
  {
    id: "apps",
    eyebrow: "Produto digital",
    title: "Aplicativos sob medida para sua ideia sair do papel.",
    text: "Desenvolvemos aplicativos modernos para negócios locais, marketplaces, agendamentos, serviços, delivery, comunidades e soluções digitais.",
    bullets: [
      "Design profissional",
      "Experiência mobile premium",
      "Área administrativa",
      "Estrutura pensada para crescimento",
    ],
    cta: "Tenho uma ideia de app",
    icon: Smartphone,
    visual: "app",
  },
];

const authority = [
  { title: "Design premium", icon: Gem },
  { title: "Foco em vendas", icon: Zap },
  { title: "Tecnologia moderna", icon: Cpu },
  { title: "Atendimento estratégico", icon: Layers3 },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-softblack">
      <section className="relative px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <BackgroundDetails />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center">
          <header className="mb-11 flex w-full items-center justify-between rounded-full border border-white/80 bg-white/45 px-4 py-3 shadow-glass backdrop-blur-xl sm:px-5">
            <Logo />
            <a
              href={WHATSAPP_URL}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-softblack text-premium transition hover:-translate-y-0.5 hover:bg-graphite sm:w-auto sm:gap-2 sm:px-4"
              aria-label="Solicitar orçamento no WhatsApp"
            >
              <MessageCircle size={17} />
              <span className="hidden text-sm font-medium sm:inline">
                WhatsApp
              </span>
            </a>
          </header>

          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-titanium shadow-glass backdrop-blur-xl">
                <Sparkles size={14} />
                Norte One
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-[1.02] tracking-normal text-softblack sm:text-6xl lg:text-7xl">
                Tecnologia premium para empresas que querem vender mais.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-graphite/75 sm:text-lg lg:mx-0">
                Sites, automações, cartões NFC, chatbots e aplicativos criados
                para posicionar sua empresa acima da concorrência.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <PrimaryButton href={WHATSAPP_URL}>
                  Solicitar orçamento no WhatsApp
                </PrimaryButton>
                <a
                  href="#solucoes"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-graphite/10 bg-white/55 px-6 text-sm font-semibold text-graphite shadow-glass backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Ver soluções
                  <ChevronDown size={16} />
                </a>
              </div>
            </div>

            <HeroMockup />
          </div>
        </div>
      </section>

      <section
        id="solucoes"
        className="mx-auto grid w-full max-w-6xl gap-5 px-5 pb-8 sm:px-8 lg:px-10"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="reveal rounded-[2rem] border border-white/85 bg-white/55 p-6 shadow-premium backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-titanium">
                Norte One
              </p>
              <h2 className="text-3xl font-semibold tracking-normal text-softblack sm:text-4xl">
                Por que escolher a Norte One?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-graphite/75">
                Unimos design premium, tecnologia e estratégia para criar
                presença digital com alto valor percebido.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {authority.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/80 bg-premium/70 p-4 shadow-glass"
                >
                  <item.icon className="mb-5 text-softblack" size={22} />
                  <h3 className="text-sm font-semibold text-graphite">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-4 sm:px-8 lg:px-10">
        <div className="reveal relative overflow-hidden rounded-[2.2rem] bg-softblack px-6 py-10 text-center text-premium shadow-premium sm:px-10 sm:py-14">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <div className="absolute -right-16 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
            Próximo passo
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Sua empresa pode parecer maior, mais profissional e mais confiável
            ainda hoje.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68">
            Clique abaixo e fale com a Norte One para descobrir qual solução
            combina melhor com seu momento.
          </p>
          <a
            href={WHATSAPP_URL}
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-premium px-7 text-sm font-bold text-softblack transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >
            Falar com especialista
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="px-5 pb-8 text-center text-xs font-medium uppercase tracking-[0.18em] text-titanium">
        Norte One · Tecnologia premium para negócios locais
      </footer>
    </main>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="Norte One">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-softblack text-sm font-bold text-premium shadow-glass">
        N1
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-softblack">
          Norte One
        </p>
        <p className="text-[11px] font-medium text-titanium">Digital Studio</p>
      </div>
    </a>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-softblack px-6 text-sm font-semibold text-premium shadow-premium transition hover:-translate-y-0.5 hover:bg-graphite"
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <article className="reveal overflow-hidden rounded-[2rem] border border-white/85 bg-white/58 p-5 shadow-premium backdrop-blur-xl sm:p-7 lg:p-8">
      <div
        className={`grid gap-7 lg:grid-cols-2 lg:items-center ${
          isEven ? "" : "lg:[&>*:first-child]:order-2"
        }`}
      >
        <div>
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-softblack text-premium shadow-glass">
            <Icon size={20} />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-titanium">
            {service.eyebrow}
          </p>
          <h2 className="text-2xl font-semibold leading-tight tracking-normal text-softblack sm:text-4xl">
            {service.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-graphite/75">
            {service.text}
          </p>

          <ul className="mt-6 grid gap-3">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-sm font-medium text-graphite"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-softblack text-premium">
                  <Check size={12} strokeWidth={3} />
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <PrimaryButton href={WHATSAPP_URL}>{service.cta}</PrimaryButton>
          </div>
        </div>

        <Visual type={service.visual} />
      </div>
    </article>
  );
}

function BackgroundDetails() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-8 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/65 blur-3xl" />
      <div className="absolute right-[6%] top-40 h-56 w-56 rounded-full bg-[#d9d9d6]/45 blur-3xl" />
      <div className="absolute left-[4%] top-[28rem] h-52 w-52 rounded-full bg-white/70 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.035)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="float-soft relative mx-auto aspect-[0.88] w-full max-w-[430px] lg:max-w-[500px]">
      <div className="absolute inset-x-7 bottom-7 top-6 rounded-[2rem] border border-white/80 bg-white/45 shadow-premium backdrop-blur-2xl" />
      <div className="absolute left-0 top-12 w-[82%] rounded-[1.7rem] border border-white/80 bg-premium p-3 shadow-premium">
        <div className="rounded-[1.15rem] bg-softblack p-4 text-premium">
          <div className="mb-12 flex items-center justify-between">
            <span className="h-2 w-14 rounded-full bg-white/35" />
            <PanelTop size={18} className="text-white/50" />
          </div>
          <div className="space-y-3">
            <span className="block h-3 w-2/3 rounded-full bg-white/90" />
            <span className="block h-3 w-5/6 rounded-full bg-white/35" />
            <span className="block h-3 w-1/2 rounded-full bg-white/25" />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <span key={item} className="h-16 rounded-2xl bg-white/10" />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[48%] rounded-[2rem] border border-white/80 bg-softblack p-2 shadow-premium">
        <div className="rounded-[1.45rem] bg-premium p-3">
          <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-graphite/25" />
          <div className="space-y-2">
            <span className="block h-20 rounded-3xl bg-softblack" />
            <span className="block h-3 w-4/5 rounded-full bg-graphite/25" />
            <span className="block h-3 w-3/5 rounded-full bg-graphite/15" />
          </div>
          <div className="mt-5 grid gap-2">
            <span className="h-10 rounded-full bg-softblack" />
            <span className="h-10 rounded-full bg-white shadow-glass" />
          </div>
        </div>
      </div>
      <div className="absolute right-8 top-0 rounded-3xl border border-white/80 bg-white/75 px-4 py-3 shadow-glass backdrop-blur-xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-titanium">
          Conversão
        </p>
        <p className="mt-1 text-2xl font-semibold text-softblack">+valor</p>
      </div>
    </div>
  );
}

function Visual({ type }: { type: string }) {
  if (type === "site") {
    return (
      <div className="min-h-[320px] rounded-[1.7rem] bg-mist p-4 shadow-inner">
        <div className="h-full rounded-[1.25rem] border border-white/80 bg-white p-3 shadow-glass">
          <div className="mb-4 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-graphite/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-graphite/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-graphite/10" />
          </div>
          <div className="grid h-[260px] gap-3 rounded-2xl bg-premium p-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-between">
              <div className="space-y-3">
                <span className="block h-4 w-3/5 rounded-full bg-softblack" />
                <span className="block h-3 w-5/6 rounded-full bg-graphite/25" />
                <span className="block h-3 w-2/3 rounded-full bg-graphite/15" />
              </div>
              <span className="h-11 w-36 rounded-full bg-softblack" />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <span className="rounded-3xl bg-softblack" />
              <span className="rounded-3xl border border-graphite/10 bg-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "nfc") {
    return (
      <div className="relative min-h-[320px] overflow-hidden rounded-[1.7rem] bg-mist p-6 shadow-inner">
        <div className="absolute right-4 top-5 h-60 w-36 rotate-6 rounded-[2rem] border border-white/50 bg-softblack p-3 shadow-premium">
          <div className="h-full rounded-[1.4rem] bg-premium/95 p-3">
            <span className="block h-16 rounded-2xl bg-softblack" />
            <span className="mt-5 block h-2.5 w-20 rounded-full bg-graphite/25" />
            <span className="mt-2 block h-2.5 w-14 rounded-full bg-graphite/15" />
          </div>
        </div>
        <div className="absolute bottom-9 left-4 right-8 rotate-[-7deg] rounded-[1.45rem] bg-softblack p-5 text-premium shadow-premium">
          <div className="flex items-start justify-between">
            <LogoMark />
            <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
              NFC
            </span>
          </div>
          <div className="mt-16">
            <p className="text-lg font-semibold">Norte One</p>
            <p className="text-xs text-white/45">Smart Business Card</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="min-h-[320px] rounded-[1.7rem] bg-mist p-5 shadow-inner">
        <div className="mx-auto max-w-[310px] rounded-[2rem] bg-softblack p-2 shadow-premium">
          <div className="rounded-[1.55rem] bg-premium p-4">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-softblack text-premium">
                <MessageCircle size={18} />
              </span>
              <div>
                <span className="block h-3 w-24 rounded-full bg-softblack" />
                <span className="mt-2 block h-2 w-16 rounded-full bg-graphite/20" />
              </div>
            </div>
            <Bubble align="left" text="Olá! Quero um orçamento." />
            <Bubble align="right" text="Perfeito. Qual solução sua empresa busca hoje?" />
            <Bubble align="left" text="Site + automação no WhatsApp." />
            <div className="mt-4 h-10 rounded-full border border-graphite/10 bg-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[1.7rem] bg-mist p-5 shadow-inner">
      <div className="absolute left-8 top-7 h-72 w-36 -rotate-6 rounded-[2rem] bg-softblack p-2 shadow-premium">
        <AppScreen />
      </div>
      <div className="absolute right-8 top-7 h-72 w-36 rotate-6 rounded-[2rem] bg-softblack p-2 shadow-premium">
        <AppScreen light />
      </div>
    </div>
  );
}

function LogoMark() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-premium text-xs font-bold text-softblack">
      N1
    </span>
  );
}

function Bubble({ align, text }: { align: "left" | "right"; text: string }) {
  return (
    <div className={`mt-3 flex ${align === "right" ? "justify-end" : ""}`}>
      <p
        className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs font-medium leading-5 ${
          align === "right"
            ? "bg-softblack text-premium"
            : "bg-white text-graphite shadow-glass"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function AppScreen({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`h-full rounded-[1.55rem] p-3 ${
        light ? "bg-white" : "bg-premium"
      }`}
    >
      <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-graphite/25" />
      <span className="block h-20 rounded-[1.2rem] bg-softblack" />
      <div className="mt-4 grid grid-cols-2 gap-2">
        <span className="h-14 rounded-2xl bg-graphite/10" />
        <span className="h-14 rounded-2xl bg-graphite/10" />
      </div>
      <div className="mt-4 space-y-2">
        <span className="block h-3 rounded-full bg-graphite/20" />
        <span className="block h-3 w-3/4 rounded-full bg-graphite/10" />
      </div>
      <span className="mt-5 block h-10 rounded-full bg-softblack" />
    </div>
  );
}
