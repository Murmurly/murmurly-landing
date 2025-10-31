import React from "react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-4 pt-16 md:pt-24 text-center">
        <h1 className="text-[42px] md:text-[64px] leading-[1.05] font-extrabold tracking-tight">
          Your personal meeting
          <br className="hidden md:block" /> assistant — in real time.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600">
          Think faster. Speak smarter. Murmurly listens, thinks, and nudges you at the right moment.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-medium shadow-soft"
          >
            Get Early Access
          </a>
          <a
            href="#demo"
            className="rounded-full border border-slate-300 hover:border-slate-400 bg-white px-6 py-3 font-medium inline-flex items-center gap-2 shadow-sm"
          >
            Watch Demo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l8 6-8 6V6z" fill="currentColor" />
            </svg>
          </a>
        </div>

        <div id="demo" className="relative mt-12 flex justify-center">
          <div className="ripple-under"></div>
          <div className="rounded-[26px] overflow-hidden border border-slate-200 shadow-card bg-white w-full max-w-[1080px]">
            <img
              src="/hero-demo.png"
              alt="Demo call"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-[22px] font-semibold">Listens</h3>
            <p className="mt-2 text-slate-600">
              Murmurly joins your calls to listen in context — not just words.
            </p>
          </div>
          <div>
            <h3 className="text-[22px] font-semibold">Thinks</h3>
            <p className="mt-2 text-slate-600">
              It understands tone, timing, and intent to surface useful cues.
            </p>
          </div>
          <div>
            <h3 className="text-[22px] font-semibold">Nudges</h3>
            <p className="mt-2 text-slate-600">
              Smart prompts appear naturally, just when you need them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

