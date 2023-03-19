import React from "react";

const Body = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Body;
