"use client";

import { useEffect } from "react";

type PendingCheckout = {
  preferenceId?: string;
  productId?: string;
  createdAt?: number;
};

const STORAGE_KEY = "qualitypro_pending_checkout";

export default function CheckoutRecovery() {
  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const hasPaymentLookup =
      currentUrl.searchParams.has("payment_id") ||
      currentUrl.searchParams.has("collection_id") ||
      currentUrl.searchParams.has("merchant_order_id") ||
      currentUrl.searchParams.has("preference_id");

    if (hasPaymentLookup) {
      return;
    }

    const storedCheckout = window.localStorage.getItem(STORAGE_KEY);

    if (!storedCheckout) {
      return;
    }

    try {
      const pendingCheckout = JSON.parse(storedCheckout) as PendingCheckout;
      const preferenceId = pendingCheckout.preferenceId?.trim();

      if (!preferenceId) {
        return;
      }

      currentUrl.searchParams.set("preference_id", preferenceId);
      window.location.replace(currentUrl.toString());
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return null;
}
