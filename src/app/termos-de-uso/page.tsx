import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | QualityPro Solutions",
  description:
    "Termos de Uso do site da QualityPro Solutions para visitantes e interessados em consultoria.",
};

const sections = [
  {
    title: "1. Aceitação dos termos",
    text: "Ao acessar este site, você concorda com estes Termos de Uso. Caso não concorde com alguma condição, recomendamos não utilizar o site.",
  },
  {
    title: "2. Finalidade do site",
    text: "O site apresenta informações institucionais sobre a QualityPro Solutions, seus serviços de consultoria em Gestão da Qualidade e canais de contato para interessados.",
  },
  {
    title: "3. Solicitações de contato",
    text: "O envio de mensagens pelo formulário não cria contratação automática. Propostas, escopos, prazos e valores serão definidos separadamente, conforme análise da necessidade de cada empresa.",
  },
  {
    title: "4. Conteúdo e propriedade intelectual",
    text: "Textos, marcas, elementos visuais e demais conteúdos do site pertencem à QualityPro Solutions ou são utilizados de forma autorizada. A reprodução sem autorização prévia não é permitida.",
  },
  {
    title: "5. Responsabilidades",
    text: "Buscamos manter as informações corretas e atualizadas, mas o conteúdo do site tem caráter informativo e pode ser ajustado a qualquer momento. O uso das informações é de responsabilidade do visitante.",
  },
  {
    title: "6. Links e serviços de terceiros",
    text: "O site pode utilizar ferramentas externas de hospedagem, analytics, envio de e-mails ou links para outros ambientes. Cada terceiro possui suas próprias regras e políticas.",
  },
  {
    title: "7. Alterações dos termos",
    text: "Estes termos podem ser atualizados para refletir mudanças no site, nos serviços ou em exigências legais. A versão publicada nesta página será considerada a versão vigente.",
  },
];

export default function TermsOfUsePage() {
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
            Termos de Uso
          </h1>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Condições gerais para navegação e uso das informações deste site.
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
              Para dúvidas sobre estes termos, escreva para{" "}
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
