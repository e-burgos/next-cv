import React from "react";
import { IExperience } from "@/data/about/experience";
import ExperienceItem from "./experience-item";

interface Props {
  content: IExperience;
}

const Experience = ({ content }: Props) => {
  return (
    <ul style={{ flexWrap: "wrap", display: "flex" }}>
      {content?.data?.length > 0 &&
        content.data.map((val, i) => <ExperienceItem item={val} key={i} />)}
    </ul>
  );
};

export default Experience;
