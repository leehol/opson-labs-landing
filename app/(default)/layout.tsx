"use client";

import BgShapes from "@/components/bg-shapes";
import VerticalLines from "@/components/vertical-lines";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"flex flex-col justify-center items-center h-screen"}>
      {/*<VerticalLines />*/}
      {/*<BgShapes />*/}
      {/*<Header />*/}

      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
}
