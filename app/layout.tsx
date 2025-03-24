import "./global.css";
import { Inter, Inter_Tight } from "next/font/google";
import Theme from "./theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "opson labs - an AI studio",
  description: "opson labs is an AI studio that builds AI products and tools for the future of enterprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter antialiased text-gray-800 tracking-tight`}
      >
        <Theme>
          <div className="relative flex flex-col min-h-screen">
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
