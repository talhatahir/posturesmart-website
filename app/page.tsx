import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <section className="container mx-auto py-12 px-4 md:px-6">
          <div className="flex flex-col items-center gap-8">
            <div className="order-2 md:order-1 p-4 justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 text-center">
                Get instant feedback about your posture using Ai
              </h2>
              <p className="text-xl font-light text-center">
                PostureSmart makes it easy to check your posture using Ai.
              </p>
            </div>
            <div className="order-1 md:order-2 justify-center">
              <video autoPlay muted loop playsInline className="w-full h-auto rounded-lg">
                <source src="/products/finalVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
        <Customers />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                The best Chrome extension!
              </h2>
              <p className="text-xl font-light">
                PostureSmart is the best free Chrome extension for correcting your posture.
              </p>
              <p className="text-xl font-light">It is fast, easy to use, requires no subscription or credit card.</p>
            </div>
          }
        />
        <Reviews />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
