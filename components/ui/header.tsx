import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="absolute top-4 md:top-6 w-full z-30 pb-4 md:pb-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-center justify-between gap-x-2 h-12 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg px-3 shadow">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 bg-indigo-500/15 dark:bg-gray-800/50 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)] after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)]"
              aria-hidden="true"
            />
            {/* Site branding */}
            <div className="flex-1">
              {/* Logo */}
              <Link href="/">
                <svg width="18" height="18" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M180 360C279.411 360 360 279.411 360 180C360 80.5887 279.411 0 180 0C80.5887 0 0 80.5887 0 180C0 279.411 80.5887 360 180 360ZM104.388 77.6173C85.7494 75.5013 69.5918 79.8307 62.1697 88.9295L15.7118 145.884C8.46244 154.771 10.6479 166.864 21.4562 177.671L92.6271 248.833C103.435 259.64 121.251 267.545 139.456 269.612L256.122 282.857C274.761 284.973 290.918 280.644 298.34 271.545L344.798 214.591C352.048 205.704 349.862 193.61 339.054 182.803L267.883 111.641C257.075 100.835 239.259 92.9293 221.054 90.8625L104.388 77.6173Z"
                        fill="black"/>
                </svg>
              </Link>
            </div>
            {/* Navigation links */}
            <nav className="flex justify-center">
              <ul className="flex items-center sm:gap-x-3 text-sm font-medium">
                <li>
                  {/*<Link*/}
                  {/*  className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800/30 py-1.5 px-3"*/}
                  {/*  href="/updates"*/}
                  {/*>*/}
                  {/*  Updates*/}
                  {/*</Link>*/}
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3"
                    href="/contact"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Light switch */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
