"use client";

import Link from "next/link";
import Image from "next/image";
import VofoLogo from "@/public/images/logos/vofo.png";
import OpsonLogo from "@/public/images/logos/opson.png";
import EngagedLogo from "@/public/images/logos/engaged.png";

const apps = [
  {
    name: "Vofo",
    logo: <Image src={VofoLogo} alt="Vofo Logo" width={80} height={80} />,
    url: "https://vofo.dev",
  },
  {
    name: "Engaged",
    logo: <Image src={EngagedLogo} alt="Engaged Logo" width={120} height={120} />,
    url: "https://engaged.dev",
  },
  {
    name: "Opson",
    logo: <Image src={OpsonLogo} alt="Opson Logo" width={24} height={24} />,
    url: "https://opson.ai",
    extra: "coming soon"
  },
  {
    name: "Opson",
    logo: <Image src={OpsonLogo} alt="Opson Logo" width={24} height={24} />,
    url: "https://opson.ai",
    extra: "coming soon"
  },
];

export default function StudioPage() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full gap-4 lg:gap-8 p-8 h-full">
        <div className="w-full flex flex-row items-center justify-center gap-2">
            <Image src={OpsonLogo} alt="Opson Logo" width={14} height={14} />
            <p>studio</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-0 grow">
            <div className="flex flex-col items-end justify-center max-w-xl">
                <p>
                    We are a team of experienced software engineers and designers who are passionate about building AI products for the future of enterprise solutions.
                </p>
                
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4 py-2 overflow-y-auto">
                {
                    apps.map((app) => (
                        <div 
                        className="lg:py-0 py-8 cursor-pointer flex flex-row items-center justify-center gap-3 rounded-lg bg-slate-50 hover:bg-slate-200 transition-all duration-300"
                        onClick={() => window.open(app.url, "_blank")}
                        >
                            {app.logo}
                            <h5 className="text-xl font-bold">{app.extra}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}
