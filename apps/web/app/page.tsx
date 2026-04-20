import Image from "next/image";
import type { ReactNode } from "react";
import { LeadForm } from "./components/lead-form";

const HOTLINE_DISPLAY = "0838 000 644";
const HOTLINE_HREF = "tel:0838000644";
const APPOINTMENT_LINK = "#quick-register";

const credentialHighlights = [
  {
    tone: "blue",
    title: "Hơn 20 năm",
    body: "công tác trong ngành Y",
  },
  {
    tone: "neutral",
    title: "Người tiên phong",
    body: "đưa kỹ thuật Nuss trong điều trị lõm ngực bẩm sinh về ứng dụng tại Việt Nam vào năm 2008",
  },
  {
    tone: "green",
    title:
      "Là chuyên gia trực tiếp hướng dẫn kỹ thuật Nuss cho các bệnh viện trên toàn quốc:",
    body: "Bệnh viện Quân đội 108, Bệnh viện Nhi Đồng 2, Bệnh viện Đa khoa Đà Nẵng, Gia Lai, Kon Tum, Quảng Trị, Đa khoa Hoàn Mỹ Cửu Long...",
  },
  {
    tone: "green",
    title: "Can thiệp thành công hơn 2.000 ca",
    body: "lõm ngực, lồi ngực",
  },
  {
    tone: "neutral",
    title: "Chuyển giao kỹ thuật NUSS",
    body: "cho các bệnh viện tuyến tỉnh khắp cả nước",
  },
  {
    tone: "blue",
    title: "Thành viên Hội Phẫu thuật dị dạng Lồng ngực thế giới CIWIG",
    body: "",
  },
];

const symptomItems = [
  {
    strong: "Vùng giữa ngực bị lõm sâu vào trong",
    rest: "(rõ nhất khi hít sâu)",
  },
  {
    strong: "Con gầy yếu, kém năng động",
    rest: "so với bạn bè",
  },
  {
    strong: "Hay tự ti, mặc cảm về ngoại hình,",
    rest: "ngại mặc áo bó/tắm biển",
  },
  {
    strong: "Cột sống có dấu hiệu cong vẹo",
    rest: "nhẹ hoặc gù gập",
  },
  {
    strong: "Thường xuyên hụt hơi, thở dốc",
    rest: "khi chạy nhảy, vui đùa",
  },
];

const stats = [
  { value: "2000+", label: "Ca phẫu thuật thành công" },
  { value: "18+", label: "Năm ứng dụng phương pháp Nuss" },
];

const resultImages = [
  {
    src: "/assets/result-2.png",
    alt: "So sánh trước và sau điều trị lõm ngực trên bệnh nhân thứ nhất.",
  },
  {
    src: "/assets/result-3.png",
    alt: "So sánh trước và sau điều trị lõm ngực trên bệnh nhân thứ hai.",
  },
];

const pressImages = Array.from({ length: 11 }, (_, index) => ({
  src: `/assets/news-${index + 1}.png`,
  alt: `Bài báo và nghiên cứu khoa học số ${index + 1}.`,
}));

const severityCards = [
  {
    src: "/assets/tier-1.png",
    alt: "Minh họa mức độ lõm ngực độ 1.",
  },
  {
    src: "/assets/tier-2.png",
    alt: "Minh họa mức độ lõm ngực độ 2.",
  },
  {
    src: "/assets/tier-3.png",
    alt: "Minh họa mức độ lõm ngực độ 3.",
  },
];

