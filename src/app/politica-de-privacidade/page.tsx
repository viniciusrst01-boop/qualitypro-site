import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da QualityPro Solutions para tratamento de dados enviados pelo site.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

const sections = [
  {
    title: "1. Quem somos",
    text: "A QualityPro Solutions atua com consultoria em Gestão da Qualidade, ISO 9001, auditorias, indicadores e melhoria contínua. Esta política explica como tratamos informações enviadas por visitantes do site.",
  },
  {
    title: "2. Dados que podemos coletar",
    text: "Podemos coletar nome, e-mail, empresa, mensagem e telefone, quando informado, por meio do formulário de contato. Também podemos receber dados técnicos básicos de navegação, como páginas acessadas, origem do acesso e métricas de uso do site.",
  },
  {
    title: "3. Como usamos os dados",
    text: "Usamos as informações para responder solicitações, entender a necessidade da empresa, melhorar o site, acompanhar resultados de campanhas e manter a segurança dos nossos canais digitais.",
  },
  {
    title: "4. Compartilhamento de informações",
    text: "Não vendemos dados pessoais. Podemos utilizar fornecedores de tecnologia, como hospedagem, envio de e-mails e analytics, somente para operar o site e atender aos contatos recebidos.",
  },
  {
    title: "5. Armazenamento e segurança",
    text: "Mantemos os dados pelo tempo necessário para atendimento, relacionamento comercial e obrigações legais. Aplicamos medidas razoáveis de segurança para reduzir riscos de acesso indevido.",
  },
  {
    title: "6. Seus direitos",
    text: "Você pode solicitar acesso, correção, atualização ou exclusão dos seus dados pessoais, conforme a legislação aplicável. Para isso, entre em contato pelo e-mail informado nesta página.",
  },
  {
    title: "7. Atualizações desta política",
    text: "Esta política pode ser atualizada para refletir mudanças no site, nos serviços ou em exigências legais. A versão mais recente ficará sempre disponível nesta página.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-sky-400/10 bg-slate-900/70 px-4 py-8 sm:px-5">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm font-semibold text-cyan-300">
            Voltar para o site
          </Link>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            QualityPro Solutions
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Transparência sobre como tratamos as informações enviadas pelo site.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-5 sm:py-14">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-800 bg-slate-900/55 p-6 shadow-2xl shadow-slate-950/30 sm:p-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xl font-black text-white">
                  {section.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-300">{section.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-sky-400/20 bg-sky-500/10 p-5">
            <h2 className="font-black text-white">Contato</h2>
            <p className="mt-2 leading-7 text-slate-300">
              Para dúvidas ou solicitações sobre privacidade, escreva para{" "}
              <a
                href="mailto:contato@qualityprosolutions.com.br"
                className="font-semibold text-cyan-300"
              >
                contato@qualityprosolutions.com.br
              </a>
              .
            </p>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            Última atualização: 10 de junho de 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
