"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ArrowRightIcon } from "./icons";

type MobileCarouselProps<T> = {
  items: T[];
  getKey: (item: T, index: number) => string;
  renderItem: (item: T, index: number) => ReactNode;
  previousLabel: string;
  nextLabel: string;
  className?: string;
};

export function MobileCarousel<T>({
  items,
  getKey,
  renderItem,
  previousLabel,
  nextLabel,
  className,
}: MobileCarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const maxVisibleDots = 5;

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[index];

  if (!activeItem) {
    return null;
  }

  const showPrevious = () => {
    setIndex((current) => (current - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setIndex((current) => (current + 1) % items.length);
  };

  const visibleDotCount = Math.min(items.length, maxVisibleDots);
  const halfWindow = Math.floor(visibleDotCount / 2);
  const maxStart = Math.max(0, items.length - visibleDotCount);
  const windowStart = Math.min(Math.max(index - halfWindow, 0), maxStart);
  const visibleItems = items.slice(windowStart, windowStart + visibleDotCount);

  return (
    <div className={className}>
      {renderItem(activeItem, index)}

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={showPrevious}
          aria-label={previousLabel}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-[#8ad8ff] bg-white px-3 py-2 text-[0.95rem] font-black uppercase tracking-[0.02em] text-[#0b5ea6] shadow-[0_12px_26px_rgba(33,110,164,0.12)] transition hover:-translate-y-0.5 md:px-4 md:text-sm"
        >
          <ArrowRightIcon className="size-4 rotate-180" />
          Trước
        </button>

        <div className="min-w-0 flex-1">
          <p className="mb-2 text-center text-xs font-bold tracking-[0.04em] text-[#5a92bf]">
            {index + 1} / {items.length}
          </p>
          <div className="flex items-center justify-center gap-2">
            {visibleItems.map((item, visibleIndex) => {
              const itemIndex = windowStart + visibleIndex;

              return (
                <button
                  key={getKey(item, itemIndex)}
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  aria-label={`Chuyển đến slide ${itemIndex + 1}`}
                  aria-pressed={itemIndex === index}
                  className={`h-2.5 rounded-full transition ${
                    itemIndex === index
                      ? "w-7 bg-[#0b5ea6]"
                      : "w-2.5 bg-[#9fdcff]"
                  }`}
                >
                  <span className="sr-only">Slide {itemIndex + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={showNext}
          aria-label={nextLabel}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-[#8ad8ff] bg-white px-3 py-2 text-[0.95rem] font-black uppercase tracking-[0.02em] text-[#0b5ea6] shadow-[0_12px_26px_rgba(33,110,164,0.12)] transition hover:-translate-y-0.5 md:px-4 md:text-sm"
        >
          Tiếp
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
