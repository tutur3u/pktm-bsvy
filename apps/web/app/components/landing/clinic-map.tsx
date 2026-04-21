import { CLINIC_MAP_EMBED_URL, CLINIC_MAP_URL } from "./content";
import { ExternalLinkIcon } from "./icons";

export function ClinicMap() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#bde8fb] bg-white shadow-[0_18px_40px_rgba(20,81,126,0.12)]">
      <div className="flex items-center justify-between gap-4 border-b border-[#d9eef9] bg-[linear-gradient(180deg,rgba(241,250,255,0.98),rgba(232,246,255,0.92))] px-4 py-3">
        <div className="min-w-0">
          <p className="text-[0.72rem] font-black uppercase tracking-[0.16em] text-[#67a6c7]">
            Bản đồ phòng khám
          </p>
          <p className="mt-1 text-sm font-semibold text-[#28557a] sm:text-[0.98rem]">
            Xem vị trí và mở chỉ đường nhanh trên Google Maps
          </p>
        </div>
        <a
          href={CLINIC_MAP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#b7e3f7] bg-white/90 px-3 py-2 text-sm font-black text-[#1d95d5] shadow-[0_10px_22px_rgba(29,149,213,0.14)] transition hover:-translate-y-0.5 hover:border-[#93d6f3] hover:text-[#137fbb]"
        >
          <span className="hidden sm:inline">Xem trên Maps</span>
          <span className="sm:hidden">Chỉ đường</span>
          <ExternalLinkIcon className="size-4" />
        </a>
      </div>
      <div className="aspect-[4/3] w-full bg-[#d8efff] md:aspect-[2.15/1]">
        <iframe
          title="Bản đồ phòng khám PGS TS BS. Trần Thanh Vỹ"
          src={CLINIC_MAP_EMBED_URL}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="bg-[linear-gradient(180deg,#ffffff,rgba(245,251,255,0.94))] px-4 py-3">
        <p className="text-sm font-semibold text-[#4d6f8c]">
          Chạm vào bản đồ để phóng to hoặc xem khu vực phòng khám chi tiết hơn.
        </p>
      </div>
    </div>
  );
}
