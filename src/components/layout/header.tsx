'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleHomeClick = () => {
    setMobileOpen(false);

    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    router.push('/');
  };

  const handleAboutClick = () => {
    setMobileOpen(false);

    if (pathname === '/') {
      document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    router.push('/#about');
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
            <h1 className="text-left text-lg font-bold leading-none tracking-tight text-green-800 sm:text-2xl">
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

          <Link
            href="/become-a-member"
            className="text-sm font-medium text-gray-700 transition hover:text-green-700"
          >
            Membership
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/become-a-member"
          className="hidden whitespace-nowrap rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-green-800 md:inline-flex"
        >
          Become a Member
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-green-700 shadow-sm transition hover:bg-green-50 md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-2 p-4">
          <button
            onClick={handleHomeClick}
            className="block w-full rounded-2xl px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
          >
            Home
          </button>

          <button
            onClick={handleAboutClick}
            className="block w-full rounded-2xl px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
          >
            About
          </button>

          <Link
            href="/products"
            onClick={() => setMobileOpen(false)}
            className="block rounded-2xl px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
          >
            Products
          </Link>

          <div className="pt-2">
            <Link
              href="/become-a-member"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-full bg-green-700 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-green-800"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
