import React from "react";
import FeatureCard from "./FeatureCard";
import {
  FaNewspaper,
  FaDatabase,
  FaShieldAlt,
  FaMousePointer,
  FaFreeCodeCamp,
  FaGift,
  FaBell,
  FaBrain,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";
import { RiAiGenerate } from "react-icons/ri";
const Features = () => {
  const features = [
    {
      icon: FaBell,
      title: "Gentle Reminders",
      description: "PostureSmart will gently remind you to keep your posture in check using notifications.",
    },
    {
      icon: FaBrain,
      title: "Ai Powered",
      description:
        "PostureSmart uses Ai to analyzer your posture and give instant feedback using tensorflow at the backend.",
    },
    {
      icon: FaBell,
      title: "Ai Reminders",
      description: "PostureSmart will use Ai to remind you to correct your posture using notifications.",
    },
    {
      icon: FaShieldAlt,
      title: "Privacy first",
      description: "No video or image data is store or sent to third party servers. built with privacy in mind.",
    },
    {
      icon: FaGift,
      title: "Its Free",
      description: "PostureSmart is free to use, its designed by a developer for developers.",
    },
    {
      icon: FaNewspaper,
      title: "Access to new features",
      description: "PostureSmart gets regularly updated with newer features being added",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Keeping Your Spine Aligned
          </h2>
          <p className="mt-8 font-[400] text-xl text-gray-600 dark:text-gray-300 font-light">
            PostureSmart comes packed with great features harnessing the power of Ai to keep your posture in check.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
