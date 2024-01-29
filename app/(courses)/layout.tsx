// Reconstructed

import ConnectWallet from "@/components/connect-wallet";
import { NJLogo } from "@/components/nj-logo";
import PresenceCounter from "@/components/presence-counter";
import Link from "next/link";
import Image from "next/image";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="mx-auto w-full px-4">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between py-4">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <NJLogo />
            <span className="font-bold">Near Journey</span>
          </Link>
          <nav className="flex items-center gap-10">
            <Link href="/journey">📚 Courses</Link>
            <Link href="/near-university">🤝 Near University</Link>
            <Link href="/#play">🎁 Reward</Link>
            <Link href="/teach-on-near-journey">👨‍🏫 Teach</Link>
            <Link href="/blog">📝 Blog</Link>
            <Link href="/careers">💼 Careers</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <PresenceCounter />
          <ConnectWallet />
        </div>
      </header>
      <main>{children}</main>
      <div className="border-t-1 border-white/20">
        <div className="max-w-6xl m-auto text-white flex flex-wrap justify-between">
          <div className="p-8">
            <Image
              src="/svgs/nj-logo-full.svg"
              width={140}
              height={140}
              alt="NJ logo"
              priority
            />
          </div>
          <div className="p-5 w-48">
            <div className="text-xs uppercase text-white font-medium">
              Product
            </div>
            <a className="my-3 block text-white" href="/#">
              Home <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/teach-on-near-journey">
              Teach on Near Journey{" "}
              <span className="text-teal-600 text-xs p-1">Upcoming</span>
            </a>
            <a className="my-3 block text-white" href="/features">
              Features <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5 w-48">
            <div className="text-xs uppercase text-white font-medium">
              Resources
            </div>
            <a className="my-3 block text-white" href="/journey">
              Courses <span className="text-teal-600 text-xs p-1">New</span>
            </a>
            <a className="my-3 block text-white" href="/careers">
              Careers <span className="text-teal-600 text-xs p-1">Upcoming</span>
            </a>
            <a className="my-3 block text-white" href="/blog">
              Blogs <span className="text-teal-600 text-xs p-1">Upcoming</span>
            </a>
          </div>
          <div className="p-5 w-48">
            <div className="text-xs uppercase text-white font-medium">
              Connect
            </div>
            <a className="my-3 block text-white" href="/near-university">
              Near University{" "}
              <span className="text-teal-600 text-xs p-1">Upcoming</span>
            </a>
            <a className="my-3 block text-white" href="/privacy">
              Privacy <span className="text-teal-600 text-xs p-1">New</span>
            </a>
            <a className="my-3 block text-white" href="mailto:amaansayyad@yahoo.com">
              Contact <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reconstructed