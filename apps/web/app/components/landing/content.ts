export const HOTLINE_DISPLAY = "0838 000 644";
export const HOTLINE_HREF = "tel:0838000644";
export const APPOINTMENT_LINK = "#quick-register-form";
export const HERO_VIDEO_ID = "1CwoEc585oE";
export const HERO_VIDEO_EMBED_URL = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?rel=0`;
export const HERO_VIDEO_URL = `https://www.youtube.com/shorts/${HERO_VIDEO_ID}`;
export const HERO_VIDEO_POSTER_URL = `https://i.ytimg.com/vi/${HERO_VIDEO_ID}/maxresdefault.jpg`;
export const CLINIC_ADDRESS =
  "606/24 Đường 3/2, Phường Diên Hồng, TP. Hồ Chí Minh, Việt Nam";
export const CLINIC_MAP_EMBED_URL =
  "https://www.google.com/maps?q=606%2F24%20%C4%90%C6%B0%E1%BB%9Dng%203%2F2%2C%20Ph%C6%B0%E1%BB%9Dng%20Di%C3%AAn%20H%E1%BB%93ng%2C%20TP.%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam&z=17&output=embed";
export const CLINIC_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=606%2F24%20%C4%90%C6%B0%E1%BB%9Dng%203%2F2%2C%20Ph%C6%B0%E1%BB%9Dng%20Di%C3%AAn%20H%E1%BB%93ng%2C%20TP.%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam";
export const FOOTER_COPYRIGHT =
  "© 2026 Phòng khám Tĩnh mạch Sài Gòn. Bảo lưu mọi quyền.";
export const ZALO_CONTACT_CARD = {
  src: "/assets/zalo.jpg",
  alt: "Mã QR Zalo của Phòng Khám Bác sĩ Trần Thanh Vỹ.",
  width: 984,
  height: 1200,
};

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

export type VideoIntroContent = {
  titleLead: string;
  titleFocus: string;
  titleTail: string;
  body: string;
};

