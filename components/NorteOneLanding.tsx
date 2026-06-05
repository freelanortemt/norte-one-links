"use client";

import Image from "next/image";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, PerspectiveCamera } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  ChevronRight,
  Globe2,
  Layers3,
  Link2,
  MapPinned,
  MessageCircle,
  PanelTop,
  Quote,
  Send,
  Smartphone,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Points, Group } from "three";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const WHATSAPP_URL =
  "https://wa.me/5566992204744?text=Ol%C3%A1,%20vim%20pelo%20site%20da%20Norte%20One%20e%20quero%20construir%20minha%20presen%C3%A7a%20digital";

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    title: "Sites premium",
    text: "Estruturas digitais criadas para transmitir confiança, autoridade e valor antes mesmo do primeiro contato.",
    icon: Globe2,
    href: `${BASE_PATH}/sites-profissionais`,
  },
  {
    title: "Atendimento com IA",
    text: "Automação inteligente para responder, qualificar e organizar oportunidades com mais velocidade.",
    icon: BrainCircuit,
    href: WHATSAPP_URL,
  },
  {
    title: "Chatbots para WhatsApp",
    text: "Fluxos de conversa para reduzir espera, orientar clientes e manter o atendimento consistente.",
    icon: Bot,
    href: WHATSAPP_URL,
  },
  {
    title: "Automações inteligentes",
    text: "Processos conectados para reduzir tarefas manuais e aumentar consistência no relacionamento.",
    icon: Workflow,
    href: WHATSAPP_URL,
  },
  {
    title: "Sistemas web",
    text: "Interfaces sob medida para organizar operações, dados, clientes e rotinas de crescimento.",
    icon: PanelTop,
    href: WHATSAPP_URL,
  },
  {
    title: "Aplicativos",
    text: "Experiências mobile para negócios, serviços, comunidades, agendamentos e produtos digitais.",
    icon: Smartphone,
    href: WHATSAPP_URL,
  },
  {
    title: "Cartões NFC",
    text: "Networking premium para compartilhar canais, portfólio e contato em uma experiência elegante.",
    icon: Link2,
    href: WHATSAPP_URL,
  },
  {
    title: "Branding digital",
    text: "Posicionamento visual e estratégico para marcas que querem ser percebidas com mais valor.",
    icon: Layers3,
    href: WHATSAPP_URL,
  },
];

const automationFlow = [
  "Cliente chama",
  "IA responde",
  "Lead é qualificado",
  "Empresa recebe alerta",
  "Venda é acompanhada",
  "Cliente retorna",
];

const benefits = [
  "mais confiança no primeiro contato",
  "mais agilidade no atendimento",
  "mais organização de leads",
  "mais percepção de valor",
  "mais recorrência",
  "menos oportunidades perdidas",
];

const showcases = [
  {
    title: "Projeto institucional premium",
    label: "Clínicas e serviços",
    image: `${BASE_PATH}/images/sites-premium.png`,
  },
  {
    title: "Link para bio profissional",
    label: "Instagram como vitrine",
    image: `${BASE_PATH}/images/link-para-bio-premium.png`,
  },
  {
    title: "Atendimento inteligente",
    label: "IA e WhatsApp",
    image: `${BASE_PATH}/images/chatbot-premium.png`,
  },
  {
    title: "Produto digital mobile",
    label: "Aplicativos e sistemas",
    image: `${BASE_PATH}/images/apps-premium.png`,
  },
];

const testimonials = [
  {
    title: "Cliente de site premium",
    text: "A Norte One nos ajudou a organizar nossa presença digital e transmitir uma imagem mais profissional para nossos clientes.",
  },
  {
    title: "Cliente de automação",
    text: "O atendimento ficou mais claro, rápido e alinhado com a experiência que queríamos oferecer.",
  },
  {
    title: "Empresa local atendida",
    text: "Conseguimos apresentar nossos serviços com mais segurança e conduzir o cliente para o contato certo.",
  },
];

