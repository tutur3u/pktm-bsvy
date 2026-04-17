import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "./components/lead-form";
import { MediaCarousel } from "./components/media-carousel";
import { TestimonialCarousel } from "./components/testimonial-carousel";

const HOTLINE_DISPLAY = "0838 000 644";
const HOTLINE_HREF = "tel:0838000644";

const assetPath = (fileName: string) => encodeURI(`/assets/${fileName}`);

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
    title: "Là chuyên gia trực tiếp hướng dẫn kỹ thuật Nuss cho các bệnh viện trên toàn quốc:",
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
  "Vùng giữa ngực bị lõm sâu vào trong",
  "Con gầy yếu, kém năng động so với bạn bè",
  "Hay tự ti, mặc cảm về ngoại hình, ngại mặc áo bó/tắm biển",
  "Cột sống có dấu hiệu cong vẹo nhẹ hoặc gù gập",
  "Thường xuyên hụt hơi, thở dốc khi chạy nhảy, vui đùa",
];

const beforeAfterSlides = [
  {
    badge: "Kết quả thực tế",
    title: "Hình ảnh trước và sau điều trị lõm ngực bằng phương pháp Nuss",
    description:
      "Theo dõi thay đổi hình thái lồng ngực sau can thiệp, đồng thời minh họa khả năng phục hồi thẩm mỹ và chức năng hô hấp.",
    imageSrc: assetPath("Landing Page 2 (Dev).png"),
    imageAlt: "Ảnh cắt từ phần kết quả điều trị thực tế trên landing page.",
    position: "50% 54%",
    fit: "cover" as const,
  },
  {
    badge: "Tư liệu lâm sàng",
    title: "So sánh hình ảnh trước mổ và sau mổ trên nhiều ca bệnh",
    description:
      "Bản xuất riêng dùng cho landing page, nhấn mạnh kết quả trực quan và thông điệp can thiệp sớm cho trẻ.",
    imageSrc: assetPath("Landing Page PKTM SG.png"),
    imageAlt: "Biến thể xuất bản khác của phần so sánh trước và sau điều trị.",
    position: "50% 54%",
    fit: "cover" as const,
  },
  {
    badge: "Biến thể thiết kế",
    title: "Bộ hình ảnh dùng cho phần mô tả hiệu quả điều trị",
    description:
      "Giữ lại giao diện carousel có nút điều hướng, nhưng dùng ảnh thật từ thư mục export để đảm bảo đúng tinh thần thiết kế.",
    imageSrc: assetPath("Landing Page PKTM SG 2.png"),
    imageAlt: "Ảnh cắt khác của phần kết quả điều trị trên landing page.",
    position: "50% 54%",
    fit: "cover" as const,
  },
];

const pressSlides = [
  {
    badge: "Báo chí & nghiên cứu",
    title: "Hệ thống bài báo và tư liệu khoa học làm nền cho uy tín chuyên môn",
    description:
      "Giữ phần hiển thị dạng thẻ với nút điều hướng để người xem dễ lướt qua các đầu báo, tạp chí và nguồn nghiên cứu liên quan.",
    imageSrc: assetPath("Landing Page 2 (Dev).png"),
    imageAlt: "Phần thông cáo báo chí và nghiên cứu khoa học trên landing page.",
    position: "50% 69%",
    fit: "cover" as const,
  },
  {
    badge: "Thông tin chuyên môn",
    title: "Các đầu báo nhấn mạnh số ca thành công và mức độ hài lòng sau phẫu thuật",
    description:
      "Nội dung được giữ trong băng section riêng, nổi bật bằng nền xanh đậm và cụm thẻ báo chí trên nền trắng.",
    imageSrc: assetPath("Landing Page PKTM SG.png"),
    imageAlt: "Biến thể của phần báo chí và nghiên cứu khoa học.",
    position: "50% 69%",
    fit: "cover" as const,
  },
  {
    badge: "Tư liệu truyền thông",
    title: "Mỗi slide cho thấy thêm một biến thể sắp xếp thẻ bài báo, vẫn bám sát cùng tông nhận diện",
    description:
      "Việc triển khai dưới dạng carousel nhẹ giúp tái sử dụng ảnh export sẵn có thay vì dựng lại từng card từ ảnh scan.",
    imageSrc: assetPath("Landing Page PKTM SG 2.png"),
    imageAlt: "Biến thể khác của phần bài báo và nghiên cứu khoa học.",
    position: "50% 69%",
    fit: "cover" as const,
  },
];

