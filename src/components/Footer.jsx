import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Murmurly</p>
        <div className="flex items-center gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
