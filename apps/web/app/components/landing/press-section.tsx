import Image from "next/image";
import { pressImages } from "./content";

export function PressSection() {
  return (
    <>
      <section className="bg-[#1da6e6] py-3 text-center text-xl font-black uppercase tracking-[0.03em] text-white md:text-[2rem]">
        Thông cáo báo chí &amp; nghiên cứu khoa học
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {pressImages.map((image) => (
            <div key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={840}
                height={546}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
