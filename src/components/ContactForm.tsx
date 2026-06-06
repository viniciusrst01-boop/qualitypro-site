"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

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
      setStatus({
        type: "success",
        message: "Mensagem enviada. Entraremos em contato em breve.",
      });
    } catch (error) {
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
      className="grid gap-4 rounded-lg border border-sky-300/15 bg-slate-950/45 p-4 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="sr-only">Nome</span>
          <input
            name="name"
            type="text"
            placeholder="Nome"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
            className="input-field"
          />
        </label>

        <label className="grid gap-2">
          <span className="sr-only">E-mail</span>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            maxLength={160}
            required
            className="input-field"
          />
        </label>

        <label className="grid gap-2">
          <span className="sr-only">Telefone</span>
          <input
            name="phone"
            type="tel"
            placeholder="Telefone"
            autoComplete="tel"
            inputMode="tel"
            maxLength={30}
            required
            className="input-field"
          />
        </label>

        <label className="grid gap-2">
          <span className="sr-only">Empresa</span>
          <input
            name="company"
            type="text"
            placeholder="Empresa"
            autoComplete="organization"
            maxLength={120}
            className="input-field"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="sr-only">Mensagem</span>
        <textarea
          name="message"
          placeholder="Como podemos ajudar sua empresa?"
          rows={5}
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
