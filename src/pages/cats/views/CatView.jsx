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

  const [rated, setRated] = useState(false);
  const [name, setName] = useState(getRandomElement(NAMES.all));

  const handleNext = () => {
    setName(getRandomElement(NAMES.all));
    refresh();
  };

  return (
    <div className={styles.view__container}>
      <Card
        background={cat}
        showSkeleton={loading}
        customSkeletonComponent={
          <Player src={LOADING_ANIMATION} autoplay loop />
        }
      >
        <Card.Header>
          <h2>{name}</h2>
        </Card.Header>
        <Card.Body>
          {rated && (
            <Player
              style={{ width: "60%", height: "60%" }}
              src={RATED_ANIMATION}
              autoplay
              onEvent={(e) => {
                if (e === PLAYER_EVENTS.COMPLETE) {
                  setRated(false);
                }
              }}
            />
          )}
        </Card.Body>
        <Card.Footer large>
          <Rate
            resetCondition={loading}
            onClick={(rate) => {
              setRated(true);
            }}
          />
          <button onClick={handleNext}>NEXT</button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CatView;
