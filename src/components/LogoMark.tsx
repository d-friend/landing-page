import Image from "next/image";
import logo from "@/assets/logo.png";

export default function LogoMark({ className = "h-9" }: { className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-black px-1.5 py-1 ${className}`}>
      <Image src={logo} alt="D-Friend" className="h-full w-auto object-contain" priority />
    </span>
  );
}
