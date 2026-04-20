import Image from "next/image";
import { credentialHighlights } from "./content";
import { CheckIcon } from "./icons";
import { toneClasses } from "./shared";

export function CredentialsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-[900px] text-center">
        <h2 className="text-[1.9rem] font-black uppercase leading-tight text-[#0b5ea6] md:text-[3.3rem]">
          Thầy thuốc ưu tú, Phó giáo sư - Tiến sĩ - Bác sĩ
        </h2>
        <p className="text-[1.9rem] font-black uppercase leading-tight text-[#10ae5a] md:text-[3.3rem]">
          Trần Thanh Vỹ
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)] md:items-start">
        <div className="order-2 overflow-hidden rounded-[28px] bg-white shadow-[0_22px_50px_rgba(28,95,151,0.12)] ring-1 ring-[#cfeeff] md:order-1">
          <Image
            src="/assets/donald-nuss.png"
            alt="PGS Trần Thanh Vỹ cùng GS. Donald Nuss."
            width={1048}
            height={1656}
            className="h-auto w-full"
          />
          <p className="px-4 py-4 text-center text-base leading-snug text-[#203954] md:px-6 md:text-[1.05rem]">
            PGS Trần Thanh Vỹ cùng GS. Donald Nuss - GS người Mỹ phát minh phẫu
            thuật Nuss
          </p>
        </div>

        <div className="order-1 grid gap-4 md:order-2">
          {credentialHighlights.map((item) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 rounded-[24px] px-4 py-4 shadow-[0_16px_36px_rgba(33,110,164,0.08)] ring-1 ring-white/70 ${toneClasses(item.tone)}`}
            >
              <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#34ca70] text-white shadow-[0_10px_20px_rgba(52,202,112,0.24)]">
                <CheckIcon className="size-6" />
              </div>
              <div className="text-[1.05rem] leading-snug text-[#24374d] md:text-[1.3rem]">
                <span className="font-black text-[#2f3743]">{item.title}</span>
                {item.body ? ` ${item.body}` : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
