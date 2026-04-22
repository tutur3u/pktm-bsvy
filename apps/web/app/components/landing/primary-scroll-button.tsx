"use client";

import type { MouseEvent, ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

export function PrimaryScrollButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) {
      return;
    }

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });

    window.history.pushState(null, "", href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-[18px] bg-[#0aa75c] px-6 py-4 text-center text-lg font-black uppercase tracking-[0.02em] text-white shadow-[0_14px_28px_rgba(10,167,92,0.35)] transition hover:-translate-y-0.5 hover:bg-[#099651] ${className ?? ""}`}
    >
      {children}
      <ArrowRightIcon className="size-5 shrink-0" />
    </a>
  );
}
