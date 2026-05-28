import Image from "next/image";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe2,
  Instagram,
  Linkedin,
  MessageCircle,
  Play,
  Smartphone,
  Sparkles,
  Wifi,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/55SEUNUMEROAQUI?text=Ol%C3%A1,%20vim%20pelo%20Instagram%20e%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20Norte%20One";

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Play, href: "#" },
  { label: "WhatsApp", icon: MessageCircle, href: WHATSAPP_URL },
];

const cards = [
  {
    title: "Sites profissionais que fazem sua empresa parecer maior.",
    kicker: "Presença digital premium",
    text: "Tenha uma vitrine moderna, rápida e pensada para transformar visitantes em clientes.",
    cta: "Quero um site profissional",
    href: WHATSAPP_URL,
    image: "/images/sites-premium.png",
    icon: Globe2,
    bullets: ["Layout responsivo", "Copy de venda", "WhatsApp integrado"],
  },
  {
    title: "Cartão NFC inteligente para conexões de alto valor.",
    kicker: "Networking moderno",
    text: "Compartilhe WhatsApp, Instagram, site, localização e portfólio com apenas um toque.",
    cta: "Quero meu cartão NFC",
    href: WHATSAPP_URL,
    image: "/images/nfc-premium.png",
    icon: Wifi,
    bullets: ["Link personalizado", "Design premium", "Dados atualizáveis"],
  },
  {
    title: "Atendimento automático no WhatsApp, mesmo fora do horário.",
    kicker: "Automação comercial",
    text: "Capture contatos, responda dúvidas e organize oportunidades sem perder velocidade.",
    cta: "Automatizar meu WhatsApp",
    href: WHATSAPP_URL,
    image: "/images/chatbot-premium.png",
    icon: Bot,
    bullets: ["Leads 24 horas", "Respostas rápidas", "Mais vendas"],
  },
  {
    title: "Aplicativos sob medida para tirar sua ideia do papel.",
    kicker: "Produto digital",
    text: "Apps para negócios locais, agendamentos, delivery, comunidades e operações digitais.",
    cta: "Tenho uma ideia de app",
    href: WHATSAPP_URL,
    image: "/images/apps-premium.png",
    icon: Smartphone,
    bullets: ["UX premium", "Área administrativa", "Pronto para crescer"],
  },
];

const proofCards = [
  "Design premium",
  "Foco em vendas",
  "Tecnologia moderna",
  "Atendimento estratégico",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-softblack text-premium">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[radial-gradient(circle_at_50%_-8%,rgba(212,161,72,0.18),transparent_18rem),radial-gradient(circle_at_50%_-8%,rgba(255,255,255,0.24),transparent_25rem),linear-gradient(160deg,#F6F5F2_0%,#EFECE6_46%,#D9D9D6_100%)] shadow-2xl">
        <section className="relative px-5 pb-7 pt-9 text-center text-softblack">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.045)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
          <div className="absolute left-1/2 top-8 h-44 w-44 -translate-x-1/2 rounded-full border border-[#C9983B]/35" />
          <div className="relative">
            <a
              href="#"
              className="mx-auto block h-40 w-40 overflow-hidden rounded-full border border-white/90 bg-premium shadow-[0_22px_70px_rgba(17,17,17,0.2)]"
              aria-label="Norte One"
            >
              <Image
                src="/images/norte-one-logo.png"
                alt="Norte One"
                width={160}
                height={160}
                priority
                className="h-full w-full object-cover"
              />
            </a>

            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8792F]">
              Tecnologia premium | Automações | IA
            </p>
            <h1 className="mx-auto mt-5 max-w-[22rem] text-balance text-[2rem] font-semibold leading-[1.08] tracking-normal sm:text-4xl">
              Tecnologia premium para sua empresa vender mais e parecer maior.
            </h1>
            <p className="mx-auto mt-4 max-w-[23rem] text-pretty text-sm leading-6 text-graphite/78">
              Sites, cartões NFC, chatbots e aplicativos criados para posicionar
              sua marca acima da concorrência.
            </p>

            <div className="mt-7 flex items-center justify-center gap-5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-softblack/10 bg-white/45 text-softblack shadow-glass backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <item.icon size={21} strokeWidth={1.8} />
                </a>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-softblack px-6 text-sm font-bold text-premium shadow-premium ring-1 ring-[#C9983B]/30 transition hover:-translate-y-0.5 hover:bg-graphite"
            >
              Solicitar orçamento no WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="grid gap-4 px-4 pb-5">
          {cards.map((card, index) => (
            <ServiceLinkCard key={card.title} card={card} index={index} />
          ))}
        </section>

        <section className="px-4 pb-5">
          <div className="reveal rounded-[2rem] border border-white/70 bg-white/62 p-5 text-softblack shadow-premium backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-softblack text-[#D4A148]">
                <Sparkles size={20} />
              </span>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-titanium">
                  Autoridade
                </p>
                <h2 className="text-xl font-semibold tracking-normal">
                  Por que escolher a Norte One?
                </h2>
              </div>
            </div>
            <p className="text-left text-sm leading-6 text-graphite/75">
              Unimos design premium, tecnologia e estratégia para criar presença
              digital com alto valor percebido.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {proofCards.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-softblack/5 bg-premium/80 p-4 text-left shadow-glass"
                >
                  <CheckCircle2 className="mb-4 text-[#A8792F]" size={20} />
                  <p className="text-sm font-semibold text-graphite">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-8">
          <div className="reveal relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.22),transparent_15rem),linear-gradient(145deg,#2B2B31,#111111)] p-6 text-premium shadow-premium">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#D4A148]/25" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4A148]/80">
              Fale com especialista
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal">
              Sua empresa pode parecer mais confiável ainda hoje.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/68">
              Clique abaixo e descubra qual solução combina melhor com seu
              momento.
            </p>
            <a
              href={WHATSAPP_URL}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-premium px-6 text-sm font-bold text-softblack ring-1 ring-[#D4A148]/40 transition hover:bg-white"
            >
              Falar com especialista
              <MessageCircle size={17} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function ServiceLinkCard({
  card,
  index,
}: {
  card: (typeof cards)[number];
  index: number;
}) {
  const Icon = card.icon;

  return (
    <a
      href={card.href}
      className="reveal group relative block min-h-[360px] overflow-hidden rounded-[2rem] bg-softblack shadow-premium"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Image
        src={card.image}
        alt=""
        fill
        sizes="(max-width: 520px) 100vw, 480px"
        className="object-cover transition duration-700 group-hover:scale-105"
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02)_0%,rgba(17,17,17,0.22)_30%,rgba(17,17,17,0.92)_100%)] sm:bg-[linear-gradient(90deg,rgba(17,17,17,0.08)_0%,rgba(17,17,17,0.18)_40%,rgba(17,17,17,0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="ml-auto w-full rounded-[1.5rem] border border-white/18 bg-softblack/68 p-4 text-left text-premium shadow-glass backdrop-blur-xl sm:w-[78%]">
          <div className="mb-3 flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-premium text-[#A8792F] ring-1 ring-[#D4A148]/35">
              <Icon size={18} />
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E5C073]/80">
              {card.kicker}
            </p>
          </div>
          <h2 className="text-[1.38rem] font-semibold leading-[1.05] tracking-normal">
            {card.title}
          </h2>
          <p className="mt-3 text-xs leading-5 text-white/68">{card.text}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {card.bullets.map((bullet) => (
              <span
                key={bullet}
                className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/72"
              >
                {bullet}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-premium px-4 text-xs font-bold text-softblack ring-1 ring-[#D4A148]/40">
            {card.cta}
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}
