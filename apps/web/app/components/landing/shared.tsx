import type { ReactNode } from "react";
import type { QuickContact, Tone } from "./content";
import {
  ArrowRightIcon,
  MessengerIcon,
  PhoneIcon,
} from "./icons";

export function toneClasses(tone: Tone) {
  if (tone === "green") {
    return "bg-gradient-to-r from-[#dfffe9] to-[#bff8d0]";
  }

  if (tone === "blue") {
    return "bg-gradient-to-r from-[#dff4ff] to-[#caecff]";
  }

  return "bg-gradient-to-r from-white to-[#eef4f8]";
}

export function QuickContactButton({
  label,
  href,
  kind,
  className,
}: QuickContact & { className?: string }) {
  const icon =
    kind === "phone" ? (
      <PhoneIcon className="size-5 md:size-6" />
    ) : kind === "message" ? (
      <MessengerIcon className="size-5 md:size-6" />
    ) : (
      <span className="text-sm font-black leading-none text-[#1768d8] md:text-base">
        Zalo
      </span>
    );

  return (
    <a
      href={href}
      className={`inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-white px-3.5 text-[#1768d8] shadow-[0_14px_30px_rgba(12,74,137,0.18)] ring-1 ring-[#ccecff] transition hover:-translate-y-0.5 md:h-14 md:min-w-14 md:px-4 ${className ?? ""}`}
    >
      <span className="sr-only">{label}</span>
      {icon}
    </a>
  );
}

export function PrimaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[18px] bg-[#0aa75c] px-6 py-4 text-center text-lg font-black uppercase tracking-[0.02em] text-white shadow-[0_14px_28px_rgba(10,167,92,0.35)] transition hover:-translate-y-0.5 hover:bg-[#099651] ${className ?? ""}`}
    >
      {children}
      <ArrowRightIcon className="size-5 shrink-0" />
    </a>
  );
}

export function SectionBand({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[20px] px-5 py-3 text-center text-xl font-black uppercase tracking-[0.02em] shadow-[0_10px_24px_rgba(35,130,184,0.12)] md:text-[2rem] ${className ?? ""}`}
    >
      {title}
    </div>
  );
}
