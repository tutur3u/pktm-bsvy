"use client";

import Image from "next/image";
import { pressImages } from "./content";
import { MobileCarousel } from "./mobile-carousel";

export function PressSection() {
  return (
    <>
      <section className="bg-[#1da6e6] py-3 text-center text-xl font-black uppercase tracking-[0.03em] text-white md:text-[2rem]">
        Thông cáo báo chí &amp; nghiên cứu khoa học
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-8 md:px-6 md:py-12">
        <MobileCarousel
          items={pressImages}
          getKey={(image) => image.src}
          previousLabel="Xem bài báo trước"
          nextLabel="Xem bài báo tiếp theo"
          className="md:hidden"
          renderItem={(image) => (
            <div>
              <Image
                src={image.src}
                alt={image.alt}
                width={840}
                height={546}
                className="h-auto w-full"
              />
            </div>
          )}
        />
        <div className="hidden gap-4 md:grid md:grid-cols-3">
          {pressImages.map((image) => (
            <div key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={840}
                height={546}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
