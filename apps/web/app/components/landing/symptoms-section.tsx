import Image from "next/image";
import { APPOINTMENT_LINK, symptomItems, symptomRegisterCallout } from "./content";
import { PrimaryScrollButton } from "./primary-scroll-button";
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

          <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_44px_rgba(33,110,164,0.14)]">
            <Image
              src="/assets/register-background.jpg"
              alt="Bé minh họa trong phần kêu gọi đăng ký tư vấn."
              fill
              className="object-cover object-[68%_center] md:object-center"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(223,242,255,0.97)_0%,rgba(223,242,255,0.94)_32%,rgba(223,242,255,0.82)_46%,rgba(223,242,255,0.22)_70%,rgba(223,242,255,0)_100%)]" />
            <div className="relative z-10 flex min-h-[360px] w-full max-w-none flex-col justify-center px-6 py-8 md:min-h-[480px] md:w-[54%] md:max-w-[430px] md:px-8 lg:px-10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1294d8] md:text-[0.95rem]">
                {symptomRegisterCallout.eyebrow}
              </p>
              <h3 className="mt-3 text-[1.65rem] font-black leading-[1.04] text-[#0b5ea6] md:text-[2.25rem]">
                {symptomRegisterCallout.title}
              </h3>
              <p className="mt-4 text-[1.02rem] leading-[1.65] text-[#34516c] md:text-[1.08rem]">
                {symptomRegisterCallout.body}
              </p>
              <PrimaryScrollButton
                href={APPOINTMENT_LINK}
                className="mt-6 w-full justify-center sm:w-auto"
              >
                {symptomRegisterCallout.ctaLabel}
              </PrimaryScrollButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
