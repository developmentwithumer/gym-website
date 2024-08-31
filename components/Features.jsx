import Image from "next/image";
import React from "react";
import Button from "./Button";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-lightBG paddingContainer flexContainer flex-col md:flex-row gap-12 my-4 w-full"
    >
      <div className="flex pr-4 w-auto md:w-1/2 mt-4">
        <Image src="/features.png" alt="Image" width={470.88} height={450} />
      </div>
      <div className="flex flex-col gap-5 w-auto md:w-1/2 mb-4">
        <h1 className="text-center md:text-start text-4xl font-bold text-balance font-urbanist">
        Transform your physique with our  fitness plan.
        </h1>
        <div className="flex items-center gap-3">
          <Image src="/tick.svg" alt="done" width={20} height={20} />
          <span>Increase Muscle and Strength</span>
        </div>
        <div className="flex items-center gap-3">
          <Image src="/tick.svg" alt="done" width={20} height={20} />
          <span>Be Healthier than before</span>
        </div>
        <div className="flex items-center gap-3">
          <Image src="/tick.svg" alt="done" width={20} height={20} />
          <span>Increase Stamina</span>
        </div>
        <div className="flex gap-6 justify-center md:justify-normal py-2 items-center">
          <Button
            title="Join now"
            className="bg-primary hover:bg-primary-hover border border-primary hover:border-primary-hover"
          />
          <Button title="Contact Us" className="border border-white hover:border-primary hover:bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Features;
