import React, { useEffect, useState } from "react";

const useCardHover = (visibilityControl) => {
  const [isHover, setIsHover] = useState(visibilityControl || false);

  const existVisibilityControl = visibilityControl !== null;

  const handleMouseEnter = () => {
    if (existVisibilityControl) return;
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    if (existVisibilityControl) return;
    setIsHover(false);
  };

  useEffect(() => {
    if (existVisibilityControl) {
      setIsHover(visibilityControl);
    }
  }, [visibilityControl]);

  return {
    isHover,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useCardHover;
