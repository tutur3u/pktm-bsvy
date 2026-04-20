import Image from "next/image";
import { symptomItems } from "./content";
import { SectionBand } from "./shared";

export function SymptomsSection() {
  return (
    <section className="border-y border-[#a8ddfb] bg-[#dff2ff]">
      <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-4 md:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)]">
          <div className="space-y-3">
            <SectionBand
              title="Dấu hiệu dị tật lõm ngực"
              className="bg-[#1da6e6] text-white"
            />
            {symptomItems.map((item) => (
              <div
                key={item.strong}
                className="rounded-[20px] border-2 border-[#36a9df] bg-white px-5 py-4 text-center text-[1.05rem] leading-snug text-[#2c3b4b] shadow-[0_12px_28px_rgba(33,110,164,0.08)] md:text-[1.25rem]"
              >
                <span className="font-bold">{item.strong}</span>
                <br />
                <span className="font-medium">{item.rest}</span>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-[28px]">
            <Image
              src="/assets/register.png"
              alt="Bé có dấu hiệu lõm ngực trong phần lời kêu gọi đăng ký khám."
              width={2880}
              height={1716}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
