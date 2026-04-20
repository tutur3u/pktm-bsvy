import Image from "next/image";
import { SectionBand } from "./shared";

export function NussMethodSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-10 md:px-6 md:pb-16">
      <div className="mx-auto max-w-[1150px]">
        <SectionBand
          title="Phương pháp NUSS - Điều trị tiên tiến nhất hiện nay"
          className="bg-gradient-to-r from-[#dff7ff] to-[#eef7ff] text-[#0ea659]"
        />
        <p className="mx-auto mt-5 max-w-[1100px] text-center text-lg leading-relaxed text-[#24374d] md:text-[1.25rem]">
          Phương pháp phẫu thuật Nuss do PGS TS BS. Trần Thanh Vỹ thực hiện là
          bước tiến vượt bậc, giúp chỉnh hình lồng ngực mà không cần cắt xương
          ức và các sụn sườn như phương pháp cũ.
        </p>
        <div className="mt-8">
          <Image
            src="/assets/nuss-method.png"
            alt="Các lợi ích nổi bật của phương pháp điều trị Nuss."
            width={1351}
            height={1217}
            className="mx-auto h-auto w-full max-w-[1120px]"
          />
        </div>
      </div>
    </section>
  );
}
