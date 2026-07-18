"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

type ProductCheckoutButtonProps = {
  productId: string;
  className: string;
  priceLabel?: string;
  testMode?: boolean;
};

export default function ProductCheckoutButton({
  productId,
  className,
  priceLabel = "R$ 100",
  testMode = false,
}: ProductCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isTestMode, setIsTestMode] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setIsTestMode(Boolean(searchParams.get("teste")?.trim()));
  }, []);

  async function handleCheckout() {
    setIsLoading(true);
    setMessage("");
    setCheckoutUrl("");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const testKey = searchParams.get("teste")?.trim();
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          ...(testMode ? { testMode: true } : {}),
          ...(testKey ? { testKey } : {}),
        }),
        signal: controller.signal,
      });
      window.clearTimeout(timeoutId);

      const data = (await response.json()) as {
        checkoutUrl?: string;
        preferenceId?: string;
        message?: string;
      };

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.message || "Nao foi possivel iniciar o pagamento.");
      }

      setCheckoutUrl(data.checkoutUrl);
      if (data.preferenceId) {
        window.localStorage.setItem(
          "qualitypro_pending_checkout",
          JSON.stringify({
            preferenceId: data.preferenceId,
            productId,
            testMode,
            createdAt: Date.now(),
          }),
        );
      }
      window.location.assign(data.checkoutUrl);

      window.setTimeout(() => {
        setMessage(
          "Se o Mercado Pago nao abrir automaticamente, toque no link abaixo.",
        );
        setIsLoading(false);
      }, 1200);
    } catch (error) {
      window.clearTimeout(timeoutId);
      setMessage(
        error instanceof DOMException && error.name === "AbortError"
          ? "A conexao demorou para responder. Tente novamente ou use o link abaixo."
          : error instanceof Error
          ? error.message
          : "Nao foi possivel iniciar o pagamento.",
      );
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-auto">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={isLoading}
        className={`${className} disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {isLoading
          ? "Abrindo pagamento..."
          : testMode || isTestMode
            ? "Comprar teste por R$ 0,01"
            : `Comprar por ${priceLabel}`}
        {!isLoading && <ArrowRight size={16} />}
      </button>
      {message && (
        <p className="mt-3 text-center text-xs font-bold text-red-600">
          {message}
        </p>
      )}
      {checkoutUrl && (
        <a
          href={checkoutUrl}
          className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-sky-300/70 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-sky-600 transition hover:bg-sky-50"
        >
          Abrir Mercado Pago
        </a>
      )}
    </div>
  );
}
