"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TrackedLink from "@/components/TrackedLink";

const desktopNavigation = [
  ["Início", "/#inicio"],
  ["Sobre", "/#sobre"],
  ["Produtos", "/produtos"],
  ["Serviços", "/#servicos"],
  ["Contato", "/#contato"],
];

const mobileNavigation = [
  ["Início", "/#inicio"],
  ["Sobre", "/#sobre"],
  ["Produtos", "/produtos"],
  ["Desafios", "/#desafios"],
  ["Serviços", "/#servicos"],
  ["Diferenciais", "/#diferenciais"],
  ["Contato", "/#contato"],
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  function isActive(href: string) {
    return href === "/produtos" && pathname === "/produtos";
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-400/10 bg-slate-950/80 shadow-lg shadow-cyan-950/20 backdrop-blur-xl">
      <div className="qhd-header-inner mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
        <a
          href="/#inicio"
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
            className="qhd-header-logo h-auto w-40 sm:w-44"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="qhd-header-nav hidden items-center gap-8 text-sm font-semibold text-slate-300 lg:ml-8 lg:flex xl:ml-10"
        >
          {desktopNavigation.map(([label, href]) => {
            const active = isActive(href);

            return (
              <a
                key={href}
                href={href}
                className={`group py-2 transition hover:text-cyan-300 focus-visible:text-cyan-300 ${
                  active ? "text-cyan-300" : ""
                }`}
              >
                <span
                  className={`nav-link-underline ${
                    active ? "nav-link-underline-active" : ""
                  }`}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-cyan-300/20 text-cyan-200 hover:border-cyan-300/45 hover:bg-cyan-400/10 lg:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <TrackedLink
            href="/#contato"
            eventLabel="Solicitar Consultoria"
            eventLocation="header"
            onClick={closeMenu}
            className="qhd-header-cta hidden whitespace-nowrap rounded-md bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/15 lg:inline-flex"
          >
            Solicitar Consultoria
          </TrackedLink>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`grid border-t border-cyan-400/10 bg-slate-950/92 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
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
          <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4 sm:px-6">
            {mobileNavigation.map(([label, href]) => {
              const isContact = href === "/#contato";
              const active = isActive(href);

              return (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className={
                    isContact
                      ? "py-2.5 text-sm font-black text-cyan-300 hover:text-cyan-200"
                      : `py-2.5 text-sm font-semibold hover:text-cyan-300 ${
                          active ? "text-cyan-300" : "text-slate-200"
                        }`
                  }
                >
                  {label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
