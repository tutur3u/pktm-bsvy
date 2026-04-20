import Image from "next/image";
import {
    APPOINTMENT_LINK,
    quickContacts,
} from "./content";
import {
    CalendarIcon,
    ClockIcon,
    PlayIcon,
    StarIcon,
} from "./icons";
import {
    PrimaryButton,
    QuickContactButton,
} from "./shared";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative hidden md:block">
        <Image
          priority
          src="/assets/hero.png"
          alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
          width={2880}
          height={1718}
          className="h-auto w-full"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute bottom-0 right-[-10%] top-0 w-[62%] md:right-[3%] md:w-[90%]">
          <Image
            priority
            src="/assets/bs-vy.png"
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="52vw"
          />
        </div>
      </div>

      <div className="relative px-4 py-4 md:hidden">
        <Image
          fill
          priority
          src="/assets/hero.png"
          alt=""
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-[#eff8ff]/84 to-[#d8efff]/72" />
        <div className="relative">
          <div className="relative z-10 flex max-w-[630px] flex-col">
            <Image
              src="/assets/logo.png"
              alt="Phòng khám PGS TS BS. Trần Thanh Vỹ."
              width={722}
              height={175}
              className="h-auto w-[280px] max-w-full"
              priority
            />

            <div className="mt-4 max-w-[610px] rounded-[28px] border border-[#bde6fb] bg-[#cfeeff]/74 px-5 py-5 shadow-[0_20px_50px_rgba(19,99,155,0.14)] backdrop-blur-sm">
              <h1 className="text-[2.15rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[#0b5ea6]">
                Điều trị lõm ngực
              </h1>
              <p className="mt-2 text-[1.08rem] font-black uppercase leading-[1.02] tracking-[-0.02em] text-[#15406b]">
                Bằng phương pháp tiên tiến
                <br />
                cùng chuyên gia hàng đầu
              </p>
              <p className="mt-4 max-w-[18ch] text-[1.05rem] leading-[1.36] text-[#30475e]">
                Lấy lại sự tự tin và sức khỏe cho con yêu với &quot;Bàn tay
                vàng&quot;{" "}
                <span className="font-black text-[#203954]">
                  PGS TS BS. Trần Thanh Vỹ
                </span>
              </p>
              <div className="mt-5">
                <PrimaryButton
                  href={APPOINTMENT_LINK}
                  className="min-h-[60px] rounded-[16px] px-6 py-3.5 text-base shadow-[0_12px_24px_rgba(10,167,92,0.35)]"
                >
                  <span className="leading-tight">
                    Đăng ký khám
                    <br />
                    với PGS TS BS. Trần Thanh Vỹ
                  </span>
                </PrimaryButton>
              </div>
            </div>

            <div className="mt-4 grid gap-2.5 pl-1 text-[#173451]">
              <div className="flex items-center gap-2.5 text-base">
                <CalendarIcon className="size-5 shrink-0 text-[#1082de]" />
                <span className="font-black">Giờ khám: T2 - T6:</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex items-center gap-2.5 text-base">
                <ClockIcon className="size-5 shrink-0 text-[#1082de]" />
                <span className="font-black">T7:</span>
                <span>08:00 - 11:30</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-3">
              {quickContacts.map((contact) => (
                <QuickContactButton
                  key={contact.label}
                  {...contact}
                  className="bg-white/96"
                />
              ))}
            </div>
          </div>

          <div className="relative mt-6 min-h-[360px]">
            <div className="absolute inset-x-0 bottom-0 top-6">
              <Image
                src="/assets/bs-vy.png"
                alt="PGS TS BS. Trần Thanh Vỹ trong ảnh giới thiệu landing page."
                fill
                className="object-contain object-bottom"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[24px] border border-[#c9ebff] bg-white/92 p-4 shadow-[0_18px_40px_rgba(17,81,135,0.12)]">
          <div className="mb-3 flex items-center justify-center gap-2 text-center text-xl font-black leading-tight text-[#0b5ea6]">
            <StarIcon className="size-5" />
            <span>
              Người đầu tiên đưa phương pháp Phẫu thuật lõm ngực Nuss về Việt
              Nam
            </span>
          </div>
          <div className="relative overflow-hidden rounded-[18px]">
            <Image
              src="/assets/hero.png"
              alt="Video tư liệu về PGS TS BS. Trần Thanh Vỹ."
              width={2880}
              height={1718}
              className="h-auto w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex size-16 items-center justify-center rounded-[18px] bg-[#e8332a] text-white shadow-[0_12px_30px_rgba(232,51,42,0.4)]">
                <PlayIcon className="size-8" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
