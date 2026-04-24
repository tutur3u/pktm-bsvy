import type { ReactNode } from "react";
import type { QuickContact, Tone } from "./content";
import { ArrowRightIcon, MessengerIcon, PhoneIcon } from "./icons";
import { ZaloDialogButton } from "./zalo-dialog-button";

export function credentialToneStyles(tone: Tone) {
  if (tone === "lavender") {
    return {
      card: "bg-gradient-to-r from-[#eff2ff] to-[#d8ddff] ring-[#d9dfff] shadow-[0_18px_38px_rgba(103,120,255,0.14)]",
      icon: "bg-[#6b7cff] shadow-[0_12px_24px_rgba(107,124,255,0.28)]",
      title: "text-[#2f3f8b]",
      body: "text-[#33476d]",
    };
  }

  if (tone === "mint") {
    return {
      card: "bg-gradient-to-r from-[#e4fffa] to-[#c7f6ef] ring-[#d0f5ee] shadow-[0_18px_38px_rgba(20,184,166,0.12)]",
      icon: "bg-[#10b8a4] shadow-[0_12px_24px_rgba(16,184,164,0.24)]",
      title: "text-[#155b58]",
      body: "text-[#2d5f66]",
    };
  }

  if (tone === "green") {
    return {
      card: "bg-gradient-to-r from-[#e7ffef] to-[#cbf6d6] ring-[#d9f8e1] shadow-[0_18px_38px_rgba(18,184,105,0.12)]",
      icon: "bg-[#16b86a] shadow-[0_12px_24px_rgba(22,184,106,0.24)]",
      title: "text-[#1b5d3b]",
      body: "text-[#295549]",
    };
  }

  if (tone === "blue") {
    return {
      card: "bg-gradient-to-r from-[#dff3ff] to-[#b7ddff] ring-[#cfe8ff] shadow-[0_18px_38px_rgba(33,110,164,0.12)]",
      icon: "bg-[#1e9ae8] shadow-[0_12px_24px_rgba(30,154,232,0.24)]",
      title: "text-[#1d5389]",
      body: "text-[#2b4d74]",
    };
  }

  return {
    card: "bg-gradient-to-r from-[#fff4e3] to-[#ffe5c4] ring-[#ffe7cb] shadow-[0_18px_38px_rgba(255,153,72,0.12)]",
    icon: "bg-[#ff9c4a] shadow-[0_12px_24px_rgba(255,156,74,0.24)]",
    title: "text-[#8d4e1f]",
    body: "text-[#6f553f]",
  };
}

export function QuickContactButton({
  label,
  href,
  kind,
  className,
}: QuickContact & { className?: string }) {
  if (kind === "text" && label.toLowerCase() === "zalo") {
    return <ZaloDialogButton label={label} href={href} className={className} />;
  }

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
  const opensNewTab = href.startsWith("http");

  return (
    <a
      href={href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer" : undefined}
      className={`inline-flex h-12 min-w-12 cursor-pointer items-center justify-center rounded-full bg-white px-3.5 text-[#1768d8] shadow-[0_14px_30px_rgba(12,74,137,0.18)] ring-1 ring-[#ccecff] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1768d8] md:h-14 md:min-w-14 md:px-4 ${className ?? ""}`}
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
      className={`rounded-[20px] border-4 border-[#d8efff] px-5 py-3 text-center text-xl font-black uppercase tracking-[0.02em] shadow-[0_10px_24px_rgba(35,130,184,0.12)] md:text-[2rem] ${className ?? ""}`}
    >
      {title}
    </div>
  );
}
