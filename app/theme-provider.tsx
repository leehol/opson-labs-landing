"use client";

import { ThemeProvider } from "next-themes";

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
