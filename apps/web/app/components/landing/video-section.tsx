import {
  APPOINTMENT_LINK,
  HERO_VIDEO_EMBED_URL,
  HERO_VIDEO_URL,
} from "./content";
import { PrimaryButton, SectionBand } from "./shared";

export function VideoSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-8 md:px-6 md:pb-12">
      <div className="mx-auto mt-8 max-w-[1150px]">
        <SectionBand
          title="Video thực tế hành trình điều trị"
          className="bg-gradient-to-r from-[#dff7ff] to-[#eef7ff] text-[#0b5ea6]"
        />

        <div className="mt-6 grid gap-5 rounded-[30px] bg-white p-4 shadow-[0_24px_60px_rgba(33,110,164,0.12)] ring-1 ring-[#cfeeff] md:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] md:items-center md:gap-8 md:p-6">
          <div className="order-2 rounded-[26px] bg-gradient-to-br from-[#eef8ff] via-white to-[#f2fbff] p-5 ring-1 ring-[#dcefff] md:order-1 md:p-8">
            <h2 className="mt-4 max-w-[15ch] text-[2rem] font-black uppercase leading-[0.98] text-[#0b5ea6] md:text-[2.8rem]">
              Hình dung nhanh hành trình điều trị
            </h2>
            <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-[#44627d] md:text-lg">
              Video giúp phụ huynh nhìn nhanh cách bác sĩ tư vấn, minh hoạ kỹ
              thuật và đồng hành cùng bệnh nhi trong thực tế, trước khi để lại
              thông tin đăng ký khám.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton
                href={APPOINTMENT_LINK}
                className="w-full px-5 py-3 text-base sm:w-auto md:px-6 md:py-3.5"
              >
                Đăng ký tư vấn ngay
              </PrimaryButton>
              <a
                href={HERO_VIDEO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-[18px] border border-[#bfe4fb] bg-white px-5 py-3 text-base font-black uppercase tracking-[0.02em] text-[#0b5ea6] shadow-[0_14px_28px_rgba(33,110,164,0.08)] transition hover:-translate-y-0.5 hover:bg-[#f3fbff] sm:w-auto"
              >
                Xem trên YouTube
              </a>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[420px] md:order-2">
            <div className="overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_24px_54px_rgba(21,74,137,0.16)] ring-1 ring-[#d5ebfb] md:rounded-[34px] md:p-3.5">
              <div className="rounded-[26px] bg-[linear-gradient(180deg,_#0f2435_0%,_#183d5d_100%)] p-3 md:rounded-[30px]">
                <div className="flex items-center justify-center pb-3">
                  <span className="h-1.5 w-20 rounded-full bg-white/18" />
                </div>
                <div className="relative overflow-hidden rounded-[22px] bg-[#071c2c] pt-[177.78%] md:rounded-[24px]">
                  <iframe
                    src={HERO_VIDEO_EMBED_URL}
                    title="Video giới thiệu điều trị lõm ngực"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-sm leading-relaxed text-[#5a7389]">
              Xem trực tiếp trên trang hoặc mở YouTube để xem toàn màn hình.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
