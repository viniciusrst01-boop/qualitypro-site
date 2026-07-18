export type PaidProduct = {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  fileName: string;
};

export const paidProducts: PaidProduct[] = [
  {
    id: "kit-auditoria-iso-9001",
    name: "Kit Auditoria ISO 9001",
    description:
      "Modelos profissionais para planejar, executar, registrar e acompanhar auditorias internas ISO 9001.",
    priceInCents: 10000,
    fileName: "private-products/private-products/QualityPro-Kit-Auditoria-ISO-9001.zip",
  },
  {
    id: "kit-nao-conformidade-acao-corretiva",
    name: "Kit Nao Conformidade e Acao Corretiva",
    description:
      "Documentos e controles para registrar nao conformidades, tratar causas e verificar a eficacia das acoes.",
    priceInCents: 6700,
    fileName: "private-products/private-products/QualityPro-Kit-Nao-Conformidade-Acao-Corretiva.zip",
  },
  {
    id: "combo-auditoria-nao-conformidade",
    name: "Combo Auditoria + Nao Conformidade",
    description:
      "Pacote combinado para estruturar auditorias internas e controlar nao conformidades em um unico conjunto.",
    priceInCents: 14700,
    fileName: "private-products/private-products/QualityPro-Combo-Auditoria-ISO-9001-Nao-Conformidade.zip",
  },
  {
    id: "kit-controle-documentos",
    name: "Kit Controle de Documentos",
    description:
      "Modelos e controles para organizar documentos, registros e evidencias do Sistema de Gestao da Qualidade.",
    priceInCents: 10000,
    fileName: "private-products/private-products/QualityPro-Kit-Controle-de-Documentos.zip",
  },
];

export function getPaidProduct(productId: string) {
  return paidProducts.find((product) => product.id === productId);
}
