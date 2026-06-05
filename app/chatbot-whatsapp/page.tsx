import ServiceSalesPage, {
  type ServiceSalesPageData,
} from "../../components/ServiceSalesPage";

const data: ServiceSalesPageData = {
  badge: "Chatbot e automação para WhatsApp",
  title: "Atendimento que responde rápido e não deixa oportunidade esfriar.",
  subtitle:
    "Organize o primeiro contato, responda dúvidas frequentes e conduza clientes para orçamento, agendamento ou atendimento humano com mais clareza.",
  image: "/images/chatbot-premium.png",
  priceLabel: "Investimento sob orçamento",
  valueTitle: "Menos mensagens perdidas. Mais contatos qualificados.",
  valueText:
    "Quando o cliente chama e recebe uma resposta clara no momento certo, a empresa passa mais confiança e reduz a chance de perder vendas por demora, desorganização ou falta de padrão no atendimento.",
  proofTitle: "Sua equipe ganha velocidade sem perder controle.",
  proofText:
    "O fluxo automático pode filtrar interesse, coletar nome, necessidade, cidade, horário e encaminhar a conversa pronta para a equipe continuar com mais precisão.",
  functionTitle: "A automação guia o cliente até o próximo passo.",
  functionText:
    "Criamos perguntas, respostas, menus e caminhos para transformar mensagens soltas em uma jornada objetiva: entender, qualificar, registrar e direcionar.",
  benefits: [
    "Atendimento inicial mais rápido e profissional no WhatsApp.",
    "Captação de leads com dados essenciais para orçamento.",
    "Padronização de respostas para serviços, horários e dúvidas frequentes.",
    "Encaminhamento mais claro para vendedores, recepção ou atendimento humano.",
  ],
  deliverables: [
    "Mapeamento do fluxo de atendimento",
    "Mensagens e menus escritos com foco em clareza",
    "Estrutura para qualificação de contatos",
    "Integração estratégica com WhatsApp",
    "Ajustes iniciais após testes reais",
  ],
  ctaTitle: "Quer automatizar seu atendimento sem parecer frio?",
  ctaText:
    "Fale com a Norte One e receba uma orientação sobre o melhor fluxo para o seu tipo de negócio.",
  whatsappMessage:
    "Olá, vim pela página de chatbot da Norte One e quero pedir um orçamento para automação no WhatsApp.",
};

export const metadata = {
  title: "Chatbot para WhatsApp | Norte One",
  description:
    "Atendimento automático, qualificação de leads e automação para WhatsApp com padrão premium Norte One.",
};

export default function ChatbotWhatsappPage() {
  return <ServiceSalesPage data={data} />;
}
