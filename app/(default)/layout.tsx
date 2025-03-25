"use client";

import BgShapes from "@/components/bg-shapes";
import VerticalLines from "@/components/vertical-lines";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import "@/app/global.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"flex flex-col h-screen overflow-y-auto"}>
      {/*<VerticalLines />*/}
      {/*<BgShapes />*/}
      {/*<Header />*/}

      <main className="grow w-full flex">{children}</main>

      <Footer />
    </div>
  );
}
