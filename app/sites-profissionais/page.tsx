import ServiceSalesPage, {
  type ServiceSalesPageData,
} from "../../components/ServiceSalesPage";

const data: ServiceSalesPageData = {
  badge: "Sites premium para empresas",
  title: "Um site profissional faz sua empresa parecer mais confiável antes do contato.",
  subtitle:
    "Criamos páginas e sites com visual premium, copy estratégica e estrutura pensada para transformar visitantes em contatos qualificados.",
  image: "/images/sites-premium.png",
  priceLabel: "A partir de R$ 599",
  valueTitle: "Mais confiança, mais autoridade e uma presença digital que sustenta preço.",
  valueText:
    "Empresas bem apresentadas não dependem apenas de conversa no WhatsApp. O site mostra organização, serviços, diferenciais e prova de profissionalismo antes do cliente pedir orçamento.",
  proofTitle: "O cliente entende sua empresa sem precisar perguntar tudo.",
  proofText:
    "A estrutura apresenta quem você é, o que oferece, por que confiar e qual é o próximo passo. Isso deixa o atendimento mais rápido e aumenta a segurança do cliente.",
  functionTitle: "O site trabalha como uma vitrine estratégica.",
  functionText:
    "Organizamos seções, textos, imagens e CTAs para conduzir o visitante até WhatsApp, agendamento, orçamento ou compra, conforme o objetivo do negócio.",
  benefits: [
    "Presença digital mais forte que depender apenas de redes sociais.",
    "Layout responsivo e premium para celular e desktop.",
    "Copy focada em valor percebido e conversão.",
    "Caminho claro para orçamento, agendamento ou atendimento.",
  ],
  deliverables: [
    "Layout premium e responsivo",
    "Copy profissional focada em conversão",
    "Integração com WhatsApp",
    "SEO básico para presença digital",
    "1 ano de suporte gratuito",
    "Pagamento na entrega do site",
  ],
  ctaTitle: "Quer um site que apresente sua empresa com mais valor?",
  ctaText:
    "Fale com a Norte One e receba uma orientação sobre a estrutura ideal para seu segmento.",
  whatsappMessage:
    "Olá, vim pela página de sites da Norte One e quero pedir um orçamento para um site profissional.",
};

export const metadata = {
  title: "Sites Premium | Norte One",
  description:
    "Sites profissionais a partir de R$ 599, com copy estratégica, integração com WhatsApp e presença digital premium.",
};

export default function SitesProfissionaisPage() {
  return <ServiceSalesPage data={data} />;
}
