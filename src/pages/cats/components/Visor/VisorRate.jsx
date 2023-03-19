import React, { useState } from "react";

import Card from "../../../../components/Card/Card";
import Rate from "../../../../components/Rate/Rate";

import LOADING_ANIMATION from "../../../../assets/lottie/loading-cat.json";
import RATED_ANIMATION from "../../../../assets/lottie/star.json";
import styles from "./VisorRate.module.css";

import { Player } from "@lottiefiles/react-lottie-player";
import useVisorRate from "./hooks/useVisorRate";

const VisorRate = ({
  card: { id = "", title = "", backgroundImage = "", loading = false },
  button: { onClick = () => {}, text = "NEXT", disabled = false },
  rate: { onClickRate = (id, rate) => {} } = {},
}) => {
  const {
    isPlayAnimation,
    getVisibilityControl,
    handleCompleteAnimation,
    handleNext,
    startAnimation,
    toggleVisibleVotation,
  } = useVisorRate();

  return (
    <>
      <div className={styles.visor__animation_container}>
        {isPlayAnimation && (
          <Player
            src={RATED_ANIMATION}
            autoplay
            onEvent={handleCompleteAnimation}
          />
        )}
      </div>
      <div className={styles.visor__container}>
        <Card
          data={{
            title,
            backgroundImage,
          }}
          showSkeleton={loading}
          customSkeletonComponent={
            <Player src={LOADING_ANIMATION} autoplay loop />
          }
          visibilityControl={getVisibilityControl()}
          onClick={toggleVisibleVotation}
        >
          <Card.Header />
          <Card.Body></Card.Body>
          <Card.Footer>
            <Rate
              resetCondition={loading}
              onClick={(rate) => {
                startAnimation();
                onClickRate(id, rate);
              }}
            />
            <button
              onClick={() => {
                handleNext(onClick);
              }}
              disabled={disabled}
            >
              {text}
            </button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default VisorRate;
