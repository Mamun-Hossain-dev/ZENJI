"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fighters = ["Jujutsu Kaisen", "Demon Slayer", "One Piece", "Naruto", "Dragon Ball", "Other"];

export function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [fighter, setFighter] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  function handleOpenChange(value: boolean) {
    setOpen(value);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const form = new FormData(event.currentTarget as HTMLFormElement);
    localStorage.setItem(
      "zenji-preference",
      JSON.stringify({ fighter, email: form.get("email"), offer: "ZENJI-FIRST" }),
    );
    setSubmitted(true);
  }

  async function copyOffer() {
    await navigator.clipboard.writeText("ZENJI-FIRST");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <div className="mb-8 text-center">
          <div className="relative mx-auto mb-7 h-6 w-[108px]">
            <Image src="/images/Outlook-ZENJI.png" alt="ZENJI" fill sizes="108px" className="object-contain brightness-0 invert" />
          </div>
          <DialogTitle className="font-display text-3xl font-bold uppercase leading-tight md:text-4xl">
            Free shipping on first order
          </DialogTitle>
          <DialogDescription className="mt-2 font-mono text-[10px] uppercase tracking-[0.23em] text-white/55">
            {fighter ? `Selected: ${fighter}` : "Choose your fighter"}
          </DialogDescription>
        </div>

        {submitted ? (
          <div className="grid min-h-[250px] place-items-center border border-white/15 text-center">
            <div>
              <Check className="mx-auto mb-4 size-8 text-signal" />
              <p className="font-display text-3xl uppercase">You&apos;re on the list.</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/50">Use your first-order code</p>
              <button type="button" onClick={copyOffer} className="mx-auto mt-6 flex items-center gap-4 border border-white/25 px-5 py-3 font-mono text-xs font-bold tracking-[0.18em] transition hover:border-signal">
                {copied ? "COPIED" : "ZENJI-FIRST"} {copied ? <Check className="size-4 text-signal" /> : <Copy className="size-4 text-signal" />}
              </button>
            </div>
          </div>
        ) : fighter ? (
          <form onSubmit={submit} className="space-y-3">
            <Input required name="email" type="email" aria-label="Email address" placeholder="EMAIL ADDRESS" />
            <Button className="w-full">Unlock free shipping →</Button>
            <button type="button" onClick={() => setFighter(null)} className="w-full pt-3 font-mono text-[9px] uppercase tracking-widest text-white/40 hover:text-white">
              ← Change selection
            </button>
          </form>
        ) : (
          <div className="grid gap-2">
            {fighters.map((item) => (
              <Button key={item} variant="outline" className="h-12 border-white/65 text-white hover:border-white" onClick={() => setFighter(item)}>
                {item}
              </Button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
