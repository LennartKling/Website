import React from "react";

const Image = (props: any) => {
  return (
    <img
      src={"/images/work/" + props.img}
      alt="Portfolio"
      width="100%"
      height="943"
      style={{ objectFit: "cover" }}
    />
  );
};

export default Image;
