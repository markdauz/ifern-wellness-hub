import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-green-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr_1fr] lg:items-center">
          {/* Brand */}
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <Image
              src="/images/logo.png"
              alt="I-Fern Logo"
              width={80}
              height={80}
              priority
              className="h-14 w-auto object-contain sm:h-20"
            />

            <div className="text-left">
              <h2 className="text-xl font-bold tracking-tight text-green-800 sm:text-2xl">
                I-FERN
              </h2>

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-green-700/70 sm:text-[11px]">
                Wellness Hub
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="text-center">
            <p className="mx-auto max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Your trusted source for wellness supplements and beauty products,
              helping you achieve better health, vitality, and radiant
              confidence.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-green-200" />

              <a
                href="https://www.facebook.com/share/18qvbvubvQ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-green-200 text-green-700 transition-all hover:border-green-300 hover:bg-green-50"
              >
                <FaFacebookF size={15} />
              </a>

              <div className="h-px w-12 bg-green-200" />
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center lg:text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-green-700">
              We Change Lives
            </p>

            <p className="mt-2 text-xs text-gray-400">
              Official I-FERN Distributor
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-green-100 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 md:flex-row">
            <p>© {new Date().getFullYear()} I-FERN Wellness Hub</p>

            <p className="text-xs uppercase tracking-[0.25em] text-green-700/70">
              Health • Beauty • Wellness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
