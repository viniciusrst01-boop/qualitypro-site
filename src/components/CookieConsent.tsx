"use client";

import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "qualitypro_cookie_notice_v2";

type NoticeStatus = "seen" | "pending";

export default function CookieConsent() {
  const [status, setStatus] = useState<NoticeStatus>("pending");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored === "seen") {
      setStatus("seen");
    }

    setLoaded(true);
  }, []);

  function closeNotice() {
    window.localStorage.setItem(STORAGE_KEY, "seen");
    setStatus("seen");
  }

  return (
    <>
      <Analytics />

      {loaded && status === "pending" && (
        <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 lg:px-0 lg:pb-0">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-xl border border-cyan-300/20 bg-[#101d34]/95 p-4 text-sm text-slate-200 shadow-2xl shadow-slate-950/40 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:max-w-none lg:rounded-none lg:border-x-0 lg:border-b-0 lg:border-t lg:border-cyan-300/15 lg:bg-[#143052]/95 lg:px-8 lg:py-4">
            <div className="max-w-3xl lg:mx-auto lg:max-w-none">
              <p className="font-black text-white lg:hidden">Cookies e privacidade</p>
              <p className="mt-1 leading-6 text-slate-300 lg:mt-0 lg:text-center lg:text-[0.82rem] lg:leading-5 lg:text-slate-100">
                Usamos cookies essenciais e dados de navegação para melhorar o
                site e acompanhar o desempenho das páginas. Veja nossa{" "}
                <Link
                  href="/politica-de-privacidade"
                  className="font-bold text-cyan-300 underline-offset-4 hover:underline"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={closeNotice}
                className="rounded-md bg-cyan-400 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300 lg:px-8 lg:py-2 lg:text-xs lg:uppercase lg:tracking-wide"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
