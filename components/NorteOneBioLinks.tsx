"use client";

import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, PerspectiveCamera } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowRight,
  Bot,
  Building2,
  ExternalLink,
  Globe2,
  Layers3,
  MessageCircle,
  PanelTop,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import type { Group, Points } from "three";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const WHATSAPP_BASE = "https://wa.me/5566992204744";
const MAIN_SITE_URL = "https://site-norte-one.vercel.app";

const makeWhatsappLink = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

const bioLinks = [
  {
    title: "Site principal",
    eyebrow: "Norte One",
    description:
      "Conheça a estrutura, posicionamento e soluções digitais da Norte One.",
    href: MAIN_SITE_URL,
    image: `${BASE_PATH}/images/sites-premium.png`,
    icon: Building2,
    action: "Acessar site",
    size: "large",
  },
  {
    title: "Chatbot e automação para WhatsApp",
    eyebrow: "IA aplicada",
    description:
      "Atendimento automático para responder, qualificar contatos e reduzir oportunidades perdidas.",
    href: makeWhatsappLink(
      "Olá, vim pelo Instagram da Norte One e quero saber sobre chatbot e automação para WhatsApp.",
    ),
    image: `${BASE_PATH}/images/chatbot-premium.png`,
    icon: Bot,
    action: "Automatizar atendimento",
    size: "large",
  },
  {
    title: "Link para bio profissional",
    eyebrow: "A partir de R$ 59,90",
    description:
      "Uma página organizada, elegante e estratégica para reunir todos os links importantes do seu negócio.",
    href: makeWhatsappLink(
      "Olá, vim pelo Instagram da Norte One e quero criar meu link para bio profissional a partir de R$ 59,90.",
    ),
    image: `${BASE_PATH}/images/link-para-bio-premium.png`,
    icon: Layers3,
    action: "Quero meu link",
    size: "featured",
  },
  {
    title: "Sites premium para empresas",
    eyebrow: "Presença digital",
    description:
      "Sites com visual profissional, copy estratégica e caminho claro para orçamento, agendamento ou venda.",
    href: `${BASE_PATH}/sites-profissionais`,
    image: `${BASE_PATH}/images/sites-premium.png`,
    icon: Globe2,
    action: "Ver sites",
    size: "large",
  },
  {
    title: "Aplicativos, CRM e sistemas web",
    eyebrow: "Sob demanda",
    description:
      "Estruturas digitais para organizar operações, clientes, agendamentos, vendas e processos internos.",
    href: makeWhatsappLink(
      "Olá, vim pelo Instagram da Norte One e quero conversar sobre aplicativo, CRM ou sistema web.",
    ),
    image: `${BASE_PATH}/images/apps-premium.png`,
    icon: PanelTop,
    action: "Planejar projeto",
    size: "large",
  },
];

const quickActions = [
  {
    label: "WhatsApp",
    href: makeWhatsappLink(
      "Olá, vim pelo Instagram e quero conhecer as soluções da Norte One.",
    ),
    icon: MessageCircle,
  },
  {
    label: "Soluções",
    href: "#links",
    icon: Sparkles,
  },
  {
    label: "Apps e CRM",
    href: makeWhatsappLink(
      "Olá, quero saber sobre aplicativos, CRM e sistemas da Norte One.",
    ),
    icon: Smartphone,
  },
];

const entrance = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function seededNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export default function NorteOneBioLinks() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden bg-norte text-offwhite">
        <div className="fixed inset-0">
          <BioWebGL />
        </div>
        <div className="noise-layer pointer-events-none fixed inset-0 opacity-[0.045]" />
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,121,69,.18),transparent_28rem),linear-gradient(180deg,rgba(11,31,51,.18),rgba(11,31,51,.94)_72%)]" />

        <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[560px] flex-col px-4 pb-8 pt-6 sm:px-6">
          <HeroIntro />
          <QuickActions />
          <LinkStack />
          <ClosingCta />
          <FooterSignature />
        </section>
      </main>
    </SmoothScroll>
  );
}

