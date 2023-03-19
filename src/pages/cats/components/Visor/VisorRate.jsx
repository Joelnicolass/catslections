import React, { useState } from "react";

import Card from "../../../../components/Card/Card";
import Rate from "../../../../components/Rate/Rate";

import LOADING_ANIMATION from "../../../../assets/lottie/loading-cat.json";
import RATED_ANIMATION from "../../../../assets/lottie/star.json";
import styles from "./VisorRate.module.css";

import { useFetch } from "../../../../hooks/useFetch";
import { getRandomCat } from "../../services/cat.service";
import { Player } from "@lottiefiles/react-lottie-player";
import useVisorRate from "./hooks/useVisorRate";

const VisorRate = () => {
  const {
    data: cat,
    error,
    loading,
    refresh,
  } = useFetch({
    service: getRandomCat,
  });

  const {
    name,
    isPlayAnimation,
    getVisibilityControl,
    handleCompleteAnimation,
    handleNext,
    startAnimation,
    toggleVisibleVotation,
  } = useVisorRate();

  return (
    <div className={styles.view__container}>
      <Card
        data={{
          title: name,
          backgroundImage: cat,
        }}
        showSkeleton={loading}
        customSkeletonComponent={
          <Player src={LOADING_ANIMATION} autoplay loop />
        }
        visibilityControl={getVisibilityControl()}
        onClick={toggleVisibleVotation}
      >
        <Card.Header />
        <Card.Body>
          {isPlayAnimation && (
            <Player
              src={RATED_ANIMATION}
              autoplay
              onEvent={handleCompleteAnimation}
            />
          )}
        </Card.Body>
        <Card.Footer>
          <Rate
            resetCondition={loading}
            onClick={(rate) => {
              startAnimation();
            }}
          />
          <button
            onClick={() => {
              handleNext(refresh);
            }}
          >
            NEXT
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default VisorRate;
