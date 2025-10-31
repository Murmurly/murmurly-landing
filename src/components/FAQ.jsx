import React, { useState } from "react";

const faqs = [
  {
    q: "What is Murmurly?",
    a: "Murmurly is a real-time AI meeting assistant that listens to your calls and gives you in-the-moment prompts, notes, and follow-ups.",
  },
  {
    q: "How do I install it?",
    a: "Join the waitlist. We’ll send you the Chrome extension and web app with setup instructions.",
  },
  {
    q: "What meetings is it best for?",
    a: "Sales calls, founder/investor calls, coaching sessions, recruiting, and customer success — anywhere you need to sound sharp.",
  },
  {
    q: "Does it record my calls?",
    a: "By default it only joins to assist. Recording/export is optional and can be turned off depending on your policies.",
  },
  {
    q: "Is my data private?",
    a: "Yes — we aim for call-level control, opt-in sharing, and enterprise-friendly policies. You choose what’s stored.",
  },
  {
    q: "Can I customize the prompts?",
    a: "Yes. You’ll be able to create industry packs, personal prompts, and tone presets.",
  },
  {
    q: "Does it work with Zoom, Meet, Teams?",
    a: "The MVP targets browser-based calls first (Meet/Zoom in browser), then expands to more platforms.",
  },
  {
    q: "Can my team use it together?",
    a: "Yes. You can invite teammates and have shared prompts, shared notes, and a unified call library.",
  },
  {
    q: "What does it cost?",
    a: "Early users will get founder pricing. Final pricing depends on usage, seats, and integrations.",
  },
  {
    q: "How do I get support?",
    a: "Reply to the onboarding email or contact us from the app — we answer real humans quickly.",
  },
];


function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-medium">{q}</span>
        <svg
          className={`transition ${open ? "rotate-180" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {open && <p className="mt-3 text-slate-600">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold">FAQ</h2>
        <div className="mt-8">
          {faqs.map((f) => (
            <Item key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
