import React from "react";
import { IEducation } from "@/data/about";

interface Props {
  content: IEducation;
}

const Education = ({ content }: Props) => {
  return (
    <ul style={{ flexWrap: "wrap", display: "flex" }}>
      {content?.data?.length > 0 &&
        content.data.map((val, i) => (
          <li key={i} className="col-lg-6">
            <div className="icon">
              <i className="fa fa-book"></i>
            </div>
            <span className="time open-sans-font text-uppercase">
              {val.year}
            </span>
            <h5 className="poppins-font text-uppercase">
              {val.degree}
              <span className="place open-sans-font">{val.institute}</span>
            </h5>
            <p className="open-sans-font">{val.details}</p>
          </li>
        ))}
    </ul>
  );
};

export default Education;
