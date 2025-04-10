import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logos/opson.png";

export default function Footer() {
  return (
    <footer className="border-t [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center py-8">
            <p className="text-sm">
              <Link href="/"><span className="font-normal">© 2024 Opson Labs</span></Link>
              <a
                className="font-medium text-indigo-500 hover:underline"
                href="https://twitter.com/pacovitiello"
                target="_blank"
              >
              </a>{" "}
              <a
                className="font-medium text-indigo-500 hover:underline"
                href="https://twitter.com/DavidePacilio"
                target="_blank"
              >
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
