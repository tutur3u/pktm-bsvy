import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        <Image
          priority
          src="/assets/hero.png"
          alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
          width={2880}
          height={1718}
          className="h-auto w-full hidden md:block"
          sizes="100vw"
        />
        <Image
          priority
          src="/assets/mobile-hero.png"
          alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
          width={2880}
          height={1718}
          className="h-auto w-full md:hidden"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute bottom-0 right-[-10%] top-8 md:top-32 bottom-1.5 w-[60%] md:right-[7%] md:w-[50%]">
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
      <Image
        priority
        src="/assets/mobile-contact.png"
        alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
        width={774}
        height={161}
        className="h-auto w-full -translate-y-2.5 border-y-2 md:hidden"
        sizes="100vw"
      />
      <Image
        priority
        src="/assets/mobile-feature.png"
        alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
        width={774}
        height={161}
        className="h-auto w-full -translate-y-8 border-y-2 md:hidden"
        sizes="100vw"
      />
    </section>
  );
}
