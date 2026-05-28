import Image from "next/image";
import Link from "next/link";
import type { ElementType } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  CreditCard,
  Gauge,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5566992204744?text=Ol%C3%A1,%20vim%20pelo%20Instagram%20e%20quero%20um%20site%20profissional%20para%20minha%20empresa";

const benefits = [
  {
    title: "Mais confiança no primeiro contato",
    text: "Seu cliente entende que sua empresa é real, organizada e preparada para atender.",
    icon: BadgeCheck,
  },
  {
    title: "Mais pedidos no WhatsApp",
    text: "A página conduz o visitante para uma ação clara: chamar, pedir orçamento ou agendar.",
    icon: MessageCircle,
  },
  {
    title: "Presença digital com autoridade",
    text: "Um site profissional posiciona sua marca acima de concorrentes que dependem só de rede social.",
    icon: Search,
  },
  {
    title: "Velocidade e experiência mobile",
    text: "Tudo pensado para abrir rápido e vender bem no celular, onde seus clientes realmente estão.",
    icon: Gauge,
  },
];

const included = [
  "Layout premium e responsivo",
  "Copy profissional focada em conversão",
  "Integração com WhatsApp",
  "Seções para serviços, diferenciais e contato",
  "SEO básico para presença digital",
  "1 ano de suporte gratuito",
];

const projects = [
  {
    name: "Site institucional premium",
    segment: "Empresa local, serviços e atendimento",
    result: "Apresentação clara, autoridade e botão direto para orçamento.",
  },
  {
    name: "Landing page de conversão",
    segment: "Campanha, produto ou serviço específico",
    result: "Estrutura pensada para transformar visitantes em oportunidades.",
  },
];

export const metadata = {
  title: "Sites Profissionais | Norte One",
  description:
    "Sites profissionais a partir de R$ 599, com 1 ano de suporte gratuito e pagamento na entrega.",
};

export default function SitesProfissionaisPage() {
  return (
    <main className="min-h-screen bg-softblack text-premium">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[radial-gradient(circle_at_50%_-8%,rgba(212,161,72,0.16),transparent_18rem),linear-gradient(160deg,#F6F5F2_0%,#EFECE6_48%,#D9D9D6_100%)] text-softblack shadow-2xl">
        <section className="relative px-5 pb-7 pt-6">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.04)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
          <div className="relative">
            <Link
              href="/"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-softblack/10 bg-white/55 shadow-glass backdrop-blur-xl"
              aria-label="Voltar"
            >
              <ArrowLeft size={18} />
            </Link>

            <div className="mt-7 overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-3 shadow-premium backdrop-blur-xl">
              <div className="relative min-h-[260px] overflow-hidden rounded-[1.45rem] bg-softblack">
                <Image
                  src="/images/sites-premium.png"
                  alt="Mockup de site profissional em notebook e celular"
                  fill
                  priority
                  sizes="(max-width: 520px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0)_25%,rgba(17,17,17,0.88)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4 text-premium">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E5C073]">
                    Sites Norte One
                  </p>
                  <h1 className="mt-3 text-4xl font-semibold leading-[0.98] tracking-normal">
                    Seu site pode vender antes mesmo do primeiro atendimento.
                  </h1>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-base leading-7 text-graphite/78">
              Um site profissional não é só uma página bonita. É a forma mais
              rápida de fazer sua empresa parecer mais confiável, organizada e
              pronta para receber clientes todos os dias.
            </p>

            <a
              href={WHATSAPP_URL}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-softblack px-6 text-sm font-bold text-premium shadow-premium ring-1 ring-[#C9983B]/35 transition hover:bg-graphite"
            >
              Quero meu site profissional
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="grid gap-3 px-4 pb-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[1.6rem] border border-white/75 bg-white/62 p-5 shadow-glass backdrop-blur-xl"
            >
              <benefit.icon className="mb-4 text-[#A8792F]" size={24} />
              <h2 className="text-xl font-semibold leading-tight tracking-normal">
                {benefit.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-graphite/74">
                {benefit.text}
              </p>
            </div>
          ))}
        </section>

        <section className="px-4 pb-5">
          <div className="rounded-[2rem] bg-[linear-gradient(145deg,#2B2B31,#111111)] p-5 text-premium shadow-premium">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4A148]/80">
              O que está incluso
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal">
              Uma estrutura pronta para gerar valor percebido.
            </h2>
            <div className="mt-5 grid gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-premium text-softblack">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <p className="text-sm font-medium leading-6 text-white/78">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-5">
          <div className="rounded-[2rem] border border-white/75 bg-white/62 p-5 shadow-premium backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-softblack text-[#D4A148]">
                <Target size={20} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-titanium">
                  Exemplos
                </p>
                <h2 className="text-xl font-semibold tracking-normal">
                  Dois modelos para apresentar seus projetos
                </h2>
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="overflow-hidden rounded-[1.5rem] border border-softblack/8 bg-premium shadow-glass"
                >
                  <div className="relative h-40 bg-softblack">
                    <Image
                      src="/images/sites-premium.png"
                      alt=""
                      fill
                      sizes="(max-width: 520px) 100vw, 480px"
                      className={`object-cover ${
                        index === 1 ? "scale-110 object-right" : "object-left"
                      }`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.12),rgba(17,17,17,0.72))]" />
                    <span className="absolute bottom-3 right-3 rounded-full bg-premium px-3 py-1 text-[11px] font-bold text-softblack">
                      Projeto {index + 1}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold leading-tight">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A8792F]">
                      {project.segment}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-graphite/74">
                      {project.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-5">
          <div className="grid gap-3">
            <OfferItem
              icon={CreditCard}
              title="A partir de R$ 599"
              text="Um investimento acessível para sua empresa ganhar presença profissional."
            />
            <OfferItem
              icon={ShieldCheck}
              title="1 ano de suporte grátis"
              text="Você não fica sozinho depois da entrega. A Norte One acompanha ajustes e orientação."
            />
            <OfferItem
              icon={Clock3}
              title="Pagamento na entrega"
              text="Você só paga quando o site estiver pronto para ser entregue."
            />
          </div>
        </section>

        <section className="px-4 pb-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-softblack p-6 text-premium shadow-premium">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#D4A148]/25" />
            <Sparkles className="text-[#D4A148]" size={24} />
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal">
              Se sua empresa ainda não tem um site, ela pode estar perdendo
              clientes em silêncio.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/68">
              Chame agora e receba uma recomendação direta do melhor formato de
              site para seu negócio.
            </p>
            <a
              href={WHATSAPP_URL}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-premium px-6 text-sm font-bold text-softblack ring-1 ring-[#D4A148]/40 transition hover:bg-white"
            >
              Fazer meu orçamento
              <MessageCircle size={17} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function OfferItem({
  icon: Icon,
  title,
  text,
}: {
  icon: ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.6rem] border border-white/75 bg-white/62 p-5 shadow-glass backdrop-blur-xl">
      <Icon className="mb-4 text-[#A8792F]" size={24} />
      <h2 className="text-2xl font-semibold leading-tight tracking-normal">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-graphite/74">{text}</p>
    </div>
  );
}
