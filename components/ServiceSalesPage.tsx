import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const WHATSAPP_BASE = "https://wa.me/5566992204744";

export type ServiceSalesPageData = {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  priceLabel: string;
  valueTitle: string;
  valueText: string;
  proofTitle: string;
  proofText: string;
  functionTitle: string;
  functionText: string;
  benefits: string[];
  deliverables: string[];
  ctaTitle: string;
  ctaText: string;
  whatsappMessage: string;
};

function makeWhatsappLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export default function ServiceSalesPage({ data }: { data: ServiceSalesPageData }) {
  return (
    <main className="min-h-screen bg-norte text-offwhite">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,121,69,.18),transparent_24rem),linear-gradient(180deg,#0B1F33,#071522_78%)]" />
      <div className="noise-layer pointer-events-none fixed inset-0 opacity-[0.045]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-1/2 opacity-20 [background-image:linear-gradient(rgba(216,225,232,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(216,225,232,.12)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:linear-gradient(to_top,black,transparent)]" />

      <div className="relative z-10 mx-auto w-full max-w-[620px] px-4 pb-8 pt-5 sm:px-6">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.08] text-offwhite backdrop-blur-2xl transition hover:border-cobre/45"
            aria-label="Voltar para links"
          >
            <ArrowLeft size={18} />
          </Link>
          <Image
            src={`${BASE_PATH}/images/norte-one-logo-bio.png`}
            alt="Norte One"
            width={46}
            height={46}
            className="rounded-full border border-cobre/30"
          />
        </header>

        <section className="pt-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cobre">
            {data.badge}
          </p>
          <h1 className="mt-4 text-balance text-[clamp(2.35rem,10vw,4.3rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
            {data.title}
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-nevoa/78">
            {data.subtitle}
          </p>
        </section>

        <section className="mt-7 overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-3 shadow-[0_24px_90px_rgba(0,0,0,.24)] backdrop-blur-2xl">
          <div className="relative min-h-[250px] overflow-hidden rounded-[1.45rem] bg-grafite">
            <Image
              src={`${BASE_PATH}${data.image}`}
              alt={`Imagem profissional de ${data.title}`}
              fill
              priority
              sizes="(max-width: 680px) 100vw, 620px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,51,.06),rgba(11,31,51,.88))]" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-flex rounded-full bg-offwhite px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-norte">
                {data.priceLabel}
              </span>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-[2rem] border border-cobre/24 bg-[linear-gradient(145deg,rgba(244,241,234,.95),rgba(216,225,232,.82))] p-5 text-norte shadow-copper">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cobre">
            Valor para sua empresa
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[0.98] tracking-[-0.035em]">
            {data.valueTitle}
          </h2>
          <p className="mt-4 text-sm leading-6 text-grafite/72">
            {data.valueText}
          </p>
        </section>

        <section className="mt-4 grid gap-3">
          <InfoBlock
            label="O que muda"
            title={data.proofTitle}
            text={data.proofText}
          />
          <InfoBlock
            label="Como funciona"
            title={data.functionTitle}
            text={data.functionText}
          />
        </section>

        <section className="mt-4 grid gap-3">
          {data.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-[1.35rem] border border-white/12 bg-white/[0.075] p-4 shadow-glass backdrop-blur-2xl"
            >
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cobre/18 text-cobre">
                <Sparkles size={15} />
              </span>
              <p className="text-sm font-medium leading-6 text-nevoa/82">
                {benefit}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-5 rounded-[2rem] border border-white/12 bg-white/[0.08] p-5 shadow-[0_24px_90px_rgba(0,0,0,.18)] backdrop-blur-2xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cobre">
            O que está incluso
          </p>
          <div className="mt-5 grid gap-3">
            {data.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-offwhite text-norte">
                  <Check size={14} strokeWidth={3} />
                </span>
                <p className="text-sm leading-6 text-nevoa/78">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-[2rem] border border-cobre/30 bg-cobre/14 p-5 shadow-copper backdrop-blur-2xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cobre">
            Orçamento
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[0.98] tracking-[-0.035em]">
            {data.ctaTitle}
          </h2>
          <p className="mt-4 text-sm leading-6 text-nevoa/78">{data.ctaText}</p>
          <a
            href={makeWhatsappLink(data.whatsappMessage)}
            className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-offwhite px-5 text-sm font-bold text-norte transition hover:bg-nevoa"
          >
            Pedir orçamento no WhatsApp
            <MessageCircle size={17} />
          </a>
        </section>
      </div>
    </main>
  );
}

function InfoBlock({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-5 shadow-[0_24px_90px_rgba(0,0,0,.16)] backdrop-blur-2xl">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-cobre">
        {label}
      </p>
      <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-nevoa/74">{text}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-cobre">
        Norte One
        <ArrowRight size={14} />
      </div>
    </article>
  );
}
