"use client";

import Image from "next/image";
import { severityCards } from "./content";
import { MobileCarousel } from "./mobile-carousel";

export function SeveritySection() {
  return (
    <section className="bg-[#fff2e4] py-10 md:py-14">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <h2 className="text-center text-[1.85rem] font-black uppercase leading-tight text-[#ff7a00] md:text-[3rem]">
          Hiểu đúng về mức độ lõm ngực của con
        </h2>
        <MobileCarousel
          items={severityCards}
          getKey={(card) => card.src}
          previousLabel="Xem mức độ trước"
          nextLabel="Xem mức độ tiếp theo"
          className="mt-8 md:hidden"
          renderItem={(card) => (
            <div className="mx-auto w-full max-w-[390px] overflow-hidden rounded-[28px] shadow-[0_22px_56px_rgba(173,102,18,0.18)]">
              <Image
                src={card.src}
                alt={card.alt}
                width={812}
                height={1666}
                className="h-auto w-full"
              />
            </div>
          )}
        />
        <div className="mt-8 hidden gap-5 md:grid md:grid-cols-3">
          {severityCards.map((card) => (
            <div
              key={card.src}
              className="overflow-hidden rounded-[28px] shadow-[0_22px_56px_rgba(173,102,18,0.18)]"
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={812}
                height={1666}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[1100px] text-center text-[1.3rem] font-black leading-snug text-[#0b5ea6] md:text-[1.9rem]">
          <span className="text-[#ff7a00]">Lời khuyên:</span> Phẫu thuật sớm (từ
          6 - 14 tuổi) đạt hiệu quả cao nhất khi xương còn mềm, giảm nguy cơ
          biến chứng và tâm lý mặc cảm.
        </p>

        <div className="mt-4">
          <Image
            src="/assets/quote.png"
            alt="Lời khuyên của PGS TS BS. Trần Thanh Vỹ."
            width={2602}
            height={1167}
            className="mx-auto h-auto w-full max-w-[1120px]"
          />
        </div>
      </div>
    </section>
  );
}
