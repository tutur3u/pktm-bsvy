"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { ZALO_CONTACT_CARD } from "./content";

export function ZaloDialogButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex h-12 min-w-12 cursor-pointer items-center justify-center rounded-full bg-white px-3.5 text-[#1768d8] shadow-[0_14px_30px_rgba(12,74,137,0.18)] ring-1 ring-[#ccecff] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1768d8] md:h-14 md:min-w-14 md:px-4 ${className ?? ""}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="sr-only">{label}</span>
        <span className="text-sm font-black leading-none text-[#1768d8] md:text-base">
          Zalo
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#102f4d]/72 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-[min(92vw,430px)] rounded-[26px] bg-white p-3 shadow-[0_28px_80px_rgba(4,29,54,0.32)] ring-1 ring-white/70">
            <h2 id={titleId} className="sr-only">
              {label}
            </h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/92 text-[#1d4264] shadow-[0_10px_24px_rgba(15,52,83,0.16)] ring-1 ring-[#d8efff] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1768d8]"
            >
              <span className="sr-only">Đóng</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="size-5"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <Image
              src={ZALO_CONTACT_CARD.src}
              alt={ZALO_CONTACT_CARD.alt}
              width={ZALO_CONTACT_CARD.width}
              height={ZALO_CONTACT_CARD.height}
              className="h-auto max-h-[82vh] w-full rounded-[20px] object-contain"
              sizes="(min-width: 768px) 430px, 92vw"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
