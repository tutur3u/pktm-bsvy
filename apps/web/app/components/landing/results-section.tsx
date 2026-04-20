"use client";

import Image from "next/image";
import { MobileCarousel } from "./mobile-carousel";
import { resultImages } from "./content";

export function ResultsSection() {
  return (
    <section className="bg-[#e2f4ff] py-10 md:py-14">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <h2 className="text-center text-[1.9rem] font-black uppercase leading-tight text-[#0b5ea6] md:text-[3rem]">
          Kết quả điều trị lõm ngực bằng phương pháp NUSS
        </h2>
        <div className="mt-8">
          <Image
            src="/assets/result-1.png"
            alt="Minh họa trước và sau điều trị lõm ngực bằng phương pháp Nuss."
            width={2684}
            height={1200}
            className="mx-auto h-auto w-full max-w-[1060px]"
          />
        </div>
        <MobileCarousel
          items={resultImages}
          getKey={(image) => image.src}
          previousLabel="Xem kết quả trước"
          nextLabel="Xem kết quả tiếp theo"
          className="mt-4 md:hidden"
          renderItem={(image) => (
            <div className="overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_20px_50px_rgba(33,110,164,0.12)] ring-1 ring-[#cbeaff]">
              <Image
                src={image.src}
                alt={image.alt}
                width={1160}
                height={816}
                className="h-fit w-full rounded-[22px]"
              />
            </div>
          )}
        />
        <div className="mt-4 hidden gap-4 md:grid md:grid-cols-2">
          {resultImages.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_20px_50px_rgba(33,110,164,0.12)] ring-1 ring-[#cbeaff]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1160}
                height={816}
                className="h-fit w-full rounded-[22px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
