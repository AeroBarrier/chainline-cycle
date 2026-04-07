import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Visit ChainLine Cycle at 1139 Ellis St, Kelowna BC. Call (250) 860-1968 or email bikes@chainline.ca." };

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Get in Touch</p>
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-[var(--color-fg)] mb-12">Contact</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <div>
                <h2 className="text-sm font-medium text-[var(--color-fg)] mb-1">Address</h2>
                <p className="text-sm" style={{ color: "rgba(245,240,235,0.6)" }}>1139 Ellis St<br />Kelowna, BC V1Y 1Z5</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <div>
                <h2 className="text-sm font-medium text-[var(--color-fg)] mb-1">Phone</h2>
                <a href="tel:2508601968" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(245,240,235,0.6)" }}>(250) 860-1968</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <div>
                <h2 className="text-sm font-medium text-[var(--color-fg)] mb-1">Email</h2>
                <a href="mailto:bikes@chainline.ca" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(245,240,235,0.6)" }}>bikes@chainline.ca</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <div>
                <h2 className="text-sm font-medium text-[var(--color-fg)] mb-1">Hours</h2>
                <div className="text-sm space-y-0.5" style={{ color: "rgba(245,240,235,0.6)" }}>
                  <p>Monday: 10:00 - 5:00</p>
                  <p>Tuesday - Friday: 9:30 - 5:30</p>
                  <p>Saturday: 10:00 - 4:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ExternalLink className="w-5 h-5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <div>
                <h2 className="text-sm font-medium text-[var(--color-fg)] mb-1">Instagram</h2>
                <a href="https://www.instagram.com/chainline_cycle_kelowna/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(245,240,235,0.6)" }}>@chainline_cycle_kelowna</a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-xl overflow-hidden aspect-square" style={{ background: "rgba(245,240,235,0.03)", border: "1px solid rgba(245,240,235,0.06)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.8!2d-119.4955!3d49.8877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb6e3e!2sChainLine+Cycle!5e0!3m2!1sen!2sca!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="ChainLine Cycle location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