function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.82,
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
          { autoAlpha: 0, y: 54, rotateX: 5, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((item) => {
        gsap.to(item, {
          yPercent: Number(item.dataset.parallax ?? -10),
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

function HeroIntro() {
  return (
    <header className="pt-2 text-center">
      <motion.div
        initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="mx-auto w-fit"
      >
        <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-cobre/35 bg-norte shadow-copper backdrop-blur-xl">
          <Image
            src={`${BASE_PATH}/images/norte-one-logo-bio.png`}
            alt="Logo Norte One"
            fill
            priority
            sizes="112px"
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.08, duration: 0.72, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-cobre"
      >
        Tecnologia • Design • Estratégia
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.16, duration: 0.78, ease: [0.2, 0.8, 0.2, 1] }}
        className="mx-auto mt-4 max-w-[11ch] text-balance text-[clamp(2.9rem,12vw,4.9rem)] font-semibold leading-[0.88] tracking-[-0.05em]"
      >
        Norte One
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.24, duration: 0.72, ease: [0.2, 0.8, 0.2, 1] }}
        className="mx-auto mt-5 max-w-md text-pretty text-base leading-7 text-nevoa/78"
      >
        Links oficiais para contratar presença digital premium, automações,
        sites, aplicativos e páginas profissionais para bio do Instagram.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.32, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-nevoa/72 backdrop-blur-2xl"
      >
        <span className="h-2 w-2 rounded-full bg-cobre shadow-[0_0_24px_rgba(184,121,69,.9)]" />
        Sinop MT e região
      </motion.div>
    </header>
  );
}

function QuickActions() {
  return (
    <div className="mt-7 grid grid-cols-3 gap-2" aria-label="Ações rápidas">
      {quickActions.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          variants={entrance}
          initial="hidden"
          animate="show"
          className="group grid min-h-[74px] place-items-center rounded-[1.35rem] border border-white/12 bg-white/[0.075] px-2 text-center shadow-[0_20px_70px_rgba(0,0,0,.16)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-cobre/45 hover:bg-white/[0.11]"
        >
          <item.icon
            size={20}
            className="mb-2 text-cobre transition group-hover:scale-110"
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-nevoa/78">
            {item.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}

function LinkStack() {
  return (
    <section id="links" className="mt-5 grid gap-3.5">
      {bioLinks.map((item, index) => (
        <a
          key={item.title}
          href={item.href}
          data-depth-reveal
          className={`group relative isolate overflow-hidden rounded-[1.55rem] border border-white/12 bg-white/[0.08] shadow-[0_20px_70px_rgba(0,0,0,.18)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-cobre/45 hover:bg-white/[0.115] ${
            item.size === "featured" ? "min-h-[226px]" : "min-h-[198px]"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={item.image}
              alt={`Imagem representando ${item.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 560px"
              className="object-cover opacity-72 transition duration-700 group-hover:scale-105 group-hover:opacity-86"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,51,.20),rgba(11,31,51,.92)_72%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(184,121,69,.38),transparent_18rem)] opacity-70" />
          </div>

          <div
            data-parallax="-8"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-[1rem] border border-white/16 bg-white/12 text-cobre shadow-glass backdrop-blur-2xl"
          >
            <item.icon size={21} />
          </div>

          <div className="relative z-10 flex min-h-[inherit] flex-col justify-end p-4">
            <div className="mb-2.5 flex flex-wrap items-center gap-1.5">
              <span className="rounded-full border border-cobre/35 bg-cobre/18 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-cobre">
                {item.eyebrow}
              </span>
              {item.size === "featured" ? (
                <span className="rounded-full border border-white/14 bg-offwhite px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-norte">
                  Oferta bio
                </span>
              ) : null}
            </div>

            <h2 className="max-w-[14ch] text-balance text-[clamp(1.55rem,6.4vw,2.25rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-offwhite">
              {item.title}
            </h2>
            <p className="mt-2.5 max-w-[31rem] text-[13px] leading-5 text-nevoa/78">
              {item.description}
            </p>
            <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-offwhite px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-norte transition group-hover:bg-nevoa">
              {item.action}
              {item.title === "Site principal" ? (
                <ExternalLink size={15} />
              ) : (
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              )}
            </span>
          </div>
        </a>
      ))}
    </section>
  );
}

function ClosingCta() {
  return (
    <section
      data-depth-reveal
      className="mt-5 overflow-hidden rounded-[2rem] border border-cobre/24 bg-[linear-gradient(145deg,rgba(244,241,234,.92),rgba(216,225,232,.78))] p-5 text-norte shadow-copper"
    >
      <p className="text-xs font-black uppercase tracking-[0.22em] text-cobre">
        Atendimento direto
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-[0.98] tracking-[-0.035em]">
        Quer saber qual solução combina melhor com sua empresa?
      </h2>
      <p className="mt-4 text-sm leading-6 text-grafite/70">
        Fale com a Norte One e receba uma orientação clara para melhorar sua
        presença digital sem parecer uma empresa comum.
      </p>
      <a
        href={makeWhatsappLink(
          "Olá, vim pelo Instagram e quero uma orientação da Norte One para minha empresa.",
        )}
        className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-norte px-5 text-sm font-bold text-offwhite transition hover:bg-grafite"
      >
        Falar com especialista
        <MessageCircle size={17} />
      </a>
    </section>
  );
}

function FooterSignature() {
  return (
    <footer className="py-8 text-center">
      <p className="text-[11px] font-black uppercase tracking-[0.24em] text-nevoa/42">
        Norte One
      </p>
      <p className="mt-2 text-xs text-nevoa/45">
        Tecnologia premium para empresas que querem ser escolhidas.
      </p>
    </footer>
  );
}

function BioWebGL() {
  return (
    <Canvas
      dpr={[1, 1.45]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={46} />
      <ambientLight intensity={0.88} />
      <pointLight position={[3.8, 3.8, 4]} intensity={2.25} color="#B87945" />
      <pointLight position={[-4, -2, 2]} intensity={1.15} color="#D8E1E8" />
      <ParticleField />
    </Canvas>
  );
}

function ParticleField() {
  const reduceMotion = useReducedMotion();
  const pointsRef = useRef<Points>(null);
  const groupRef = useRef<Group>(null);
  const count =
    typeof window !== "undefined" && window.innerWidth < 768 ? 520 : 1180;

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.1 + seededNoise(i + 10) * 4.6;
      const angle = seededNoise(i + 20) * Math.PI * 2;
      values[i * 3] = Math.cos(angle) * radius;
      values[i * 3 + 1] = (seededNoise(i + 30) - 0.5) * 5.2;
      values[i * 3 + 2] = Math.sin(angle) * radius - seededNoise(i + 40) * 4;
    }
    return values;
  }, [count]);

  useFrame(({ clock, pointer }) => {
    if (reduceMotion) return;
    const time = clock.elapsedTime;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.045 + pointer.x * 0.08;
      pointsRef.current.rotation.x = pointer.y * 0.04;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = pointer.x * 0.1;
      groupRef.current.position.x = pointer.x * 0.18;
      groupRef.current.position.y = pointer.y * 0.12;
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
          size={0.024}
          color="#D8E1E8"
          transparent
          opacity={0.62}
          depthWrite={false}
        />
      </points>
      <Float speed={1.05} rotationIntensity={0.16} floatIntensity={0.35}>
        <mesh position={[1.35, 0.7, -1.2]} rotation={[0.6, 0.35, 0.35]}>
          <torusKnotGeometry args={[0.68, 0.08, 120, 14]} />
          <meshStandardMaterial
            color="#B87945"
            emissive="#B87945"
            emissiveIntensity={0.18}
            metalness={0.72}
            roughness={0.34}
            transparent
            opacity={0.62}
          />
        </mesh>
      </Float>
      <Line
        points={[
          [-4, -2.7, -2],
          [-1.8, -1.35, -1.5],
          [0.2, -1.95, -1.7],
          [2.8, -0.9, -2.2],
          [4, -1.7, -2],
        ]}
        color="#B87945"
        transparent
        opacity={0.35}
        lineWidth={1}
      />
      <gridHelper args={[12, 24, "#B87945", "#D8E1E8"]} position={[0, -3, -2]} />
    </group>
  );
}