const processSteps = [
  {
    title: "Diagnóstico",
    text: "Entendemos o momento da empresa, seus pontos de contato e suas oportunidades digitais.",
  },
  {
    title: "Estratégia",
    text: "Definimos como a marca deve ser percebida e quais soluções geram mais impacto.",
  },
  {
    title: "Construção",
    text: "Criamos site, automações, interfaces e experiências alinhadas ao posicionamento.",
  },
  {
    title: "Crescimento",
    text: "Acompanhamos melhorias, ajustes e evolução da presença digital.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function seededNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export default function NorteOneLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SmoothMotionShell>
      <main className="relative overflow-hidden bg-offwhite text-grafite">
        <PremiumHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HeroSection />
        <PositioningSection />
        <ServicesSection />
        <AutomationSection />
        <BenefitsSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <SinopSection />
        <ChatbotSection />
        <ProcessSection />
        <FinalCta />
        <Footer />
      </main>
    </SmoothMotionShell>
  );
}

function SmoothMotionShell({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-depth-reveal]").forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 80, rotateX: 7, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((item) => {
        gsap.to(item, {
          yPercent: Number(item.dataset.parallax ?? -12),
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return <>{children}</>;
}

function PremiumHeader({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-full border border-white/16 bg-[#0B1F33]/92 px-4 text-offwhite shadow-[0_20px_70px_rgba(11,31,51,.32)] backdrop-blur-2xl md:px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Norte One">
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-cobre/30 bg-offwhite">
            <Image
              src={`${BASE_PATH}/images/norte-one-logo-pages.png`}
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span className="hidden leading-none sm:block">
            <strong className="block text-sm font-black uppercase tracking-[0.2em]">
              Norte One
            </strong>
            <small className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-nevoa/62">
              Tecnologia premium
            </small>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-offwhite/68 transition hover:bg-white/8 hover:text-offwhite"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            className="hidden min-h-11 items-center justify-center rounded-full bg-offwhite px-5 text-sm font-bold text-norte transition hover:bg-nevoa md:inline-flex"
          >
            Falar com a Norte One
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/8 lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="grid gap-1.5">
              <span className="h-px w-5 bg-offwhite" />
              <span className="h-px w-5 bg-offwhite" />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-[1.5rem] border border-white/14 bg-[#0B1F33]/88 p-3 text-offwhite shadow-premium backdrop-blur-2xl lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-offwhite/78 hover:bg-white/8"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            className="rounded-2xl bg-offwhite px-4 py-3 text-center text-sm font-bold text-norte"
          >
            Falar com a Norte One
          </a>
        </div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-norte text-offwhite"
    >
      <div className="absolute inset-0">
        <HeroWebGL />
      </div>
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-offwhite via-offwhite/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 md:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12 }}
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-nevoa/76 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-cobre shadow-[0_0_30px_rgba(184,121,69,.8)]" />
              Sites • IA • Automações • Sistemas • Posicionamento
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-balance text-[clamp(2.75rem,5.6vw,5.7rem)] font-semibold leading-[0.93] tracking-[-0.05em]"
            >
              Tecnologia, posicionamento e presença digital para empresas que
              querem ser escolhidas.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-pretty text-base leading-7 text-nevoa/78 md:text-lg md:leading-8"
            >
              Criamos sites premium, automações inteligentes e experiências
              digitais que fortalecem marcas, melhoram o atendimento e geram
              mais oportunidades de negócio.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={WHATSAPP_URL}
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-offwhite px-7 text-sm font-bold text-norte shadow-copper transition hover:-translate-y-0.5 hover:bg-nevoa"
              >
                Construir minha presença digital
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </a>
              <a
                href="#solucoes"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-7 text-sm font-bold text-offwhite backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/12"
              >
                Ver soluções
                <ChevronRight size={17} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.45, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative ml-auto w-full max-w-md"
          >
            <div className="rounded-[2rem] border border-white/12 bg-white/[0.07] p-4 shadow-[0_30px_110px_rgba(0,0,0,.24)] backdrop-blur-2xl">
              <div className="relative aspect-[.92] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_0%,rgba(184,121,69,.28),transparent_35%),linear-gradient(160deg,rgba(216,225,232,.12),rgba(255,255,255,.03))]">
                <Image
                  src={`${BASE_PATH}/images/norte-one-logo-pages.png`}
                  alt="Logo Norte One"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 420px"
                  className="scale-90 object-contain opacity-95"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/12 bg-norte/62 p-5 backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cobre">
                    Assinatura visual
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-offwhite">
                    Tecnologia aplicada ao crescimento real de empresas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroWebGL() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={45} />
      <ambientLight intensity={0.9} />
      <pointLight position={[4, 4, 4]} intensity={2.4} color="#B87945" />
      <pointLight position={[-5, -2, 3]} intensity={1.4} color="#D8E1E8" />
      <SceneParticles />
    </Canvas>
  );
}

function SceneParticles() {
  const pointsRef = useRef<Points>(null);
  const groupRef = useRef<Group>(null);
  const reduceMotion = useReducedMotion();
  const count =
    typeof window !== "undefined" && window.innerWidth < 768 ? 720 : 1450;

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.4 + seededNoise(i + 1) * 4.8;
      const angle = seededNoise(i + 2) * Math.PI * 2;
      values[i * 3] = Math.cos(angle) * radius;
      values[i * 3 + 1] = (seededNoise(i + 3) - 0.5) * 4.4;
      values[i * 3 + 2] = Math.sin(angle) * radius - seededNoise(i + 4) * 3.5;
    }
    return values;
  }, [count]);

  useFrame(({ clock, pointer }) => {
    if (reduceMotion) return;
    const time = clock.elapsedTime;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.045 + pointer.x * 0.08;
      pointsRef.current.rotation.x = pointer.y * 0.035;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = pointer.x * 0.08;
      groupRef.current.position.x = pointer.x * 0.18;
      groupRef.current.position.y = pointer.y * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          color="#D8E1E8"
          transparent
          opacity={0.66}
          depthWrite={false}
        />
      </points>
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.35}>
        <mesh position={[2.8, 0.1, -1.5]} rotation={[0.5, 0.4, 0.15]}>
          <torusKnotGeometry args={[0.78, 0.08, 180, 18]} />
          <meshStandardMaterial
            color="#B87945"
            roughness={0.38}
            metalness={0.62}
            transparent
            opacity={0.58}
          />
        </mesh>
      </Float>
      <Line
        points={[
          [-5.2, -2.6, -2.4],
          [-2.8, -1.1, -2.8],
          [0.2, -2.0, -3.2],
          [3.5, -0.9, -2.2],
          [5.4, -2.2, -2.8],
        ]}
        color="#B87945"
        transparent
        opacity={0.45}
        lineWidth={1}
      />
      <gridHelper
        args={[12, 28, "#B87945", "#D8E1E8"]}
        position={[0, -2.8, -2.2]}
        rotation={[0.05, 0, 0]}
      />
    </group>
  );
}

