import Image from "next/image";
import OpsonLogo from "@/public/opson.png";

export const metadata = {
  title: "Opson Labs",
  description: "An AI product studio",
};

export default function Home() {
  return (
    <div className={"flex items-center justify-center h-full"}>
      <div className="px-4 sm:px-6 flex flex-row items-center justify-center w-full">
        <div className={"flex flex-row items-center gap-4"}>
          <Image src={OpsonLogo} alt={"opson-logo"} width={16} height={16} />
          <p>opson labs</p>
        </div>
      </div>
    </div>
  );
}
