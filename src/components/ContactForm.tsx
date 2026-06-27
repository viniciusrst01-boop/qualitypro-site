"use client";

import { track } from "@vercel/analytics";
import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import Link from "next/link";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track("contact_form_submit", { location: "contact_section" });
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.message || "Não foi possível enviar a mensagem.");
      }

      form.reset();
      track("contact_form_success", { location: "contact_section" });
      setStatus({
        type: "success",
        message: "Mensagem enviada. Entraremos em contato em breve.",
      });
    } catch (error) {
      track("contact_form_error", { location: "contact_section" });
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível enviar. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 rounded-lg border border-sky-300/15 bg-slate-950/45 p-3.5 sm:gap-4 sm:p-6"
    >
      <div className="grid items-start gap-3 sm:grid-cols-2 sm:gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">Nome</span>
          <input
            name="name"
            type="text"
            placeholder="Seu nome"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
            className="input-field"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">E-mail</span>
          <input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            autoComplete="email"
            maxLength={160}
            required
            className="input-field"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">
            Telefone{" "}
            <span className="font-normal text-slate-400">(opcional)</span>
          </span>
          <input
            name="phone"
            type="tel"
            placeholder="(21) 99999-9999"
            autoComplete="tel"
            inputMode="tel"
            maxLength={20}
            pattern="(?:\+?55\s?)?\(?[1-9]{2}\)?\s?\d{4,5}[-\s]?\d{4}"
            title="Informe o DDD e o número, por exemplo: (21) 99999-9999."
            aria-describedby="phone-help"
            className="input-field"
          />
          <span id="phone-help" className="text-xs leading-5 text-slate-400">
            Se preencher, inclua o DDD.
          </span>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">
            Empresa{" "}
            <span className="font-normal text-slate-400">(opcional)</span>
          </span>
          <input
            name="company"
            type="text"
            placeholder="Nome da empresa"
            autoComplete="organization"
            maxLength={120}
            className="input-field"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-slate-200">Mensagem</span>
        <textarea
          name="message"
          placeholder="Como podemos ajudar sua empresa?"
          rows={3}
          minLength={10}
          maxLength={2000}
          required
          className="input-field resize-none"
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Não preencha este campo
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-6 py-3 font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle size={18} className="animate-spin" />
            Enviando
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar mensagem
          </>
        )}
      </button>

      <p className="text-xs leading-5 text-slate-400">
        Ao enviar, você concorda com nossa{" "}
        <Link
          href="/politica-de-privacidade"
          className="font-semibold text-cyan-300 hover:text-cyan-200"
        >
          Política de Privacidade
        </Link>
        .
      </p>

      {status.type !== "idle" && (
        <p
          role="status"
          className={`flex items-center gap-2 text-sm ${
            status.type === "success" ? "text-emerald-300" : "text-red-300"
          }`}
        >
          {status.type === "success" && <CheckCircle2 size={18} />}
          {status.message}
        </p>
      )}
    </form>
  );
}
