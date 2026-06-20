import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="font-display text-xl font-semibold bg-gradient-to-r from-[#0F385A] to-[#2CA9A8] bg-clip-text text-transparent"
    >
      smallstep.ai
    </Link>
  );
}
