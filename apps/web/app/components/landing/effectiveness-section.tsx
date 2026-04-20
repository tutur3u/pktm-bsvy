import Image from "next/image";
import { LeadForm } from "../lead-form";
import {
  HOTLINE_HREF,
  stats,
} from "./content";

export function EffectivenessSection() {
  return (
    <>
      <section className="bg-[#1da6e6] py-3 text-center text-xl font-black uppercase tracking-[0.03em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] md:text-[2rem]">
        Hiệu quả điều trị thực tế
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-2 gap-4 text-center md:mx-auto md:max-w-[760px]">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-[24px] bg-white/80 px-4 py-5"
            >
              <p className="text-[2.8rem] font-black leading-none text-[#16a5f0] md:text-[4.6rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-base leading-snug text-[#24374d] md:text-[1.3rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          id="quick-register"
          className="relative mt-6 overflow-hidden rounded-[32px] bg-[#1da6e6] shadow-[0_28px_60px_rgba(29,166,230,0.3)]"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.75fr)] md:items-end">
            <div className="relative min-h-[280px] overflow-hidden md:min-h-[420px]">
              <Image
                src="/assets/quick-register-photo.jpg"
                alt="Bé trai vui vẻ trong phần đăng ký khám nhanh."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 52vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1da6e6]/22 via-transparent to-transparent" />
              <div className="relative z-10 flex h-full items-center justify-center px-6 py-8 md:justify-start md:px-10">
                <p className="max-w-[16ch] text-center text-[2rem] font-light leading-tight text-white md:text-left md:text-[2.6rem]">
                  Hơn <span className="font-black text-[#51ff8a]">2000</span> ca
                  phẫu thuật thành công, giúp các con tự tin viết tiếp tương lai
                </p>
              </div>
            </div>

            <div className="px-4 pb-6 md:px-8 md:pb-8">
              <LeadForm
                id="quick-register-form"
                title="Đăng ký khám ngay"
                description="Để lại thông tin, phòng khám sẽ liên hệ xác nhận lịch hẹn sớm nhất."
                submitLabel="Đặt khám ngay với PGS TS BS. Trần Thanh Vỹ"
                hotlineHref={HOTLINE_HREF}
                theme="blue"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
