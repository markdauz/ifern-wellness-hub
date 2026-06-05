'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    router.push('/?scroll=top');
  };

  const handleAboutClick = () => {
    if (pathname === '/') {
      document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    router.push('/?scroll=about');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <button onClick={handleHomeClick} className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="I-Fern Logo"
            width={80}
            height={80}
            priority
            className="h-12 w-auto object-contain sm:h-16"
          />

          <div>
            <h1 className="text-lg font-bold leading-none tracking-tight text-green-800 sm:text-2xl">
              I-FERN
            </h1>

            <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-green-700/80 sm:text-[11px] sm:tracking-[0.35em]">
              Wellness Hub
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <button
            onClick={handleHomeClick}
            className="text-sm font-medium text-gray-700 transition hover:text-green-700"
          >
            Home
          </button>

          <button
            onClick={handleAboutClick}
            className="text-sm font-medium text-gray-700 transition hover:text-green-700"
          >
            About
          </button>

          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 transition hover:text-green-700"
          >
            Products
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/products"
          className="whitespace-nowrap rounded-full bg-green-700 px-3 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-green-800 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="hidden sm:inline">Become a Member</span>
          <span className="sm:hidden">Join Now</span>
        </Link>
      </div>
    </header>
  );
}
