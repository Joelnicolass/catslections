import React, { useState } from "react";

import { isMobile } from "../../../../../utils/device";
import { PLAYER_EVENTS } from "../../../../../utils/lottie";

const useVisorRate = () => {
  const [isPlayAnimation, setIsPlayAnimation] = useState(false);
  const [visibleVotation, setVisibleVotation] = useState(false);

  const toggleVisibleVotation = () => {
    setVisibleVotation(!visibleVotation);
  };

  const handleNext = (cb = () => {}) => {
    stopAnimation();
    cb();
  };

  const stopAnimation = () => {
    setIsPlayAnimation(false);
  };

  const startAnimation = () => {
    setIsPlayAnimation(true);
  };

  const getVisibilityControl = () => {
    return isMobile() ? visibleVotation : null;
  };

  const handleCompleteAnimation = (e) => {
    if (e === PLAYER_EVENTS.COMPLETE) stopAnimation();
  };

  return {
    isPlayAnimation,
    toggleVisibleVotation,
    handleNext,
    startAnimation,
    handleCompleteAnimation,
    getVisibilityControl,
  };
};

export default useVisorRate;
