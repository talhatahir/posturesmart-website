import Link from "next/link";
import Image from "next/image";
import { FaChrome } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <div className="flex items-center justify-center mb-6">
        <img src="/icons/icon-512.png" alt="PostureSmart logo" className="w-24 h-24 mr-1 block dark:hidden" />
        <img src="/icons/icon-512-dark.png" alt="PostureSmart logo" className="w-24 h-24 mr-1 hidden dark:block" />
        <h1 className="font-sans font-[500] text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
          PostureSmart
        </h1>
      </div>
      <p className="font-[500] text-xl text-gray-600 dark:text-gray-300 mb-12">Correct your posture with Ai</p>
      <p className="font-[500] text-xl text-gray-600 dark:text-gray-300 mb-12">
        Quick Posture Check, Gentle Reminders, to keep your spine aligned using Ai
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="https://chromewebstore.google.com/detail/posturesmart-correct-your/jjdbjpcdikaljelndnmnbacecmipbono"
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 flex items-center"
        >
          <FaChrome className="mr-2" />
          Add to Chrome
        </Link>
        <a href="https://www.buymeacoffee.com/talhatahir" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png"
            alt="Buy Me A Coffee"
            width={145}
            height={40}
          />
        </a>
      </div>
    </section>
  );
}
