"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import TrackedLink from "@/components/TrackedLink";

const desktopNavigation = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Dashboards", "#dashboards"],
  ["Indicadores", "#cases"],
  ["Contato", "#contato"],
];

const mobileNavigation = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Desafios", "#desafios"],
  ["Serviços", "#servicos"],
  ["Dashboards", "#dashboards"],
  ["Indicadores", "#cases"],
  ["Diferenciais", "#diferenciais"],
  ["Contato", "#contato"],
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-400/10 bg-slate-950/80 shadow-lg shadow-cyan-950/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
        <a
          href="#inicio"
          className="block shrink-0"
          aria-label="QualityPro Solutions - início"
          onClick={closeMenu}
        >
          <Image
            src="/logo-optimized.webp"
            alt=""
            width={600}
            height={182}
            priority
            className="h-auto w-28 sm:w-44"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 text-sm font-semibold text-slate-300 lg:ml-8 lg:flex xl:ml-10"
        >
          {desktopNavigation.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group py-2 transition hover:text-cyan-300 focus-visible:text-cyan-300"
            >
              <span className="nav-link-underline">{label}</span>
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-cyan-300/20 text-cyan-200 hover:border-cyan-300/45 hover:bg-cyan-400/10 lg:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <TrackedLink
            href="#contato"
            eventLabel="Solicitar Consultoria"
            eventLocation="header"
            onClick={closeMenu}
            className="whitespace-nowrap rounded-md bg-amber-400 px-2 py-2 text-[9px] font-black uppercase leading-none text-slate-950 shadow-lg shadow-amber-500/15 sm:px-5 sm:py-3 sm:text-sm sm:normal-case sm:leading-normal"
          >
            Solicitar Consultoria
          </TrackedLink>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`grid border-t border-cyan-400/10 bg-slate-950/95 transition-[grid-template-rows,opacity] duration-200 lg:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          aria-hidden={!isMenuOpen}
          className="overflow-hidden"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-3 sm:px-5">
            {mobileNavigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
