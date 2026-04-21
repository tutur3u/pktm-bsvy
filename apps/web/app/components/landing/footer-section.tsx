import { FOOTER_COPYRIGHT } from "./content";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#dff2ff_0%,#cbeaff_100%)] pb-8 pt-4">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="border-t border-[#a9d8f2] pt-5 text-center">
          <p className="text-sm font-semibold tracking-[0.03em] text-[#5d7c96] sm:text-[0.95rem]">
            {FOOTER_COPYRIGHT}
          </p>
        </div>
      </div>
    </footer>
  );
}
