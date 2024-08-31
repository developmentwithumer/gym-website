import React from "react";
import Button from "./Button";
import ProgramCard from "./ProgramCard";

const Programs = () => {
  return (
    <section
      id="program"
      className="paddingContainer flexContainer flex-col gap-24 my-4"
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="text-4xl font-urbanist">Explore Our Programs</h2>
        <div className="flex items-center gap-4">
          <Button
            icon="/left.svg"
            className="rounded-full border border-white"
          />
          <Button
            icon="/right.svg"
            className="bg-primary hover:bg-primary-hover rounded-full border border-primary hover:border-primary-hover"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <ProgramCard
          icon="/cardio.svg"
          title="Cardio Strength"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
          className="bg-primary"
        />
        <ProgramCard
          icon="/yoga.svg"
          title="Yoga Sessions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
          className="bg-secondaryBG"
          opacity="opacity-50"
        />
        <ProgramCard
          icon="/fat.svg"
          title="Fat Loose"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
          className="bg-secondaryBG"
          opacity="opacity-50"
        />
        <ProgramCard
          icon="/muscle.svg"
          title="Muscle Gain"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
          className="bg-secondaryBG"
          opacity="opacity-50"
        />
        <ProgramCard
          icon="/nutritions.svg"
          title="Nutritions "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
          className="bg-secondaryBG"
          opacity="opacity-50"
        />
      </div>
    </section>
  );
};

export default Programs;