const testimonials = [
  {
    imageSrc: "/assets/testimonial-1.png",
    imageAlt: "Chị Hằng chia sẻ sau ca điều trị.",
    quote:
      "Sau ca mổ, tôi thấy con gái khỏe và vui hơn hẳn. Tiếng thở con đều, tự tin chạy nhảy, vợ chồng tôi cũng an tâm hơn khi đi làm, cảm ơn bác sĩ Vỹ.",
    author: "Chị Hằng - mẹ bé Lan Anh, 10 tuổi (Cà Mau)",
  },
  {
    imageSrc: "/assets/testimonial-2.png",
    imageAlt: "Anh Minh chia sẻ sau quá trình can thiệp cho con.",
    quote:
      "Ngày trước nhìn con lúc nào cũng lầm lì, đi đâu cũng khom lưng để giấu cái lõm mà xót lắm. Sau khi được bác sĩ can thiệp, thấy con đứng thẳng người, tự tin mặc áo đồng phục đi học và cười nói nhiều hơn, tôi như trút được gánh nặng bao nhiêu năm nay.",
    author: "Anh Minh - bố của bé Gia Bảo, 14 tuổi (Kon Tum)",
  },
  {
    imageSrc: "/assets/testimonial-3.png",
    imageAlt: "Bạn Nam chia sẻ sau khi điều trị lõm ngực thành công.",
    quote:
      "Từng có lúc mình không dám đi bơi hay tham gia bóng đá với bạn bè chỉ vì sợ bị trêu chọc. Ca mổ là bước ngoặt lớn nhất đời mình. Giờ đây, khi lõm ngực đã bằng phẳng, mình không còn thấy hụt hơi khi leo cầu thang và quan trọng nhất là cảm thấy mình được sống một cuộc đời bình thường như bao người khác.",
    author: "Bạn Nam, 19 tuổi (Hà Nội)",
  },
];

const quickContacts = [
  {
    label: "Zalo",
    href: APPOINTMENT_LINK,
    kind: "text",
  },
  {
    label: HOTLINE_DISPLAY,
    href: HOTLINE_HREF,
    kind: "phone",
  },
  {
    label: "Messenger",
    href: APPOINTMENT_LINK,
    kind: "message",
  },
] as const;

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 2v4" />
      <path d="M17 2v4" />
      <path d="M3 9h18" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 12 4.2 4.2L19 6.8" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 16.2v2.3a1.8 1.8 0 0 1-2 1.8A16.2 16.2 0 0 1 3.7 5a1.8 1.8 0 0 1 1.8-2H8a1.8 1.8 0 0 1 1.8 1.5l.4 2.7a1.8 1.8 0 0 1-.5 1.5l-1.7 1.7a14.4 14.4 0 0 0 5.6 5.6l1.7-1.7a1.8 1.8 0 0 1 1.5-.5l2.7.4A1.8 1.8 0 0 1 21 16.2Z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="m8 6 10 6-10 6Z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 2.8 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17l-5.5 3 1-6.2L3 9.4l6.2-.9Z" />
    </svg>
  );
}

function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.4 5.5 3.8 7.2v3.6l3.4-1.9c.9.2 1.8.3 2.8.3 5.5 0 10-4.1 10-9.2S17.5 2 12 2Zm1.1 12.5-2.6-2.8-5 2.8 5.5-5.8 2.7 2.8 4.8-2.8-5.4 5.8Z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 20.5 4.6 13.7a5 5 0 0 1 7.2-6.9L12 7l.2-.2a5 5 0 0 1 7.2 6.9Z" />
    </svg>
  );
}

function toneClasses(tone: string) {
  if (tone === "green") {
    return "bg-gradient-to-r from-[#dfffe9] to-[#bff8d0]";
  }

  if (tone === "blue") {
    return "bg-gradient-to-r from-[#dff4ff] to-[#caecff]";
  }

  return "bg-gradient-to-r from-white to-[#eef4f8]";
}

function QuickContactButton({
  label,
  href,
  kind,
  className,
}: (typeof quickContacts)[number] & { className?: string }) {
  const icon =
    kind === "phone" ? (
      <PhoneIcon className="size-5 md:size-6" />
    ) : kind === "message" ? (
      <MessengerIcon className="size-5 md:size-6" />
    ) : (
      <span className="text-sm font-black leading-none text-[#1768d8] md:text-base">
        Zalo
      </span>
    );

  return (
    <a
      href={href}
      className={`inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-white px-3.5 text-[#1768d8] shadow-[0_14px_30px_rgba(12,74,137,0.18)] ring-1 ring-[#ccecff] transition hover:-translate-y-0.5 md:h-14 md:min-w-14 md:px-4 ${className ?? ""}`}
    >
      <span className="sr-only">{label}</span>
      {icon}
    </a>
  );
}

function PrimaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[18px] bg-[#0aa75c] px-6 py-4 text-center text-lg font-black uppercase tracking-[0.02em] text-white shadow-[0_14px_28px_rgba(10,167,92,0.35)] transition hover:-translate-y-0.5 hover:bg-[#099651] ${className ?? ""}`}
    >
      {children}
      <ArrowRightIcon className="size-5 shrink-0" />
    </a>
  );
}

function SectionBand({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[20px] px-5 py-3 text-center text-xl font-black uppercase tracking-[0.02em] shadow-[0_10px_24px_rgba(35,130,184,0.12)] md:text-[2rem] ${className ?? ""}`}
    >
      {title}
    </div>
  );
}

export default function Page() {
  return (
    <main className="bg-[#f6fcff] text-[#14314c]">
      <section className="relative overflow-hidden">
        <div className="relative hidden md:block">
          <Image
            priority
            src="/assets/hero.png"
            alt="Hero giới thiệu điều trị lõm ngực cùng PGS TS BS. Trần Thanh Vỹ."
            width={2880}
            height={1718}
            className="h-auto w-full"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute bottom-0 right-[-10%] top-[1%] w-[58%] md:right-[2%] md:top-0 md:w-[90%]">
            <Image
              priority
              src="/assets/bs-vy.png"
              alt=""
              fill
              className="object-contain object-bottom"
              sizes="36vw"
            />
          </div>
        </div>

        <div className="relative px-4 py-4 md:hidden">
          <Image
            fill
            priority
            src="/assets/hero.png"
            alt=""
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-[#eff8ff]/84 to-[#d8efff]/72" />
          <div className="relative">
            <div className="relative z-10 flex max-w-[630px] flex-col">
              <Image
                src="/assets/logo.png"
                alt="Phòng khám PGS TS BS. Trần Thanh Vỹ."
                width={722}
                height={175}
                className="h-auto w-[280px] max-w-full"
                priority
              />

              <div className="mt-4 max-w-[610px] rounded-[28px] border border-[#bde6fb] bg-[#cfeeff]/74 px-5 py-5 shadow-[0_20px_50px_rgba(19,99,155,0.14)] backdrop-blur-sm">
                <h1 className="text-[2.15rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[#0b5ea6]">
                  Điều trị lõm ngực
                </h1>
                <p className="mt-2 text-[1.08rem] font-black uppercase leading-[1.02] tracking-[-0.02em] text-[#15406b]">
                  Bằng phương pháp tiên tiến
                  <br />
                  cùng chuyên gia hàng đầu
                </p>
                <p className="mt-4 max-w-[18ch] text-[1.05rem] leading-[1.36] text-[#30475e]">
                  Lấy lại sự tự tin và sức khỏe cho con yêu với &quot;Bàn tay
                  vàng&quot;{" "}
                  <span className="font-black text-[#203954]">
                    PGS TS BS. Trần Thanh Vỹ
                  </span>
                </p>
                <div className="mt-5">
                  <PrimaryButton
                    href={APPOINTMENT_LINK}
                    className="min-h-[60px] rounded-[16px] px-6 py-3.5 text-base shadow-[0_12px_24px_rgba(10,167,92,0.35)]"
                  >
                    <span className="leading-tight">
                      Đăng ký khám
                      <br />
                      với PGS TS BS. Trần Thanh Vỹ
                    </span>
                  </PrimaryButton>
                </div>
              </div>

              <div className="mt-4 grid gap-2.5 pl-1 text-[#173451]">
                <div className="flex items-center gap-2.5 text-base">
                  <CalendarIcon className="size-5 shrink-0 text-[#1082de]" />
                  <span className="font-black">Giờ khám: T2 - T6:</span>
                  <span>08:00 - 17:00</span>
                </div>
                <div className="flex items-center gap-2.5 text-base">
                  <ClockIcon className="size-5 shrink-0 text-[#1082de]" />
                  <span className="font-black">T7:</span>
                  <span>08:00 - 11:30</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-3">
                {quickContacts.map((contact) => (
                  <QuickContactButton
                    key={contact.label}
                    {...contact}
                    className="bg-white/96"
                  />
                ))}
              </div>
            </div>

            <div className="relative mt-6 min-h-[360px]">
              <div className="absolute inset-x-0 bottom-0 top-6">
                <Image
                  src="/assets/bs-vy.png"
                  alt="PGS TS BS. Trần Thanh Vỹ trong ảnh giới thiệu landing page."
                  fill
                  className="object-contain object-bottom"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[24px] border border-[#c9ebff] bg-white/92 p-4 shadow-[0_18px_40px_rgba(17,81,135,0.12)]">
            <div className="mb-3 flex items-center justify-center gap-2 text-center text-xl font-black leading-tight text-[#0b5ea6]">
              <StarIcon className="size-5" />
              <span>
                Người đầu tiên đưa phương pháp Phẫu thuật lõm ngực Nuss về Việt
                Nam
              </span>
            </div>
            <div className="relative overflow-hidden rounded-[18px]">
              <Image
                src="/assets/hero.png"
                alt="Video tư liệu về PGS TS BS. Trần Thanh Vỹ."
                width={2880}
                height={1718}
                className="h-auto w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex size-16 items-center justify-center rounded-[18px] bg-[#e8332a] text-white shadow-[0_12px_30px_rgba(232,51,42,0.4)]">
                  <PlayIcon className="size-8" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              PGS Trần Thanh Vỹ cùng GS. Donald Nuss - GS người Mỹ phát minh
              phẫu thuật Nuss
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
                  <span className="font-black text-[#2f3743]">
                    {item.title}
                  </span>
                  {item.body ? ` ${item.body}` : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="bg-[#e2f4ff] py-10 md:py-14">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <h2 className="text-center text-[1.9rem] font-black uppercase leading-tight text-[#0b5ea6] md:text-[3rem]">
            Kết quả điều trị lõm ngực bằng phương pháp NUSS
          </h2>
          <div className="mt-8">
            <Image
              src="/assets/result-1.png"
              alt="Minh họa trước và sau điều trị lõm ngực bằng phương pháp Nuss."
              width={2684}
              height={1200}
              className="mx-auto h-auto w-full max-w-[1060px]"
            />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {resultImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_20px_50px_rgba(33,110,164,0.12)] ring-1 ring-[#cbeaff]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1160}
                  height={816}
                  className="h-auto w-full rounded-[22px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="border-y border-[#a8ddfb] bg-[#dff2ff]">
        <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-4 md:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)]">
            <div className="space-y-3">
              <SectionBand
                title="Dấu hiệu dị tật lõm ngực"
                className="bg-[#1da6e6] text-white"
              />
              {symptomItems.map((item) => (
                <div
                  key={item.strong}
                  className="rounded-[20px] border-2 border-[#36a9df] bg-white px-5 py-4 text-center text-[1.05rem] leading-snug text-[#2c3b4b] shadow-[0_12px_28px_rgba(33,110,164,0.08)] md:text-[1.25rem]"
                >
                  <span className="font-bold">{item.strong}</span>
                  <br />
                  <span className="font-medium">{item.rest}</span>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/assets/register.png"
                alt="Bé có dấu hiệu lõm ngực trong phần lời kêu gọi đăng ký khám."
                width={2880}
                height={1716}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff2e4] py-10 md:py-14">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <h2 className="text-center text-[1.85rem] font-black uppercase leading-tight text-[#ff7a00] md:text-[3rem]">
            Hiểu đúng về mức độ lõm ngực của con
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {severityCards.map((card) => (
              <div
                key={card.src}
                className="overflow-hidden rounded-[28px] shadow-[0_22px_56px_rgba(173,102,18,0.18)]"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={812}
                  height={1666}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-[1100px] text-center text-[1.3rem] font-black leading-snug text-[#0b5ea6] md:text-[1.9rem]">
            <span className="text-[#ff7a00]">Lời khuyên:</span> Phẫu thuật sớm
            (từ 6 - 14 tuổi) đạt hiệu quả cao nhất khi xương còn mềm, giảm nguy
            cơ biến chứng và tâm lý mặc cảm.
          </p>

          <div className="mt-8">
            <Image
              src="/assets/quote.png"
              alt="Lời khuyên của PGS TS BS. Trần Thanh Vỹ."
              width={2602}
              height={1167}
              className="mx-auto h-auto w-full max-w-[1120px]"
            />
          </div>
        </div>
      </section>

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
                      Địa chỉ: 606/24 Đường 3/2, Phường Diên Hồng, TP. Hồ Chí
                      Minh
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
    </main>
  );
}
