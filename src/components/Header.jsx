import React from "react";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Murmury" className="h-5 w-auto object-contain" />
          <span className="text-[18px] font-semibold tracking-tight">Murmurly</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#team" className="hover:text-slate-900">Our team</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
          <a href="#cta" className="rounded-full bg-brand-500 hover:bg-brand-600 text-white px-4 py-2">
            Get Early Access
          </a>
        </nav>
      </div>
    </header>
  );
}