const severitySlides = [
  {
    badge: "Độ 1 - Nhẹ",
    title: "Vết lõm < 2 cm",
    description: "Ảnh hưởng thẩm mỹ, ít tác động chức năng hô hấp/tim mạch",
    imageSrc: assetPath("Landing Page 2 (Dev).png"),
    imageAlt: "Minh họa độ 1 của lõm ngực trên landing page.",
    position: "18% 84%",
    fit: "cover" as const,
  },
  {
    badge: "Độ 2 - Trung bình",
    title: "Vết lõm 2 - 4 cm",
    description: "Bắt đầu ảnh hưởng hô hấp, tuần hoàn khi vận động mạnh",
    imageSrc: assetPath("Landing Page 2 (Dev).png"),
    imageAlt: "Minh họa độ 2 của lõm ngực trên landing page.",
    position: "50% 84%",
    fit: "cover" as const,
  },
  {
    badge: "Độ 3 - Nặng",
    title: "Vết lõm > 4 cm",
    description: "Chèn ép tim và phổi gây mệt mỏi, khó thở, ảnh hưởng phát triển thể chất",
    imageSrc: assetPath("Landing Page 2 (Dev).png"),
    imageAlt: "Minh họa độ 3 của lõm ngực trên landing page.",
    position: "82% 84%",
    fit: "cover" as const,
  },
];

const testimonialSlides = [
  {
    quote:
      "Sau ca mổ, tôi thấy con gái khỏe và vui hơn hẳn. Tiếng thở con đều, tự tin chạy nhảy, vợ chồng tôi cũng an tâm hơn khi đi làm, cảm ơn bác sĩ Vỹ.",
    name: "Chị Hằng",
    detail: "mẹ bé Lan Anh, 10 tuổi (Cà Mau)",
    imageSrc: assetPath("Landing Page 2 (Dev).png"),
    imageAlt: "Phụ huynh chia sẻ sau điều trị.",
    position: "12% 90%",
  },
  {
    quote:
      "Ngày trước nhìn con lúc nào cũng lầm lì, đi đâu cũng khom lưng để giấu cái lõm mà xót lắm. Sau khi được bác sĩ can thiệp, thấy con đứng thẳng người, tự tin mặc áo đồng phục đi học vui vẻ hơn nhiều.",
    name: "Anh Minh",
    detail: "bố của bé Gia Bảo, 14 tuổi (Kon Tum)",
    imageSrc: assetPath("Landing Page 2 (Dev).png"),
    imageAlt: "Chia sẻ của gia đình sau khi phẫu thuật Nuss.",
    position: "12% 94%",
  },
  {
    quote:
      "Từng có lúc mình không dám đi bơi hay tham gia bóng đá với bạn bè chỉ vì sợ bị trêu chọc. Ca mổ là bước ngoặt lớn nhất đời mình. Giờ đây, khi lõm ngực đã bằng phẳng, mình không còn thấy hụt hơi khi leo cầu thang và quan trọng nhất là cảm thấy mình được sống một cuộc đời bình thường như bao người khác.",
    name: "Bạn Nam",
    detail: "19 tuổi (Hà Nội)",
    imageSrc: assetPath("Landing Page 2 (Dev).png"),
    imageAlt: "Khách hàng chia sẻ sau điều trị thành công.",
    position: "12% 98%",
  },
];

const contactButtons = [
  { label: "Zalo", variant: "pill" },
  { label: "Gọi", variant: "circle" },
  { label: "Nhắn", variant: "circle" },
] as const;

function ClinicLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`clinicLogo ${compact ? "clinicLogo--compact" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2v4M17 2v4M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 16.2v2.8a2 2 0 0 1-2.2 2c-8-.8-14-6.8-14.8-14.8A2 2 0 0 1 6 4h2.8a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L9.2 12a16.2 16.2 0 0 0 2.8 2.8l1.5-1.5a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4.2 4.2L19 6.5" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 6 10 6-10 6Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function HeroMedia() {
  return (
    <div className="heroMedia">
      <div className="heroMedia__main">
        <Image
          fill
          priority
          src={assetPath("Landing Page 2 (Dev).png")}
          alt="PGS TS BS Trần Thanh Vỹ trong ảnh giới thiệu dịch vụ điều trị lõm ngực."
          sizes="(max-width: 960px) 100vw, 46vw"
          className="cropImage cropImage--hero"
        />
      </div>
      <div className="heroMedia__video">
        <div className="heroMedia__videoVisual" aria-hidden="true">
          <Image
            fill
            src={assetPath("Landing Page 2 (Dev).png")}
            alt=""
            sizes="(max-width: 960px) 64vw, 18vw"
            className="cropImage cropImage--video"
          />
          <span className="heroMedia__play">
            <PlayIcon />
          </span>
        </div>
        <div className="heroMedia__videoText">
          <p>Người đầu tiên đưa phương pháp phẫu thuật lõm ngực Nuss về Việt Nam</p>
          <span>Xem tư liệu giới thiệu</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="landingPage">
      <section className="sectionShell heroSection">
        <div className="heroCard">
          <div className="heroCopy">
            <div className="heroBrand">
              <ClinicLogo />
              <div>
                <p className="heroBrand__label">PHÒNG KHÁM</p>
                <h1 className="heroBrand__title">PGS TS BS. TRẦN THANH VỸ</h1>
                <p className="heroBrand__specialty">
                  Chuyên khoa Lồng ngực - Mạch máu - Bướu cổ
                </p>
              </div>
            </div>

            <div className="heroIntro">
              <span className="softBadge">Phương pháp điều trị tiên tiến</span>
              <h2>
                ĐIỀU TRỊ LÕM NGỰC
                <br />
                BẰNG PHƯƠNG PHÁP TIÊN TIẾN
                <br />
                CÙNG CHUYÊN GIA HÀNG ĐẦU
              </h2>
              <p>
                Lấy lại sự tự tin và sức khỏe cho con yêu với “Bàn tay vàng”
                <strong> PGS TS BS. Trần Thanh Vỹ</strong>.
              </p>
              <div className="heroActions">
                <Link href={HOTLINE_HREF} className="primaryButton">
                  ĐĂNG KÝ KHÁM
                  <span>VỚI PGS TS BS. TRẦN THANH VỸ</span>
                </Link>
              </div>
            </div>

            <div className="heroMeta">
              <div className="scheduleList" aria-label="Giờ khám">
                <div className="scheduleItem">
                  <span className="scheduleItem__icon">
                    <CalendarIcon />
                  </span>
                  <div>
                    <p>Giờ khám</p>
                    <strong>T2 - T6: 08:00 - 17:00</strong>
                  </div>
                </div>
                <div className="scheduleItem">
                  <span className="scheduleItem__icon">
                    <ClockIcon />
                  </span>
                  <div>
                    <p>Lịch ngoài giờ</p>
                    <strong>T7: 08:00 - 11:30</strong>
                  </div>
                </div>
              </div>

              <div className="contactButtons">
                {contactButtons.map((button) => (
                  <Link
                    key={button.label}
                    href={HOTLINE_HREF}
                    className={`contactButtons__item contactButtons__item--${button.variant}`}
                    aria-label={`${button.label} - gọi đến ${HOTLINE_DISPLAY}`}
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <HeroMedia />
        </div>
      </section>

      <section className="sectionShell doctorSection">
        <div className="sectionHeading sectionHeading--center">
          <p className="eyebrow">Kinh nghiệm chuyên sâu</p>
          <h2>
            THẦY THUỐC ƯU TÚ, PHÓ GIÁO SƯ - TIẾN SĨ - BÁC SĨ
            <br />
            <span>TRẦN THANH VỸ</span>
          </h2>
        </div>

        <div className="doctorSection__grid">
          <figure className="doctorSection__photo">
            <div className="doctorSection__photoFrame">
              <Image
                fill
                src={assetPath("Landing Page 2 (Dev).png")}
                alt="PGS Trần Thanh Vỹ cùng GS Donald Nuss trong sự kiện chuyên ngành."
                sizes="(max-width: 960px) 100vw, 32vw"
                className="cropImage cropImage--doctor"
              />
            </div>
            <figcaption>
              PGS Trần Thanh Vỹ cùng GS.Donald Nuss - GS người Mỹ phát minh phẫu thuật
              Nuss
            </figcaption>
          </figure>

          <div className="credentialStack">
            {credentialHighlights.map((item) => (
              <article
                key={item.title}
                className={`credentialCard credentialCard--${item.tone}`}
              >
                <span className="credentialCard__icon">
                  <CheckIcon />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  {item.body ? <p>{item.body}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionShell nussSection">
        <div className="sectionHeading">
          <span className="capsuleTitle">PHƯƠNG PHÁP NUSS - ĐIỀU TRỊ TIÊN TIẾN NHẤT HIỆN NAY</span>
          <p className="sectionLead">
            Phương pháp phẫu thuật Nuss do PGS TS BS. Trần Thanh Vỹ thực hiện là bước
            tiến vượt bậc, giúp chỉnh hình lồng ngực mà không cần cắt xương ức và các
            sụn sườn như phương pháp cũ.
          </p>
        </div>

        <div className="nussGraphic">
          <Image
            src={assetPath("Frame 3674376.png")}
            alt="Sơ đồ mô tả lợi ích của phương pháp Nuss."
            width={1351}
            height={1217}
            sizes="(max-width: 960px) 100vw, 88vw"
          />
        </div>

        <div className="statsBand">
          <p>HIỆU QUẢ ĐIỀU TRỊ THỰC TẾ</p>
          <div className="statsBand__grid">
            <article>
              <strong>2000+</strong>
              <span>Ca phẫu thuật thành công</span>
            </article>
            <article>
              <strong>18+</strong>
              <span>Năm ứng dụng phương pháp Nuss</span>
            </article>
          </div>
        </div>
      </section>

      <section className="sectionShell showcaseSection">
        <div className="showcaseSection__media">
          <Image
            fill
            src={assetPath("Landing Page 2 (Dev).png")}
            alt="Hình ảnh minh họa trẻ em sau điều trị lõm ngực."
            sizes="(max-width: 960px) 100vw, 44vw"
            className="cropImage cropImage--child"
          />
        </div>

        <div className="showcaseSection__copy">
          <p className="showcaseSection__stat">
            Hơn <strong>2000</strong> ca phẫu thuật thành công, giúp các con tự tin viết
            tiếp tương lai.
          </p>
          <Link href={HOTLINE_HREF} className="secondaryButton">
            Tìm hiểu kết quả thực tế
            <ArrowIcon />
          </Link>
          <LeadForm
            title="Đăng ký khám nhanh"
            description="Để lại thông tin để được tư vấn và kết nối trực tiếp với phòng khám."
            submitLabel="ĐĂNG KÝ KHÁM VỚI PGS TS BS. TRẦN THANH VỸ"
            theme="blue"
            hotlineHref={HOTLINE_HREF}
          />
        </div>
      </section>

      <section className="sectionShell carouselSection carouselSection--pale">
        <div className="sectionHeading sectionHeading--center">
          <p className="eyebrow">So sánh trước và sau điều trị</p>
          <h2>KẾT QUẢ ĐIỀU TRỊ LÕM NGỰC BẰNG PHƯƠNG PHÁP NUSS</h2>
        </div>

        <MediaCarousel slides={beforeAfterSlides} aspectRatio="16 / 9" />
      </section>

      <section className="sectionShell carouselSection">
        <div className="sectionHeading sectionHeading--center">
          <p className="eyebrow">Bằng chứng truyền thông</p>
          <h2>THÔNG CÁO BÁO CHÍ & NGHIÊN CỨU KHOA HỌC</h2>
        </div>

        <MediaCarousel slides={pressSlides} aspectRatio="16 / 10" />
      </section>

      <section className="sectionShell symptomSection">
        <div className="symptomSection__panel">
          <div className="symptomSection__copy">
            <span className="capsuleTitle capsuleTitle--blue">DẤU HIỆU DỊ TẬT LÕM NGỰC</span>
            <div className="symptomList">
              {symptomItems.map((item) => (
                <article key={item} className="symptomItem">
                  <span />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="symptomSection__cta">
            <Image
              fill
              src={assetPath("Landing Page 2 (Dev).png")}
              alt="Hình ảnh minh họa phần CTA đăng ký khám."
              sizes="(max-width: 960px) 100vw, 46vw"
              className="cropImage cropImage--symptom"
            />
            <div className="symptomSection__overlay">
              <h2>
                Đăng ký khám ngay
                <br />
                khi con bạn
                <br />
                có dấu hiệu trên
              </h2>
              <Link href={HOTLINE_HREF} className="primaryButton primaryButton--small">
                ĐĂNG KÝ KHÁM
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionShell carouselSection carouselSection--warm">
        <div className="sectionHeading sectionHeading--center">
          <p className="eyebrow eyebrow--orange">Cẩm nang phụ huynh</p>
          <h2>HIỂU ĐÚNG VỀ MỨC ĐỘ LÕM NGỰC CỦA CON</h2>
        </div>

        <MediaCarousel slides={severitySlides} aspectRatio="4 / 5" />

        <p className="severityNote">
          <strong>Lời khuyên:</strong> Phẫu thuật sớm (từ 6 - 14 tuổi) đạt hiệu quả cao
          nhất khi xương còn mềm, giảm nguy cơ biến chứng và tâm lý mặc cảm.
        </p>
      </section>

      <section className="sectionShell quoteSection">
        <div className="quoteCard">
          <div className="quoteCard__copy">
            <p>
              “Đừng chờ đợi đến khi lõm ngực nặng hơn - Điều trị sớm là món quà tuyệt
              vời nhất ba mẹ dành cho tương lai của con!”
            </p>
            <Link href={HOTLINE_HREF} className="primaryButton">
              ĐĂNG KÝ KHÁM
              <span>CÙNG PGS TS BS. TRẦN THANH VỸ</span>
            </Link>
          </div>

          <div className="quoteCard__doctor">
            <Image
              fill
              src={assetPath("Landing Page 2 (Dev).png")}
              alt="Bác sĩ Trần Thanh Vỹ ở phần lời khuyên chuyên gia."
              sizes="(max-width: 960px) 100vw, 34vw"
              className="cropImage cropImage--quoteDoctor"
            />
          </div>
        </div>
      </section>

      <section className="sectionShell carouselSection carouselSection--pale">
        <div className="sectionHeading sectionHeading--center">
          <p className="eyebrow">Phản hồi thực tế</p>
          <h2>PHẢN HỒI CỦA KHÁCH HÀNG</h2>
        </div>

        <TestimonialCarousel slides={testimonialSlides} />
      </section>

      <section className="sectionShell finalSection">
        <div className="sectionHeading sectionHeading--center">
          <p className="eyebrow">Kết nối ngay với chuyên gia</p>
          <h2>
            KẾT NỐI NGAY VỚI CHUYÊN GIA
            <br />
            ĐỂ ĐƯỢC HỖ TRỢ TỐT NHẤT
          </h2>
        </div>

        <div className="finalSection__grid">
          <LeadForm
            title="ĐỂ LẠI THÔNG TIN"
            description="Nhập họ tên và số điện thoại, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất."
            submitLabel="ĐĂNG KÝ NGAY"
            theme="light"
            hotlineHref={HOTLINE_HREF}
          />

          <aside className="clinicCardPanel">
            <div className="clinicCardPanel__brand">
              <ClinicLogo compact />
              <div>
                <p>PHÒNG KHÁM</p>
                <h3>PGS TS BS. TRẦN THANH VỸ</h3>
                <span>Chuyên khoa Lồng ngực - Mạch máu - Bướu cổ</span>
              </div>
            </div>

            <div className="clinicCardPanel__details">
              <p>
                <MapPinIcon />
                <span>Địa chỉ: 606/24 Đường 3/2, Phường Diên Hồng, TP. Hồ Chí Minh</span>
              </p>
              <p>
                <PhoneIcon />
                <span>Hotline: {HOTLINE_DISPLAY}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <div className="floatingContact" aria-label="Liên hệ nhanh">
        <Link href={HOTLINE_HREF}>Zalo</Link>
        <Link href={HOTLINE_HREF}>Gọi</Link>
        <Link href={HOTLINE_HREF}>Nhắn</Link>
      </div>
    </main>
  );
}
