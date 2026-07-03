import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { QRCodeButton } from "./QRCodeButton";

export function ContactSection() {
  return (
    <footer className="relative border-t border-brass/15 bg-ivory px-6 py-14 dark:bg-obsidian sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-espresso/60 dark:text-ivory/60">
            Modern tasting plates, served in a room that changes with the
            season. Reservations recommended for dinner.
          </p>
          <QRCodeButton />
        </div>

        <div className="grid grid-cols-1 gap-6 font-body text-sm text-espresso/80 dark:text-ivory/80 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
            <span>
              14 Marine Parade,
              <br /> Colaba, Mumbai 400001
            </span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
            <span>
              Tue – Sun, 12:00 – 23:30
              <br /> Closed Mondays
            </span>
          </div>
          <a href="tel:+912266550198" className="flex items-start gap-3 hover:text-brass-dark dark:hover:text-brass">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
            +91 22 6655 0198
          </a>
          <a href="mailto:reservations@aurum.restaurant" className="flex items-start gap-3 hover:text-brass-dark dark:hover:text-brass">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
            reservations@aurum.restaurant
          </a>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-5xl border-t border-brass/10 pt-6 font-mono text-[11px] uppercase tracking-widest2 text-espresso/40 dark:text-ivory/40">
        © {new Date().getFullYear()} Aurum Restaurant · Augmented Reality Menu
      </p>
    </footer>
  );
}
