import Image from "next/image";
import OpsonLogo from "@/public/images/logos/opson.png";
import Link from "next/link";

export const metadata = {
  title: "Opson Labs",
  description: "An AI product studio",
};

export default function Home() {
  return (
    <div className={"flex flex-col items-center justify-between grow py-8"}>
      <div />
      <div className="px-4 sm:px-6 flex flex-row items-center justify-center w-full">
        <div className={"flex flex-row items-center gap-3"}>
          <Image src={OpsonLogo} alt={"opson-logo"} width={15} height={15} />
          <p>Opson Labs</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-4">
        <div className="flex flex-row items-center justify-center gap-12">
          <Link href="/studio"><p className="font-normal">studio</p></Link>
          <Link href="/develop"><p className="font-normal">develop</p></Link>
        </div>
      </div>
    </div>
  );
}
