import React from "react";
import styles from "./Star.module.css";

import STAR_EMPTY from "../../../assets/images/star-empty.png";
import STAR_FILL from "../../../assets/images/star-fill.png";

const Star = ({ filled = false, ...props }) => {
  return (
    <img
      className={styles.star__image}
      {...props}
      style={{
        width: "20%",
        cursor: "pointer",
      }}
      src={filled ? STAR_FILL : STAR_EMPTY}
      alt="star-empty"
    />
  );
};

export default Star;
