"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type ProductCheckoutButtonProps = {
  productId: string;
  className: string;
};

export default function ProductCheckoutButton({
  productId,
  className,
}: ProductCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleCheckout() {
    setIsLoading(true);
    setMessage("");

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const testKey = searchParams.get("teste")?.trim();
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, ...(testKey ? { testKey } : {}) }),
      });
      const data = (await response.json()) as {
        checkoutUrl?: string;
        message?: string;
      };

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.message || "Nao foi possivel iniciar o pagamento.");
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      setMessage(
        error instanceof Error
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
        {isLoading ? "Abrindo pagamento..." : "Comprar por R$ 100"}
        {!isLoading && <ArrowRight size={16} />}
      </button>
      {message && (
        <p className="mt-3 text-center text-xs font-bold text-red-600">
          {message}
        </p>
      )}
    </div>
  );
}
