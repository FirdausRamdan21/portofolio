"use client";

import { useState } from "react";
import { Check, Copy, Send } from "lucide-react";

const TOPICS = [
  "Peluang Magang (Internship)",
  "Rekrutmen Junior Developer",
  "Kolaborasi Proyek Web",
  "Diskusi Teknis / Pertanyaan",
];

/** Copy-email helper and lightweight quick message composer for the contact page. */
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard permission denied
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-abyss-700/70 bg-abyss-950/80 px-2.5 py-1 text-[11px] font-semibold text-foam-200 transition-colors hover:border-sky-500/50 hover:text-sky-300"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-emerald-400" /> Tersalin!
        </>
      ) : (
        <>
          <Copy className="h-3 w-3 text-sky-400" /> Salin Email
        </>
      )}
    </button>
  );
}

export function QuickMessageForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [copiedMsg, setCopiedMsg] = useState(false);

  const buildMailBody = () => {
    const sender = name.trim() || "Pengunjung Portofolio";
    const body = message.trim() || "Halo Firdaus, saya ingin berdiskusi lebih lanjut.";
    return `Halo Firdaus,\n\nNama: ${sender}\nTopik: ${topic}\n\n${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portofolio] ${topic}`);
    const body = encodeURIComponent(buildMailBody());
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(
        `Kepada: ${email}\nSubjek: [Portofolio] ${topic}\n\n${buildMailBody()}`
      );
      setCopiedMsg(true);
      setTimeout(() => setCopiedMsg(false), 2200);
    } catch {
      // Fallback ignored if clipboard permission denied
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-2xl border border-abyss-800/80 bg-abyss-900/60 p-6 backdrop-blur-sm"
    >
      <h2 className="text-base font-bold text-foam-50">
        Kirim Pesan Cepat
      </h2>
      <p className="mt-1 text-xs text-foam-400">
        Susun pesan singkat untuk langsung dibuka di aplikasi email atau disalin ke clipboard.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-[11px] font-semibold text-foam-300"
          >
            Nama / Instansi
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Mis. Budi — PT Teknologi"
            className="w-full rounded-xl border border-abyss-700/60 bg-abyss-950/70 px-3.5 py-2 text-xs text-foam-100 placeholder:text-foam-500 outline-none focus:border-sky-500"
          />
        </div>
        <div>
          <label
            htmlFor="contact-topic"
            className="mb-1.5 block text-[11px] font-semibold text-foam-300"
          >
            Topik
          </label>
          <select
            id="contact-topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded-xl border border-abyss-700/60 bg-abyss-950/70 px-3.5 py-2 text-xs text-foam-100 outline-none focus:border-sky-500"
          >
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3">
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-[11px] font-semibold text-foam-300"
        >
          Pesan
        </label>
        <textarea
          id="contact-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ceritakan kebutuhan proyek, posisi magang, atau jadwal diskusi..."
          className="w-full rounded-xl border border-abyss-700/60 bg-abyss-950/70 px-3.5 py-2 text-xs text-foam-100 placeholder:text-foam-500 outline-none focus:border-sky-500"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-xs font-bold text-abyss-950 shadow-md shadow-sky-500/20 transition-colors hover:bg-sky-400"
        >
          <Send className="h-3.5 w-3.5" /> Buka di Aplikasi Email
        </button>
        <button
          type="button"
          onClick={handleCopyMessage}
          className="inline-flex items-center gap-2 rounded-xl border border-abyss-700/70 bg-abyss-950/70 px-4 py-2.5 text-xs font-semibold text-foam-200 transition-colors hover:border-sky-500/50 hover:text-sky-300"
        >
          {copiedMsg ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" /> Pesan Tersalin!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-sky-400" /> Salin Format Pesan
            </>
          )}
        </button>
      </div>
    </form>
  );
}
