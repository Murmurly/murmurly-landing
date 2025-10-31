
import React from "react";

const items = [
  { title: "Live Prompts", text: "Surface key talking points in real time." },
  { title: "Smart Nudges", text: "Get gentle reminders without interrupting you$
  { title: "Instant Notes", text: "Summaries appear seconds after your call end$
  { title: "Contextual cues", text: "Real-time topic suggestions that help you"$
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Features</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ga$
          {items.map((it) => (
            <div key={it.title} className="card p-6">
              <div className="text-brand-500 text-2xl">▢</div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
