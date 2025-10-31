import React from "react";
import HeroDemo from "../assets/hero-demo.png";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-4 pt-16 md:pt-24 text-center">
        <h1 className="text-[42px] md:text-[64px] leading-[1.05] font-extrabold tracking-tight">
          Your personal meeting<br className="hidden md:block" /> assistant — in real time.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600">
          Think faster. Speak smarter. Murmurly listens, thinks, and nudges you at the right moment.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            id="cta"
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

        {/* The main hero image */}
        <div id="demo" className="relative mt-14">
          <div className="ripple-under" />
          <div className="card overflow-hidden">
            <img
              src={HeroDemo}
              alt="Demo call"
              className="w-full h-[240px] md:h-[360px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
