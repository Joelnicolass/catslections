import React from "react";
import Star from "./Star";
import useRate from "./hooks/useRate";

import styles from "./Rate.module.css";

const Rate = ({
  maxRate = 5,
  onClick = (rate) => {},
  resetCondition = false,
}) => {
  const {
    id,
    starsHover,
    rate,
    handleMouseEnter,
    handleMouseLeave,
    handleRate,
  } = useRate({ maxRate, onClick, resetCondition });

  return (
    <div className={styles.rate__container}>
      {Array.from({ length: maxRate }).map((_, index) => {
        return (
          <Star
            key={`${id}-${index}`}
            filled={starsHover.get(index) || index < rate ? true : false}
            index={index}
            onClick={(e) => handleRate(e, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
};

export default Rate;
