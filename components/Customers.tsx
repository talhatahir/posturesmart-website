import React from "react";
import {
  AiOutlineDiscord,
  AiTwotoneBug,
  AiTwotoneExperiment,
  AiOutlineTaobao,
  AiOutlineSpotify,
  AiOutlineCode,
  AiOutlineCiCircle,
} from "react-icons/ai";

const icons = [
  { Icon: AiTwotoneBug },
  { Icon: AiOutlineDiscord },
  { Icon: AiTwotoneExperiment },
  { Icon: AiOutlineTaobao },
  { Icon: AiOutlineSpotify },
  { Icon: AiOutlineCode },
  { Icon: AiOutlineCiCircle },
];

const Customers: React.FC = () => {
  return (
    <div className="w-full py-12 bg-black dark:bg-white">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white dark:text-black text-center max-w-7xl mx-auto">
          Over 650 million people experience neck and back pain every year*
        </h2>
        <p className="mt-8 font-[400] text-xl text-gray-600 text-center dark:text-gray-400 font-light">
          *According to the World Health Organization
        </p>
        <p className="w-[70%] mx-auto mt-8 font-[400] text-xl text-gray-200 text-center dark:text-black font-light">
          Studies show that 75% of office workers experience neck or back pain, with the average person spending over 7
          hours sitting daily. Poor posture during computer use is a leading cause, affecting millions of remote
          workers, students, and professionals worldwide.
        </p>
      </div>
    </div>
  );
};

export default Customers;