function PositioningSection() {
  return (
    <Section id="posicionamento" className="bg-offwhite pt-24 md:pt-36">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div data-depth-reveal>
          <SectionKicker>Posicionamento estratégico</SectionKicker>
          <h2 className="mt-5 max-w-4xl text-balance text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-norte">
            Empresas fortes não apenas aparecem. Elas são percebidas como
            escolha certa.
          </h2>
        </div>
        <div className="space-y-8" data-depth-reveal>
          <p className="text-xl leading-9 text-grafite/72">
            Presença digital, atendimento inteligente e posicionamento
            estratégico transformam a forma como clientes enxergam, confiam e
            compram de uma empresa.
          </p>
          <EcosystemVisual />
        </div>
      </div>
    </Section>
  );
}

function EcosystemVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-norte/10 bg-[linear-gradient(145deg,rgba(216,225,232,.62),rgba(244,241,234,.74))] p-6 shadow-premium">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(11,31,51,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,51,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cobre/30 bg-offwhite/55 shadow-copper backdrop-blur-xl" />
      {["Marca", "Site", "IA", "Leads", "Equipe", "Cliente"].map((item, i) => {
        const pos = [
          "left-8 top-10",
          "right-10 top-16",
          "left-12 bottom-12",
          "right-8 bottom-16",
          "left-1/2 top-6 -translate-x-1/2",
          "left-1/2 bottom-7 -translate-x-1/2",
        ][i];
        return (
          <div
            key={item}
            className={`absolute ${pos} rounded-full border border-white/70 bg-white/62 px-4 py-3 text-sm font-bold text-norte shadow-glass backdrop-blur-xl`}
          >
            {item}
          </div>
        );
      })}
      <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-cobre/50 to-transparent" />
      <div className="absolute inset-y-10 left-1/2 w-px bg-gradient-to-b from-transparent via-cobre/50 to-transparent" />
      <div className="relative z-10 grid h-full min-h-[312px] place-items-center text-center">
        <div>
          <Image
            src={`${BASE_PATH}/images/norte-one-logo-pages.png`}
            alt=""
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <p className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-cobre">
            Ecossistema digital
          </p>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <Section id="solucoes" className="bg-offwhite py-24 md:py-36">
      <div className="mb-14 grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
        <div data-depth-reveal>
          <SectionKicker>Soluções premium</SectionKicker>
          <h2 className="mt-5 text-balance text-[clamp(2.4rem,5vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-norte">
            Tecnologia aplicada ao que realmente muda a percepção do cliente.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-grafite/68" data-depth-reveal>
          Menos peças soltas. Mais estrutura, posicionamento e experiência
          digital para empresas que precisam vender confiança antes de vender
          preço.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <a
            key={service.title}
            href={service.href}
            data-depth-reveal
            className={`group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-norte/10 bg-white/58 p-6 shadow-glass backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cobre/35 hover:shadow-premium ${
              index % 5 === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cobre/10 blur-3xl transition group-hover:bg-cobre/18" />
            <service.icon className="relative z-10 text-cobre" size={28} />
            <h3 className="relative z-10 mt-10 max-w-xs text-3xl font-semibold leading-tight tracking-[-0.025em] text-norte">
              {service.title}
            </h3>
            <p className="relative z-10 mt-5 max-w-sm text-sm leading-7 text-grafite/68">
              {service.text}
            </p>
            <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-cobre">
              Conversar
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function AutomationSection() {
  return (
    <Section
      id="tecnologia"
      className="relative overflow-hidden bg-norte py-24 text-offwhite md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(184,121,69,.26),transparent_34rem)]" />
      <div className="relative grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div data-depth-reveal>
          <SectionKicker dark>IA e automações</SectionKicker>
          <h2 className="mt-5 text-balance text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
            Automação não substitui relacionamento. Ela impede que
            oportunidades sejam perdidas.
          </h2>
          <p className="mt-7 text-lg leading-8 text-nevoa/74">
            O atendimento inteligente organiza o primeiro contato, qualifica a
            necessidade e entrega clareza para a equipe agir com mais precisão.
          </p>
        </div>

        <div data-depth-reveal className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-[0_34px_110px_rgba(0,0,0,.22)] backdrop-blur-2xl">
          <div className="grid gap-3">
            {automationFlow.map((step, index) => (
              <div
                key={step}
                className="group flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.1]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cobre/18 text-sm font-black text-cobre ring-1 ring-cobre/28">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-semibold text-offwhite">
                  {step}
                </span>
                <span className="ml-auto h-px flex-1 bg-gradient-to-r from-cobre/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function BenefitsSection() {
  return (
    <Section className="bg-offwhite py-24 md:py-36">
      <div className="mx-auto max-w-4xl text-center" data-depth-reveal>
        <SectionKicker>Causa e efeito</SectionKicker>
        <h2 className="mt-5 text-balance text-[clamp(2.5rem,5.5vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-norte">
          Quando a estrutura digital melhora, o crescimento deixa de depender
          apenas de esforço manual.
        </h2>
      </div>
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            data-depth-reveal
            className="rounded-full border border-norte/10 bg-white/60 px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-grafite/72 shadow-glass backdrop-blur-xl"
          >
            {benefit}
          </div>
        ))}
      </div>
    </Section>
  );
}

function ShowcaseSection() {
  return (
    <Section id="projetos" className="bg-[#E8EDF1] py-24 md:py-36">
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div data-depth-reveal>
          <SectionKicker>Showcase</SectionKicker>
          <h2 className="mt-5 max-w-4xl text-balance text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-norte">
            Vitrines digitais preparadas para receber projetos reais.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-grafite/68" data-depth-reveal>
          Estrutura visual para portfólio sem inventar resultados. Pronta para
          receber imagens, clientes e métricas reais quando existirem.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {showcases.map((item) => (
          <div
            key={item.title}
            data-depth-reveal
            className="group overflow-hidden rounded-[2.2rem] border border-white/80 bg-offwhite p-3 shadow-premium"
          >
            <div className="relative aspect-[1.18] overflow-hidden rounded-[1.7rem] bg-norte">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-norte/84 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-offwhite">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cobre">
                  {item.label}
                </p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.025em]">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  return (
    <Section id="avaliacoes" className="bg-offwhite py-24 md:py-36">
      <div className="mb-14 grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-end">
        <div data-depth-reveal>
          <SectionKicker>Avaliações</SectionKicker>
          <h2 className="mt-5 text-balance text-[clamp(2.5rem,5vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-norte">
            Espaço pronto para depoimentos reais de clientes.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-grafite/68" data-depth-reveal>
          A seção abaixo usa textos substituíveis, sem inventar nomes ou
          resultados. Quando os depoimentos reais chegarem, entram com a mesma
          linguagem premium.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.title}
            data-depth-reveal
            className="rounded-[2rem] border border-norte/10 bg-white/62 p-6 shadow-glass backdrop-blur-xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <Quote className="text-cobre" size={28} />
              <div className="flex gap-1 text-cobre">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={13} fill="currentColor" />
                ))}
              </div>
            </div>
            <p className="text-lg font-medium leading-8 text-grafite/78">
              “{item.text}”
            </p>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-cobre">
              {item.title}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function SinopSection() {
  return (
    <Section className="relative overflow-hidden bg-norte py-24 text-offwhite md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(184,121,69,.2),transparent_28rem)]" />
      <div className="relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div data-depth-reveal>
          <SectionKicker dark>Sinop MT e região</SectionKicker>
          <h2 className="mt-5 text-balance text-[clamp(2.4rem,5vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            Tecnologia de alto padrão para empresas que querem crescer em Sinop
            e região.
          </h2>
          <p className="mt-7 text-lg leading-8 text-nevoa/74">
            Negócios locais também precisam transmitir autoridade, atender
            melhor e criar experiências digitais à altura do novo comportamento
            do consumidor.
          </p>
        </div>
        <div data-depth-reveal className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_34px_110px_rgba(0,0,0,.22)] backdrop-blur-xl">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:46px_46px]" />
          <MapPinned className="relative z-10 text-cobre" size={34} />
          {["Sinop", "Sorriso", "Lucas", "Clínicas", "Imobiliárias", "Serviços"].map(
            (point, index) => (
              <span
                key={point}
                className="absolute rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-bold text-offwhite backdrop-blur-xl"
                style={{
                  left: `${14 + ((index * 17) % 64)}%`,
                  top: `${22 + ((index * 23) % 58)}%`,
                }}
              >
                {point}
              </span>
            ),
          )}
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-norte/68 p-5 backdrop-blur-xl">
            <p className="text-lg font-semibold">
              Alto padrão digital também é vantagem competitiva regional.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ChatbotSection() {
  return (
    <Section className="bg-offwhite py-24 md:py-36">
      <div className="grid gap-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div data-depth-reveal>
          <SectionKicker>Atendimento inteligente</SectionKicker>
          <h2 className="mt-5 text-balance text-[clamp(2.4rem,5vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-norte">
            Uma conversa bem estruturada muda o próximo passo do cliente.
          </h2>
          <p className="mt-7 text-lg leading-8 text-grafite/68">
            A IA pode orientar, qualificar e encaminhar contatos sem transformar
            a experiência em algo frio ou impessoal.
          </p>
        </div>
        <div data-depth-reveal className="rounded-[2rem] border border-norte/10 bg-white/64 p-4 shadow-premium backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-norte p-4 text-offwhite">
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-cobre/18 text-cobre">
                <Bot size={20} />
              </span>
              <div>
                <p className="text-sm font-bold">Norte One IA</p>
                <p className="text-xs text-nevoa/56">Fluxo de atendimento ativo</p>
              </div>
            </div>
            <ChatBubble side="client">
              Olá, quero saber mais sobre os serviços.
            </ChatBubble>
            <ChatBubble side="ai">
              Claro. Posso te ajudar com site premium, atendimento automático,
              automações ou posicionamento digital. Qual dessas soluções faz
              mais sentido para sua empresa hoje?
            </ChatBubble>
            <ChatBubble side="client">Quero melhorar meu atendimento.</ChatBubble>
            <ChatBubble side="ai">
              Perfeito. Podemos estruturar um fluxo para responder clientes,
              qualificar contatos e encaminhar oportunidades para sua equipe.
            </ChatBubble>
            <div className="mt-5 flex items-center gap-2 rounded-full bg-white/8 px-4 py-3 text-sm text-nevoa/60">
              <span className="flex-1">Mensagem qualificada para a equipe</span>
              <Send size={16} className="text-cobre" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProcessSection() {
  return (
    <Section className="bg-[#E8EDF1] py-24 md:py-36">
      <div className="mb-14 max-w-4xl" data-depth-reveal>
        <SectionKicker>Processo</SectionKicker>
        <h2 className="mt-5 text-balance text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-norte">
          Método claro para transformar presença digital em estrutura de
          crescimento.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {processSteps.map((item, index) => (
          <div
            key={item.title}
            data-depth-reveal
            className="rounded-[2rem] border border-norte/10 bg-offwhite/72 p-6 shadow-glass"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cobre">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 text-2xl font-semibold text-norte">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-grafite/68">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-norte px-5 py-24 text-offwhite md:px-8 md:py-36"
    >
      <div className="absolute inset-0">
        <HeroWebGL />
      </div>
      <div className="absolute inset-0 bg-norte/72" />
      <div className="relative z-10 mx-auto max-w-5xl text-center" data-depth-reveal>
        <Image
          src={`${BASE_PATH}/images/norte-one-logo-pages.png`}
          alt="Norte One"
          width={130}
          height={130}
          className="mx-auto rounded-full"
        />
        <h2 className="mt-8 text-balance text-[clamp(2.6rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          Sua empresa pode parecer maior, mais confiável e mais preparada para
          crescer.
        </h2>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-nevoa/76">
          Com presença digital estratégica, atendimento inteligente e tecnologia
          bem aplicada, cada contato pode se transformar em uma oportunidade
          real.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-offwhite px-7 text-sm font-bold text-norte transition hover:bg-nevoa"
          >
            Falar com a Norte One
            <MessageCircle size={17} />
          </a>
          <a
            href="#solucoes"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-7 text-sm font-bold text-offwhite backdrop-blur-xl transition hover:bg-white/12"
          >
            Ver soluções
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#081725] px-5 py-12 text-offwhite md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={`${BASE_PATH}/images/norte-one-logo-pages.png`}
              alt="Norte One"
              width={54}
              height={54}
              className="rounded-full"
            />
            <div>
              <p className="font-black uppercase tracking-[0.2em]">Norte One</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-nevoa/54">
                Tecnologia • Design • Estratégia
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-nevoa/58">
            Presença digital premium, automações inteligentes e posicionamento
            para empresas que querem ser percebidas com mais valor.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cobre">
            Navegação
          </p>
          <div className="mt-4 grid gap-2 text-sm text-nevoa/62">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-offwhite">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cobre">
            Contato
          </p>
          <div className="mt-4 grid gap-2 text-sm text-nevoa/62">
            <a href={WHATSAPP_URL} className="hover:text-offwhite">
              (66) 99220-4744
            </a>
            <span>Sinop MT e região</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 md:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionKicker({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-xs font-black uppercase tracking-[0.24em] ${
        dark ? "text-cobre" : "text-cobre"
      }`}
    >
      {children}
    </p>
  );
}

function ChatBubble({
  children,
  side,
}: {
  children: React.ReactNode;
  side: "client" | "ai";
}) {
  return (
    <div className={`mt-3 flex ${side === "client" ? "justify-start" : "justify-end"}`}>
      <p
        className={`max-w-[82%] rounded-[1.2rem] px-4 py-3 text-sm leading-6 ${
          side === "client"
            ? "bg-white/10 text-nevoa"
            : "bg-offwhite text-norte"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
