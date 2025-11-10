import Image from "next/image";

import LogoVscode from "@/public/images/logo-vscode.svg";
import LogoIntellij from "@/public/images/logo-intellij.svg";
import LogoZed from "@/public/images/logo-zed.png";
import LogoHelix from "@/public/images/logo-helix.svg";

export default function SupportedEditors() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="text-3xl font-bold">
              Works With Your Favorite Editors
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Your muscle memory, uninterrupted.
            </p>
          </div>

          {/* Items */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* VS Code */}
            <div className="flex items-center justify-center rounded-xl bg-gray-100 p-4">
              <Image src={LogoVscode} alt="VS Code logo" width={150} />
            </div>

            {/* IntelliJ */}
            <div className="flex items-center justify-center rounded-xl bg-gray-100 p-4">
              <Image src={LogoIntellij} alt="IntelliJ IDEA logo" width={150} />
            </div>

            {/* Zed */}
            <div className="flex items-center justify-center rounded-xl bg-gray-100 p-4">
              <Image src={LogoZed} alt="Zed logo" width={150} />
            </div>

            {/* Helix */}
            <div className="flex items-center justify-center rounded-xl bg-gray-100 p-4">
              <Image src={LogoHelix} alt="Helix logo" width={150} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
