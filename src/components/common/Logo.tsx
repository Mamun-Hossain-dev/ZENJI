import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ZENJI home"
      className={cn("relative block h-7 w-[104px] shrink-0", className)}
    >
      <Image
        src="/images/Outlook-ZENJI.png"
        alt="ZENJI"
        fill
        priority
        sizes="160px"
        className="object-contain object-left brightness-0 invert"
      />
    </Link>
  );
}
