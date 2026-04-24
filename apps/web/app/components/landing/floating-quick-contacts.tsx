import { quickContacts } from "./content";
import { QuickContactButton } from "./shared";

export function FloatingQuickContacts() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 md:bottom-6 md:right-6">
      {quickContacts.map((contact) => (
        <QuickContactButton key={contact.label} {...contact} />
      ))}
    </div>
  );
}
