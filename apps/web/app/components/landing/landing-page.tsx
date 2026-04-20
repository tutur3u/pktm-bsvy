import { ContactSection } from "./contact-section";
import { CredentialsSection } from "./credentials-section";
import { EffectivenessSection } from "./effectiveness-section";
import { HeroSection } from "./hero-section";
import { NussMethodSection } from "./nuss-method-section";
import { PressSection } from "./press-section";
import { ResultsSection } from "./results-section";
import { SeveritySection } from "./severity-section";
import { SymptomsSection } from "./symptoms-section";
import { TestimonialsSection } from "./testimonials-section";

export function LandingPage() {
  return (
    <main className="bg-[#f6fcff] text-[#14314c]">
      <HeroSection />
      <CredentialsSection />
      <NussMethodSection />
      <EffectivenessSection />
      <ResultsSection />
      <PressSection />
      <SymptomsSection />
      <SeveritySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
