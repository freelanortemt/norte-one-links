import Image from "next/image";
import Link from "next/link";
import type { ElementType } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  Clock3,
  CreditCard,
  Gauge,
  HeartPulse,
  Home,
  MessageCircle,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  WandSparkles,
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
    name: "limadentt.com.br",
    title: "Odontologia premium com autoridade clínica.",
    segment: "Clínica odontológica, cirurgias, HOF e estética dental",
    result:
      "Hero forte, especialidades completas, diagnóstico digital, jornada do paciente e WhatsApp como caminho direto para agendamento.",
    palette: "from-[#111111] via-[#2B2B31] to-[#7A6332]",
    tags: ["Premium", "Saúde", "Agendamento"],
  },
  {
    name: "cristianeeliasmakeup.com.br",
    title: "Beleza sofisticada com experiência de marca.",
    segment: "Makeup artist, cursos, consultoria e atendimento em Sinop",
    result:
      "Marca pessoal, prova de experiência, serviços, cursos, galeria, depoimentos e CTA de agendamento pelo WhatsApp.",
    palette: "from-[#4B352A] via-[#9F5A43] to-[#C8A46B]",
    tags: ["Marca pessoal", "Beleza", "Cursos"],
  },
];

const niches = [
  {
    title: "Advogados",
    text: "Site institucional com áreas de atuação, autoridade profissional, conteúdo jurídico e contato qualificado.",
    icon: Scale,
  },
  {
    title: "Imobiliárias",
    text: "Vitrine para imóveis, captação de interessados, WhatsApp por imóvel e apresentação premium da equipe.",
    icon: Home,
  },
  {
    title: "Médicos e clínicas",
    text: "Página clara, confiável e humanizada para especialidades, consultas, convênios e agendamento.",
    icon: HeartPulse,
  },
  {
    title: "Prestadores de serviço",
    text: "Estrutura para mostrar antes e depois, diferenciais, garantia, regiões atendidas e orçamento rápido.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Empresas locais",
    text: "Presença digital profissional para quem precisa parecer maior e ser encontrado com facilidade.",
    icon: Building2,
  },
  {
    title: "Beleza e estética",
    text: "Portfólio visual, serviços, agenda, prova social e posicionamento sofisticado para vender experiência.",
    icon: WandSparkles,
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
                  Portfólio real
                </p>
                <h2 className="text-xl font-semibold tracking-normal">
                  Dois sites criados para negócios de segmentos diferentes
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-graphite/74">
              A ideia não é copiar modelos prontos. É entender o negócio,
              transformar diferenciais em percepção de valor e criar uma
              experiência que conduz o cliente até o contato.
            </p>

            <div className="mt-5 grid gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="reveal overflow-hidden rounded-[1.5rem] border border-softblack/8 bg-premium shadow-glass transition duration-500 hover:-translate-y-1"
                >
                  <div
                    className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.palette}`}
                  >
                    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
                    <div className="absolute left-4 top-4 right-4 rounded-[1.2rem] border border-white/15 bg-white/12 p-3 text-premium shadow-glass backdrop-blur-xl">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="h-2 w-16 rounded-full bg-white/65" />
                        <span className="h-7 rounded-full bg-premium/92 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-softblack">
                          Case {index + 1}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="block h-3 w-11/12 rounded-full bg-white/80" />
                        <span className="block h-3 w-7/12 rounded-full bg-white/42" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/12 bg-white/14 px-2 py-2 text-center text-[10px] font-bold text-white/82 backdrop-blur-xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A8792F]">
                      {project.name}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-titanium">
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
          <div className="rounded-[2rem] bg-[linear-gradient(145deg,#2B2B31,#111111)] p-5 text-premium shadow-premium">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4A148]/80">
              Sites para qualquer segmento
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal">
              Cada profissão precisa vender confiança de um jeito diferente.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/68">
              A Norte One adapta a estrutura, a linguagem e os CTAs ao tipo de
              cliente que sua empresa quer atrair.
            </p>
            <div className="mt-5 grid gap-3">
              {niches.map((niche) => (
                <div
                  key={niche.title}
                  className="reveal rounded-[1.35rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/12"
                >
                  <niche.icon className="mb-4 text-[#D4A148]" size={22} />
                  <h3 className="text-lg font-semibold leading-tight">
                    {niche.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    {niche.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-5">
          <div className="rounded-[2rem] border border-white/75 bg-white/62 p-5 shadow-premium backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A8792F]">
              Como o site vende por você
            </p>
            <div className="mt-5 grid gap-3">
              <ProcessStep
                number="01"
                title="Posiciona sua empresa"
                text="O visitante entende em poucos segundos quem você atende, o que oferece e por que sua empresa merece atenção."
              />
              <ProcessStep
                number="02"
                title="Mostra prova e diferenciais"
                text="Serviços, fotos, etapas, depoimentos, especialidades e autoridade são organizados para aumentar confiança."
              />
              <ProcessStep
                number="03"
                title="Leva para o contato"
                text="Botões, textos e chamadas conduzem o cliente para WhatsApp, orçamento, agendamento ou visita."
              />
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

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="reveal rounded-[1.35rem] border border-softblack/8 bg-premium/82 p-4 shadow-glass transition duration-500 hover:-translate-y-1">
      <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A8792F]">
        {number}
      </span>
      <h3 className="mt-3 text-xl font-semibold leading-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-graphite/74">{text}</p>
    </div>
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
