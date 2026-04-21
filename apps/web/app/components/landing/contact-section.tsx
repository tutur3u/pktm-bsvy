import Image from "next/image";
import { LeadForm } from "../lead-form";
import { HOTLINE_DISPLAY, HOTLINE_HREF } from "./content";
import { MapPinIcon, PhoneIcon } from "./icons";

export function ContactSection() {
  return (
    <section className="bg-[#dff2ff] pb-12 pt-4 md:pb-16">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <h2 className="text-center text-[1.8rem] font-black uppercase leading-tight text-[#ff7a00] md:text-[2.6rem]">
          Kết nối ngay với chuyên gia để được hỗ trợ tốt nhất
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] md:items-center">
          <LeadForm
            id="contact-form"
            title="Để lại thông tin"
            submitLabel="Đăng ký ngay"
            hotlineHref={HOTLINE_HREF}
            theme="light"
          />

          <div className="rounded-[30px] bg-[#dff2ff] p-2">
            <div className="rounded-[28px] bg-white/45 p-6 md:p-8">
              <Image
                src="/assets/logo.png"
                alt="Phòng khám PGS TS BS. Trần Thanh Vỹ."
                width={722}
                height={175}
                className="h-auto w-full max-w-[520px]"
              />
              <div className="mt-6 space-y-4 text-lg leading-snug text-[#314052] md:text-[1.4rem]">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#6ecdf4] text-[#1da6e6]">
                    <MapPinIcon className="size-5" />
                  </span>
                  <p>
                    Địa chỉ: 606/24 Đường 3/2, Phường&nbsp;Diên&nbsp;Hồng, TP.
                    Hồ Chí Minh
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#6ecdf4] text-[#1da6e6]">
                    <PhoneIcon className="size-5" />
                  </span>
                  <p>Hotline: {HOTLINE_DISPLAY}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
