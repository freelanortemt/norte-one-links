import ServiceSalesPage, {
  type ServiceSalesPageData,
} from "../../components/ServiceSalesPage";

const data: ServiceSalesPageData = {
  badge: "Aplicativos, CRM e sistemas web",
  title: "Tecnologia sob medida para organizar operação, clientes e crescimento.",
  subtitle:
    "Desenvolvemos aplicativos, CRMs e sistemas web para empresas que precisam sair do improviso e controlar melhor processos, atendimento e dados.",
  image: "/images/apps-premium.png",
  priceLabel: "Projeto sob orçamento",
  valueTitle: "Menos tarefas manuais. Mais controle sobre o que faz a empresa crescer.",
  valueText:
    "Um sistema bem desenhado reduz retrabalho, centraliza informações e ajuda a equipe a operar com mais consistência. O valor está em transformar rotina dispersa em processo claro.",
  proofTitle: "A empresa ganha visão e previsibilidade.",
  proofText:
    "Leads, clientes, etapas, solicitações, pedidos, agenda ou indicadores podem sair de planilhas soltas e entrar em uma interface feita para o fluxo real do negócio.",
  functionTitle: "Criamos a ferramenta em torno da operação.",
  functionText:
    "Mapeamos o processo, desenhamos a experiência, estruturamos telas e entregamos uma solução digital pensada para uso diário, gestão e evolução.",
  benefits: [
    "CRM para organizar contatos, etapas comerciais e relacionamento.",
    "Aplicativos para serviços, agendamentos, comunidades ou produtos digitais.",
    "Sistemas web para controlar pedidos, rotinas internas e dados.",
    "Área administrativa para acompanhar e atualizar informações com mais autonomia.",
  ],
  deliverables: [
    "Diagnóstico do processo atual",
    "Protótipo e estrutura de telas",
    "Interface mobile first e profissional",
    "Painel administrativo quando necessário",
    "Arquitetura pensada para evolução do projeto",
  ],
  ctaTitle: "Tem uma ideia de app, CRM ou sistema para sua empresa?",
  ctaText:
    "Fale com a Norte One e vamos entender o processo antes de definir escopo, prazo e investimento.",
  whatsappMessage:
    "Olá, vim pela página de aplicativos e CRM da Norte One e quero pedir um orçamento para meu projeto.",
};

export const metadata = {
  title: "Aplicativos, CRM e Sistemas Web | Norte One",
  description:
    "Aplicativos, CRM e sistemas web sob medida para organizar processos, clientes e operação empresarial.",
};

export default function AplicativosCrmPage() {
  return <ServiceSalesPage data={data} />;
}
