import ServiceSalesPage, {
  type ServiceSalesPageData,
} from "../../components/ServiceSalesPage";

const data: ServiceSalesPageData = {
  badge: "Link para bio profissional",
  title: "Seu Instagram pode virar uma vitrine clara para contratar você.",
  subtitle:
    "Uma página premium para reunir WhatsApp, serviços, localização, portfólio, redes sociais e chamadas importantes em um único link elegante.",
  image: "/images/link-para-bio-premium.png",
  priceLabel: "A partir de R$ 59,90",
  valueTitle: "Mais organização, autoridade e conversão no primeiro clique.",
  valueText:
    "O cliente sai do Instagram sabendo exatamente onde clicar, o que você oferece e como falar com sua empresa. Isso reduz confusão e aumenta a percepção de profissionalismo.",
  proofTitle: "Um link bonito não basta. Ele precisa orientar a decisão.",
  proofText:
    "A página é pensada para priorizar as ações que importam: chamar no WhatsApp, ver serviços, acessar portfólio, conhecer localização ou entrar em uma oferta.",
  functionTitle: "Tudo que o cliente precisa, em uma página simples de usar.",
  functionText:
    "Criamos uma estrutura visual com identidade da marca, blocos clicáveis, CTAs objetivos e organização para transformar o Instagram em ponto de entrada profissional.",
  benefits: [
    "Perfil mais profissional e fácil de navegar.",
    "Todos os links importantes reunidos em uma experiência premium.",
    "Mais clareza para clientes encontrarem serviços e contato.",
    "Página leve, mobile first e pronta para usar na bio do Instagram.",
  ],
  deliverables: [
    "Página personalizada com identidade visual",
    "Botões e blocos organizados por prioridade",
    "CTA para WhatsApp e canais principais",
    "Imagens e composição visual profissional",
    "Publicação pronta para usar na bio",
  ],
  ctaTitle: "Quer transformar sua bio em uma vitrine profissional?",
  ctaText:
    "Fale com a Norte One e envie os links que deseja organizar na sua página.",
  whatsappMessage:
    "Olá, vim pela página de link para bio da Norte One e quero criar minha página profissional a partir de R$ 59,90.",
};

export const metadata = {
  title: "Link para Bio Profissional | Norte One",
  description:
    "Página premium para bio do Instagram com todos os links do cliente organizados em uma experiência profissional.",
};

export default function LinkParaBioPage() {
  return <ServiceSalesPage data={data} />;
}
