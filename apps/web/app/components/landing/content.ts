export const HOTLINE_DISPLAY = "0838 000 644";
export const HOTLINE_HREF = "tel:0838000644";
export const APPOINTMENT_LINK = "#quick-register";
export const HERO_VIDEO_EMBED_URL = "https://www.youtube.com/embed/1CwoEc585oE";
export const HERO_VIDEO_URL = "https://www.youtube.com/shorts/1CwoEc585oE";

export type Tone = "blue" | "neutral" | "green" | "mint" | "lavender";

export type CredentialHighlight = {
  tone: Tone;
  title: string;
  body: string;
};

export type SymptomItem = {
  strong: string;
  rest: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type MediaImage = {
  src: string;
  alt: string;
};

export type Testimonial = {
  imageSrc: string;
  imageAlt: string;
  quote: string;
  author: string;
};

export type QuickContact = {
  label: string;
  href: string;
  kind: "text" | "phone" | "message";
};

export const credentialHighlights: CredentialHighlight[] = [
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
    tone: "mint",
    title: "Can thiệp thành công hơn 2.000 ca",
    body: "lõm ngực, lồi ngực",
  },
  {
    tone: "lavender",
    title: "Thành viên Hội Phẫu thuật Dị dạng Lồng ngực thế giới CIWIG",
    body: "",
  },
];

export const symptomItems: SymptomItem[] = [
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

export const stats: Stat[] = [
  { value: "2000+", label: "Ca phẫu thuật thành công" },
  { value: "18+", label: "Năm ứng dụng phương pháp Nuss" },
];

export const resultImages: MediaImage[] = [
  {
    src: "/assets/result-2.png",
    alt: "So sánh trước và sau điều trị lõm ngực trên bệnh nhân thứ nhất.",
  },
  {
    src: "/assets/result-3.png",
    alt: "So sánh trước và sau điều trị lõm ngực trên bệnh nhân thứ hai.",
  },
];

export const pressImages: MediaImage[] = Array.from(
  { length: 11 },
  (_, index) => ({
    src: `/assets/news-${index + 1}.png`,
    alt: `Bài báo và nghiên cứu khoa học số ${index + 1}.`,
  }),
);

export const severityCards: MediaImage[] = [
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

export const testimonials: Testimonial[] = [
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

export const quickContacts: QuickContact[] = [
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
];