export type PressItem = MediaImage & {
  href: string;
  label: string;
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

export type SymptomRegisterCallout = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
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

export const symptomRegisterCallout: SymptomRegisterCallout = {
  eyebrow: "Thăm khám sớm",
  title: "Nếu con có những dấu hiệu trên, đừng để tình trạng kéo dài thêm.",
  body: "Đăng ký tư vấn cùng PGS TS BS. Trần Thanh Vỹ để được đánh giá đúng mức độ lõm ngực và hướng can thiệp phù hợp cho con.",
  ctaLabel: "Đăng ký khám",
};

export const stats: Stat[] = [
  { value: "2000+", label: "Ca phẫu thuật thành công" },
  { value: "18+", label: "Năm ứng dụng phương pháp Nuss" },
];

export const videoIntroContent: VideoIntroContent = {
  titleLead: "TÌM HIỂU VỀ",
  titleFocus: "BÁC SĨ TRẦN THANH VỸ",
  titleTail: "ĐIỀU TRỊ LÕM NGỰC",
  body: "Video giới thiệu giúp phụ huynh tìm hiểu thêm về Bác sĩ Trần Thanh Vỹ, kinh nghiệm chuyên môn và định hướng đúng điều trị lõm ngực.",
};

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

export const pressItems: PressItem[] = [
  {
    src: "/assets/news-1.png",
    alt: "Bài báo Thực hiện phẫu thuật lõm ngực thành công hơn 1000 ca (2016).",
    href: "https://tapchiyhoctphcm.vn/upload/2016/20%202bvdhyd/029.pdf",
    label: "Mở bài báo Thực hiện phẫu thuật lõm ngực thành công hơn 1000 ca (2016)",
  },
  {
    src: "/assets/news-2.png",
    alt: "Bài báo Người Lao Động về ca phẫu thuật điều trị lõm ngực đầu tiên tại TPHCM của bác sĩ Trần Thanh Vỹ.",
    href: "https://nld.com.vn/suc-khoe/dieu-tri-lom-thanh-nguc-bam-sinh-226293.htm",
    label:
      "Mở bài báo Người Lao Động về ca phẫu thuật điều trị lõm ngực đầu tiên tại TPHCM",
  },
  {
    src: "/assets/news-3.png",
    alt: "Bài báo Người Lao Động về việc BV Đa khoa Đà Nẵng tiếp nhận kỹ thuật điều trị Nuss từ bác sĩ Trần Thanh Vỹ năm 2009.",
    href: "https://nld.com.vn/suc-khoe/gia-dinh-bon-nguoi-lom-nguc-hiem-gap-2009080210117363.htm",
    label:
      "Mở bài báo về việc BV Đa khoa Đà Nẵng tiếp nhận kỹ thuật điều trị Nuss năm 2009",
  },
  {
    src: "/assets/news-4.png",
    alt: "Bài báo khoa học ScienceDirect về ca phẫu thuật thành công cho bé gái 7 tuổi có khe hở xương ức kết hợp với lõm ngực.",
    href: "https://www.sciencedirect.com/science/article/pii/S2213576622003323?fbclid=IwY2xjawQkZY1leHRuA2FlbQIxMABicmlkETFLY3R6dkliNHA3eW5FRXpMc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgH__gfeFeG5aGSgoDTMXsbJRMtURVtje5p1EvMvShneT0R76dpwuBtyxiLH_aem_7e3RLsR_J8Nk8f7Z2Gsg3w",
    label:
      "Mở bài báo khoa học ScienceDirect về ca phẫu thuật cho bé gái 7 tuổi có khe hở xương ức kết hợp với lõm ngực",
  },
  {
    src: "/assets/news-5.png",
    alt: "Bài báo Thanh Niên về tư vấn của bác sĩ Vỹ cho trẻ bị lõm ngực bẩm sinh.",
    href: "https://thanhnien.vn/tre-lom-nguc-bam-sinh-185421550.htm",
    label: "Mở bài báo Thanh Niên về tư vấn cho trẻ bị lõm ngực bẩm sinh",
  },
  {
    src: "/assets/news-6.png",
    alt: "Bài báo Gia Lai Online về việc bác sĩ Vỹ hỗ trợ và hướng dẫn kỹ thuật điều trị lõm ngực bẩm sinh cho 2 bệnh nhi tại Gia Lai năm 2013.",
    href: "https://baogialai.com.vn/ung-dung-phau-thuat-nuss-dieu-tri-benh-ly-lom-nguc-bam-sinh-post551748.html?gidzl=1t7DC_K3hpG0RiKyzn-jC05fnJllIwWq5cwNQEzF_JKRQP0-w4cgCauzbpou7QXbJJt4F6F0Gri_ymAZDG",
    label:
      "Mở bài báo Gia Lai Online về hỗ trợ kỹ thuật điều trị lõm ngực bẩm sinh năm 2013",
  },
  {
    src: "/assets/news-7.png",
    alt: "Bài báo khoa học về 40 ca phẫu thuật thành công tại Bệnh viện Nhi Đồng 2 từ năm 2011 đến năm 2013 bằng phương pháp NUSS.",
    href: "https://tapchiyhoctphcm.vn/articles/12312",
    label:
      "Mở bài báo khoa học về 40 ca phẫu thuật thành công tại Bệnh viện Nhi Đồng 2 bằng phương pháp NUSS",
  },
  {
    src: "/assets/news-8.png",
    alt: "Bài báo Cần Thơ Online về việc bác sĩ Vỹ hỗ trợ điều trị lõm ngực cho 2 bé tại Bệnh viện Đa khoa Hoàn Mỹ Cửu Long năm 2015.",
    href: "https://baocantho.com.vn/dieu-tri-hai-ca-lom-xuong-nguc-bam-sinh-a62028.html?gidzl=8CyW10_Hvt8dq2WB3StYT2FQAGyGaULmEjeg2K76xI8wZo4FGP2y9slQ8Lv4nxmWE8rr3pGTB_vE2T3hSm",
    label:
      "Mở bài báo Cần Thơ Online về hỗ trợ điều trị lõm ngực cho 2 bé năm 2015",
  },
  {
    src: "/assets/news-9.png",
    alt: "Bài viết của Bệnh viện Đa khoa Tỉnh Quảng Trị về việc tiếp nhận và chuyển giao kỹ thuật điều trị lõm ngực bằng phương pháp NUSS từ bác sĩ Vỹ năm 2022.",
    href: "https://benhvientinh.quangtri.gov.vn/vi/news/hoat-dong-chuyen-mon/benh-vien-da-khoa-tinh-lan-dau-tien-dung-kim-loai-tao-hinh-long-nguc-cho-benh-nhan-bi-lom-nguc-bam-sinh-914.html",
    label:
      "Mở bài viết của Bệnh viện Đa khoa Tỉnh Quảng Trị về chuyển giao kỹ thuật NUSS năm 2022",
  },
  {
    src: "/assets/news-10.png",
    alt: "Bài báo khoa học NIH về 39 bệnh nhân được phẫu thuật bằng hệ thống cố định thanh kẹp và vít tại BV ĐHYD TPHCM năm 2023.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11751887/",
    label:
      "Mở bài báo khoa học NIH về 39 bệnh nhân tại BV ĐHYD TPHCM năm 2023",
  },
  {
    src: "/assets/news-11.png",
    alt: "Bài báo Lao Động về việc bác sĩ Vỹ hỗ trợ và hướng dẫn kỹ thuật Nuss cho Bệnh viện Đa khoa Tỉnh Kon Tum vào tháng 7 năm 2024.",
    href: "https://laodong.vn/suc-khoe/phau-thuat-nhieu-truong-hop-bi-di-dang-long-nguc-o-kon-tum-1370027.ldo",
    label:
      "Mở bài báo Lao Động về hỗ trợ kỹ thuật Nuss tại Kon Tum vào tháng 7 năm 2024",
  },
];

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
