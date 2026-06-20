import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/images/shared/f0HEEzRQxCUtKyThUP60hvJiShI.png" alt="Smallstep AI" width={38} height={38} />
      <span className="font-display text-xl font-semibold text-ink">smallstep.ai</span>
    </Link>
  );
}
