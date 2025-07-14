import React from "react";
import { data } from "../../utils/data";
import Feature from "./feature";

const Features = ({col , st , end}) => {
  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-${col} gap-6 mb-8`}>
        {data.slice(st, end).map((feature) => (
          <Feature key={feature.id} title={feature.title} description={feature.description} />
        ))}
      </div>
    </>
  );
};

export default Features;
