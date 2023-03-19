import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { getRandomCat } from "../services/cat.service";

import styles from "./CatView.module.css";
import Rate from "../../../components/Rate/Rate";

import NAMES from "../../../assets/helpers/names_cats.json";
import LOADING_ANIMATION from "../../../assets/lottie/loading-cat.json";
import RATED_ANIMATION from "../../../assets/lottie/star.json";

import { Player } from "@lottiefiles/react-lottie-player";
import Card from "../../../components/Card/Card";
import { isMobile } from "../../../utils/device";

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const PLAYER_EVENTS = {
  COMPLETE: "complete",
};

const CatView = () => {
  const {
    data: cat,
    error,
    loading,
    refresh,
  } = useFetch({
    service: getRandomCat,
  });

  const [playAnimation, setPlayAnimation] = useState(false);
  const [name, setName] = useState(getRandomElement(NAMES.all));
  const [visibleVotation, setVisibleVotation] = useState(false);

  console.log(isMobile());

  const toggleVisibleVotation = () => {
    setVisibleVotation(!visibleVotation);
  };

  const handleNext = (e) => {
    setName(getRandomElement(NAMES.all));
    refresh();
  };

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
        visibilityControl={isMobile() ? visibleVotation : null}
        onClick={toggleVisibleVotation}
      >
        <Card.Header />
        <Card.Body>
          {playAnimation && (
            <Player
              src={RATED_ANIMATION}
              autoplay
              onEvent={(e) => {
                if (e === PLAYER_EVENTS.COMPLETE) {
                  setPlayAnimation(false);
                }
              }}
            />
          )}
        </Card.Body>
        <Card.Footer>
          <Rate
            resetCondition={loading}
            onClick={(rate) => {
              setPlayAnimation(true);
            }}
          />
          <button onClick={handleNext}>NEXT</button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CatView;
