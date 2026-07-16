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
    fileName: "kit-auditoria-iso-9001-v1.0.zip",
  },
  {
    id: "kit-nao-conformidade-acao-corretiva",
    name: "Kit Nao Conformidade e Acao Corretiva",
    description:
      "Documentos e controles para registrar nao conformidades, tratar causas e verificar a eficacia das acoes.",
    priceInCents: 10000,
    fileName: "kit-nao-conformidade-acao-corretiva-v1.0.zip",
  },
  {
    id: "combo-auditoria-nao-conformidade",
    name: "Combo Auditoria + Nao Conformidade",
    description:
      "Pacote combinado para estruturar auditorias internas e controlar nao conformidades em um unico conjunto.",
    priceInCents: 10000,
    fileName: "combo-auditoria-nao-conformidade-v1.0.zip",
  },
];

export function getPaidProduct(productId: string) {
  return paidProducts.find((product) => product.id === productId);
}
