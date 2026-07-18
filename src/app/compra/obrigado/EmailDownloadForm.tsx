"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";

type EmailDownloadFormProps = {
  productName: string;
  token: string;
};

export default function EmailDownloadForm({
  productName,
  token,
}: EmailDownloadFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/send-download-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          token,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.message || "Nao foi possivel enviar o e-mail.");
      }

      setStatus("success");
      setMessage("Link enviado. Verifique sua caixa de entrada e o spam.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Nao foi possivel enviar o e-mail.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-full max-w-xl rounded-xl border border-cyan-400/25 bg-slate-900/70 p-5 text-left shadow-[0_20px_50px_rgba(8,47,73,0.25)]"
    >
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
          <Mail size={20} strokeWidth={1.9} />
        </span>
        <div>
          <h2 className="text-lg font-black text-white">
            Receber material por e-mail
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-300">
            Informe um e-mail para receber o link seguro do{" "}
            <strong className="text-white">{productName}</strong>. O mesmo link
            tambem fica disponivel por 3 dias.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="download-email">
          E-mail para receber o material
        </label>
        <input
          id="download-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Digite seu e-mail"
          className="min-h-12 flex-1 rounded-md border border-cyan-400/25 bg-slate-950 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-cyan-400/60 px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Enviar link"}
          <Send size={16} />
        </button>
      </div>

      {message ? (
        <p
          className={`mt-3 text-sm font-semibold ${
            status === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
