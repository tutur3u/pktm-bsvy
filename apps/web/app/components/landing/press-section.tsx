"use client";

import Image from "next/image";
import { pressItems } from "./content";
import { MobileCarousel } from "./mobile-carousel";

export function PressSection() {
  return (
    <>
      <section className="bg-[#1da6e6] py-3 text-center text-xl font-black uppercase tracking-[0.03em] text-white md:text-[2rem]">
        Thông cáo báo chí &amp; nghiên cứu khoa học
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-8 md:px-6 md:py-12">
        <MobileCarousel
          items={pressItems}
          getKey={(item) => item.src}
          previousLabel="Xem bài báo trước"
          nextLabel="Xem bài báo tiếp theo"
          className="md:hidden"
          renderItem={(item) => (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="block rounded-[20px] outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#8ad8ff]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={840}
                height={546}
                className="h-auto w-full"
              />
            </a>
          )}
        />
        <div className="hidden gap-4 md:grid md:grid-cols-3">
          {pressItems.map((item) => (
            <a
              key={item.src}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="block rounded-[20px] outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#8ad8ff]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={840}
                height={546}
                className="h-auto w-full"
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
