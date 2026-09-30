import React from "react";

function HeroSection() {
  return (
    <section className="flex flex-col gap-2 bg-[#A6E8CA] px-6 py-8 md:px-10 md:py-10  ">
      <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
        Let's make today productive! ✨
      </h1>
      <p className="text-sm text-gray-700 md:text-base">
        Stay organized and keep your tasks moving forward.
      </p>
    </section>
  );
}

export default HeroSection;
