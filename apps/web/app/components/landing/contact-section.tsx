import Image from "next/image";
import { LeadForm } from "../lead-form";
import { ClinicMap } from "./clinic-map";
import { CLINIC_ADDRESS, HOTLINE_DISPLAY, HOTLINE_HREF } from "./content";
import { MapPinIcon, PhoneIcon } from "./icons";

export function ContactSection() {
  return (
    <section className="bg-[#dff2ff] pb-12 pt-4 md:pb-16">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <h2 className="text-center text-[1.8rem] font-black uppercase leading-tight text-[#ff7a00] md:text-[2.6rem]">
          Kết nối ngay với chuyên gia để được hỗ trợ tốt nhất
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] md:items-start">
          <div className="rounded-[30px] bg-white/35 p-5 shadow-[0_18px_36px_rgba(35,130,184,0.08)] ring-1 ring-white/45 md:p-6">
            <div className="rounded-[24px] border border-[#c5e7f7] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(245,252,255,0.62))] p-5 md:p-6">
              <LeadForm
                id="contact-form"
                title="Để lại thông tin"
                description="Phòng khám sẽ liên hệ xác nhận lịch hẹn và hướng dẫn thăm khám phù hợp cho con."
                submitLabel="Đăng ký ngay"
                hotlineHref={HOTLINE_HREF}
                theme="light"
              />
            </div>
          </div>

          <div className="rounded-[28px] bg-white/45 p-6 shadow-[0_18px_36px_rgba(35,130,184,0.08)] md:p-8">
            <Image
              src="/assets/logo.png"
              alt="Phòng khám PGS TS BS. Trần Thanh Vỹ."
              width={722}
              height={175}
              className="h-auto w-full max-w-[520px]"
            />
            <div className="mt-6 space-y-4 text-lg leading-snug text-[#314052] md:text-[1.4rem]">
              <div className="flex items-center gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#6ecdf4] text-[#1da6e6] md:size-11">
                  <MapPinIcon className="size-5" />
                </span>
                <p className="leading-[1.28]">
                  <span className="font-black">Địa chỉ:</span> {CLINIC_ADDRESS}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#6ecdf4] text-[#1da6e6] md:size-11">
                  <PhoneIcon className="size-5" />
                </span>
                <p className="leading-[1.28]">
                  <span className="font-black">Hotline:</span> {HOTLINE_DISPLAY}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <ClinicMap />
          </div>
        </div>
      </div>
    </section>
  );
}
