import Image from "next/image";
import { credentialHighlights } from "./content";
import { CheckIcon } from "./icons";
import { credentialToneStyles } from "./shared";

export function CredentialsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-[900px] text-center">
        <h2 className="font-black uppercase leading-[0.96]">
          <span className="block text-[1.55rem] text-[#0b5ea6] md:text-[3rem]">
            Thầy thuốc ưu tú
          </span>
          <span className="mt-1 block whitespace-nowrap text-[0.98rem] tracking-[-0.03em] sm:text-[1.15rem] md:text-[1.9rem] lg:text-[2.55rem]">
            <span className="text-[#0b5ea6]">
              Phó giáo sư - Tiến sĩ - Bác sĩ{" "}
            </span>
            <span className="text-[#10ae5a]">Trần Thanh Vỹ</span>
          </span>
        </h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)] md:items-stretch">
        <div className="order-2 flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_22px_50px_rgba(28,95,151,0.12)] ring-1 ring-[#cfeeff] md:order-1">
          <div className="relative min-h-[420px] flex-1 overflow-hidden">
            <Image
              src="/assets/donald-nuss.png"
              alt="PGS Trần Thanh Vỹ cùng GS. Donald Nuss."
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 36vw"
            />
          </div>
          <p className="bg-[#f3fbff] px-4 py-4 text-center text-base leading-snug text-[#203954] md:px-6 md:text-[1.05rem]">
            PGS Trần Thanh Vỹ cùng GS. Donald Nuss - GS người Mỹ phát minh phẫu
            thuật Nuss
          </p>
        </div>

        <div className="order-1 grid gap-4 md:order-2 md:auto-rows-fr">
          {credentialHighlights.map((item) => {
            const tone = credentialToneStyles(item.tone);

            return (
              <div
                key={item.title}
                className={`flex h-full items-center gap-4 rounded-[24px] px-4 py-4 ring-1 md:px-5 md:py-5 ${tone.card}`}
              >
                <div
                  className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full text-white md:size-12 ${tone.icon}`}
                >
                  <CheckIcon className="size-6" />
                </div>
                <div
                  className={`text-[1.05rem] leading-snug md:text-[1.3rem] ${tone.body}`}
                >
                  <span className={`font-black ${tone.title}`}>
                    {item.title}
                  </span>
                  {item.body ? ` ${item.body}` : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
