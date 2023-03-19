import React, { useState } from "react";

import NAMES from "../../../../../assets/helpers/names_cats.json";

import { getRandomElement } from "../../../../../utils/arrays";
import { isMobile } from "../../../../../utils/device";
import { PLAYER_EVENTS } from "../../../../../utils/lottie";

const useVisorRate = () => {
  const [isPlayAnimation, setIsPlayAnimation] = useState(false);
  const [visibleVotation, setVisibleVotation] = useState(false);
  const [name, setName] = useState(getRandomElement(NAMES.all));

  const toggleVisibleVotation = () => {
    setVisibleVotation(!visibleVotation);
  };

  const handleNext = (cb = () => {}) => {
    setName(getRandomElement(NAMES.all));
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
    name,
    isPlayAnimation,
    toggleVisibleVotation,
    handleNext,
    startAnimation,
    handleCompleteAnimation,
    getVisibilityControl,
  };
};

export default useVisorRate;
