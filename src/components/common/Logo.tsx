import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ZENJI home"
      className={cn("relative block h-6 w-20 shrink-0 sm:h-7 sm:w-[104px]", className)}
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
