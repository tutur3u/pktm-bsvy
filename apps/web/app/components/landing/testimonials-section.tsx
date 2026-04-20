import Image from "next/image";
import { testimonials } from "./content";
import {
  HeartIcon,
  StarIcon,
} from "./icons";

export function TestimonialsSection() {
  return (
    <section className="bg-[#dff2ff] py-10 md:py-14">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-5 flex justify-center">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-[#1da6e6] text-white shadow-[0_18px_36px_rgba(29,166,230,0.26)]">
            <HeartIcon className="size-8" />
          </span>
        </div>
        <h2 className="text-center text-[1.9rem] font-black uppercase leading-tight text-[#0b5ea6] md:text-[3rem]">
          Phản hồi của khách hàng
        </h2>

        <div className="mt-8 space-y-5">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="rounded-[28px] border border-[#8ad8ff] bg-white px-5 py-5 shadow-[0_22px_50px_rgba(33,110,164,0.12)] md:px-7 md:py-6"
            >
              <div className="grid gap-5 md:grid-cols-[160px_minmax(0,1fr)] md:items-center">
                <div className="mx-auto w-full max-w-[220px]">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.imageAlt}
                    width={558}
                    height={346}
                    className="h-auto w-full rounded-[20px]"
                  />
                  <div className="mt-3 flex justify-center gap-1 text-[#ff8b00]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="size-4" />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[1.1rem] leading-relaxed text-[#3b4450] md:text-[1.5rem]">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="mt-3 text-[1.2rem] font-black leading-snug text-[#5a5a5a] md:text-[1.8rem]">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
