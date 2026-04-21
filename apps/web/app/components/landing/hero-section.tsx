import Image from "next/image";
import { HOTLINE_DISPLAY } from "./content";
import { CheckIcon, PhoneIcon, StarIcon } from "./icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        <Image
          priority
          src="/assets/hero.png"
          alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
          width={2880}
          height={1718}
          className="h-auto w-full hidden md:block"
          sizes="100vw"
        />
        <Image
          priority
          src="/assets/mobile-hero.png"
          alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
          width={2880}
          height={1718}
          className="h-auto w-full md:hidden"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute bottom-0 right-[-10%] top-8 md:top-8 bottom-1.5 w-[60%] md:right-[5%] md:w-[50%]">
          <Image
            priority
            src="/assets/bs-vy-2.png"
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="52vw"
          />
        </div>

        <div className="absolute bottom-[8%] right-[2.5%] z-10 hidden w-[220px] flex-col gap-3 lg:flex xl:w-[250px]">
          <div className="rounded-[24px] bg-white/88 p-4 shadow-[0_20px_44px_rgba(16,68,121,0.14)] ring-1 ring-white/70 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#12b76a] text-white shadow-[0_12px_24px_rgba(18,183,106,0.22)]">
                <StarIcon className="size-5" />
              </span>
              <div>
                <p className="text-[2rem] font-black leading-none text-[#0b5ea6]">
                  2000+
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-[#44627c] xl:text-[0.95rem]">
                  Ca điều trị lõm&nbsp;ngực thành công
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-gradient-to-r from-[#cfe8ff] via-[#d9f5e8] to-transparent" />

            <div className="mt-4 flex items-start gap-3 text-[#3e5b75]">
              <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eaf7ff] text-[#0b5ea6]">
                <CheckIcon className="size-4" />
              </span>
              <p className="text-sm font-semibold leading-snug xl:text-[0.95rem]">
                Tiên phong ứng dụng kỹ thuật NUSS tại Việt&nbsp;Nam từ năm 2008
              </p>
            </div>
          </div>

          <div className="rounded-[22px] bg-[linear-gradient(135deg,_rgba(11,94,166,0.94)_0%,_rgba(16,174,90,0.88)_100%)] p-4 text-white shadow-[0_20px_44px_rgba(16,68,121,0.2)] ring-1 ring-white/25">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-white/78">
              Hỗ trợ đặt lịch
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/16">
                <PhoneIcon className="size-5" />
              </span>
              <div>
                <p className="text-lg font-black leading-none">
                  {HOTLINE_DISPLAY}
                </p>
                <p className="mt-1 text-sm leading-snug text-white/80">
                  Tư vấn nhanh trong giờ khám
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        priority
        src="/assets/mobile-contact.png"
        alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
        width={774}
        height={161}
        className="h-auto w-full -translate-y-2.5 border-y-2 md:hidden"
        sizes="100vw"
      />
      <Image
        priority
        src="/assets/mobile-feature.png"
        alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
        width={774}
        height={161}
        className="h-auto w-full -translate-y-8 border-y-2 md:hidden"
        sizes="100vw"
      />
    </section>
  );
}
