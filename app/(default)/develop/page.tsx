"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import OpsonLogo from "@/public/images/logos/opson.png";
import SequoiaLogo from "@/public/images/clients/sequoia.png";
import AndreessenLogo from "@/public/images/clients/andreessen.png";
import YCombinatorLogo from "@/public/images/clients/yc.png";
import OpenAILogo from "@/public/images/clients/openai.png";
import FernLogo from "@/public/images/clients/fern.png";
import ExtendLogo from "@/public/images/clients/extend.jpeg";
import BoxLogo from "@/public/images/clients/box.png";
import ShellLogo from "@/public/images/clients/shell.png";
import SusaLogo from "@/public/images/clients/susa.png";
import VectorLogo from "@/public/images/clients/vector.jpeg";
import SparkLogo from "@/public/images/clients/sparkcapital.png";
import SpiceLogo from "@/public/images/clients/spice.jpeg";
import GfcLogo from "@/public/images/clients/gfc.jpeg";
import BcgLogo from "@/public/images/clients/bcg.jpg";
import LabelboxLogo from "@/public/images/clients/labelbox.jpg";
import CruiseLogo from "@/public/images/clients/cruise.png";

import { useEffect, useState } from "react";

const partners = [
  {
    name: "Sequoia",
    image: SequoiaLogo,
    url: "https://www.sequoiacap.com/",
  },
  {
    name: "Andreessen",
    image: AndreessenLogo,
    url: "https://www.a16z.com/",
  },
  {
    name: "Y Combinator",
    image: YCombinatorLogo,
    url: "https://www.ycombinator.com/",
    width: 40,
    height: 40,
  },
  {
    name: "OpenAI",
    image: OpenAILogo,
    url: "https://www.openai.com/",
  },
  {
    name: "Fern",
    image: FernLogo,
    url: "https://www.buildwithfern.com/",
    width: 48,
    height: 48,
  },
  {
    name: "Extend",
    image: ExtendLogo,
    url: "https://www.extend.app/",
    width: 48,
    height: 48,
  },
  {
    name: "Box",
    image: BoxLogo,
    url: "https://www.boxgroup.com/",
    width: 40,
    height: 40,
  },
  {
    name: "Shell",
    image: ShellLogo,
    url: "https://www.shell.com/",
    width: 40,
    height: 40,
  },
  {
    name: "Susa",
    image: SusaLogo,
    url: "https://www.susaventures.com/",
  },
  {
    name: "Vector",
    image: VectorLogo,
    url: "https://www.vector.co/",
    width: 40,
    height: 40,
  },
  {
    name: "Spark",
    image: SparkLogo,
    url: "https://www.sparkcapital.com/",
  },
  {
    name: "Spice",
    image: SpiceLogo,
    url: "https://spice.ai",
    width: 40,
    height: 40,
  },
  {
    name: "GFC",
    image: GfcLogo,
    url: "https://www.globalfounderscapital.com/",
    width: 40,
    height: 40,
  },
  {
    name: "BCG X",
    image: BcgLogo,
    url: "https://www.bcg.com/x/",
  },
  {
    name: "Labelbox",
    image: LabelboxLogo,  
    url: "https://www.labelbox.com/",
  },
  {
    name: "Cruise",
    image: CruiseLogo,
    url: "https://www.getcruise.com/",
  },
]

export default function DevelopPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, 1500); // Rotate every 1.5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Helper function to get visible partners
  const getVisiblePartners = () => {
    const visiblePartners = [];
    for (let i = 0; i < 4; i++) {
      const index = (activeIndex + i) % partners.length;
      visiblePartners.push(partners[index]);
    }
    return visiblePartners;
  };
  
  return (
    <div className="container mx-auto py-8 px-4 flex flex-col items-center gap-16">
      <div className="text-center flex flex-col gap-2">
        <div className="w-full flex flex-row items-center justify-center gap-2">
            <Image src={OpsonLogo} alt="Opson Logo" width={14} height={14} />
            <p>develop</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
        <Card className="w-full lg:max-w-md border border-muted-foreground/40 shadow-xs">
            <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-xl font-bold">"Around the clock" plan</CardTitle>
            <div className="mt-4 flex flex-col lg:flex-row items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">$10,500</span>
                <span className="ml-1 text-xl text-muted-foreground">/ engineer / month</span>
            </div>
            <CardDescription className="mt-4 text-base">Full-service software development at your disposal</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
            <ul className="space-y-4 text-sm">
                {[
                "Around the clock software development",
                "Dedicated AI-powered development pipeline",
                "Unlimited revisions and iterations",
                "US eastern time zone core development hours",
                "Custom feature development",
                ].map((feature) => (
                <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span>{feature}</span>
                </li>
                ))}
            </ul>
            </CardContent>
            <CardFooter className="flex justify-center pb-2">
            <Button size="lg" className="w-full" onClick={() => window.open("https://cal.com/opson-ai/15min", "_blank")}>
                Get Started
            </Button>
            </CardFooter>
        </Card>

        <div className="max-w-2xl pt-8">
            <h2 className="text-2xl font-semibold mb-4">Why choose opson.ai develop?</h2>
            <p className="text-muted-foreground mb-6">
            We combine the efficiency of AI with the creativity and professionalism of human developers to deliver exceptional software
            solutions around the clock.
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="w-full flex justify-between items-center relative h-24 overflow-hidden">
                {partners.map((partner, index) => {
                  // Calculate position relative to activeIndex
                  const position = (index - activeIndex + partners.length) % partners.length;
                  
                  // Only render if it's one of the 4 visible positions (0-3)
                  if (position > 3) return null;
                  
                  return (
                    <div 
                      key={`${partner.name}`}
                      className="absolute transition-all duration-800 ease-in-out"
                      style={{
                        left: `${25 * position}%`,
                        transform: 'translateX(-0%)',
                        opacity: position === 0 || position === 4 ? 0.5 : 0.8
                      }}
                    >
                      <a href={partner.url} target="_blank" rel="noopener noreferrer">
                        <Image 
                          src={partner.image} 
                          alt={partner.name} 
                          width={partner.width ?? 80} 
                          height={partner.height ?? 80} 
                          className="rounded-sm" 
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-1 mt-2">
                {Array.from({ length: partners.length }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeIndex === index ? "bg-primary" : "bg-gray-300"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="mt-8">
                <p className="text-muted-foreground">
                  We&apos;ve worked with some of the best venture-backed businesses in the world. Here are some of our previous clients and their venture capital backers.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
