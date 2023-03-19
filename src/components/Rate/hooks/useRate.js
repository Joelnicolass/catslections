import React, { useEffect, useId, useState } from "react";

const createMapFromLength = (length, defaultValue) => {
  return new Map(
    Array.from({ length }).map((_, index) => [index, defaultValue])
  );
};

const useRate = ({ maxRate, onClick, resetCondition = false }) => {
  const id = useId();
  const [rate, setRate] = useState(0);
  const [starsHover, setStarsHover] = useState(
    createMapFromLength(maxRate, false)
  );

  const handleMouseEnter = (index) => {
    const draft = createMapFromLength(maxRate, false);

    draft.forEach((_, i) => {
      draft.set(i, i <= index ? true : false);
    });

    setStarsHover(draft);
  };

  const handleMouseLeave = (index) => {
    const draft = createMapFromLength(maxRate, false);
    setStarsHover(draft);
  };

  const handleRate = (index) => {
    setRate(index + 1);
    if (onClick) onClick(index + 1);
  };

  const resetRated = () => {
    setRate(0);
    setStarsHover(createMapFromLength(maxRate, false));
  };

  useEffect(() => {
    if (!resetCondition) return;
    resetRated();
  }, [resetCondition]);

  return {
    id,
    rate,
    starsHover,
    handleMouseEnter,
    handleMouseLeave,
    handleRate,
  };
};

export default useRate;
