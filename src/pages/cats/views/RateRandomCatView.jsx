import React, { useState } from "react";

import VisorRate from "../components/Visor/VisorRate";

import { useFetch } from "../../../hooks/useFetch";
import { getRandomCat } from "../services/cat.service";
import { getRandomElement } from "../../../utils/arrays";

import NAMES from "../../../assets/helpers/names_cats.json";

const RateRandomCatView = () => {
  const {
    data: urlImageCat,
    error,
    loading,
    refresh,
  } = useFetch({
    service: getRandomCat,
  });

  const [name, setName] = useState(getRandomElement(NAMES.all));

  const sendToServer = (id, rate) => {};

  return (
    <div>
      <VisorRate
        card={{
          id: urlImageCat,
          title: name,
          backgroundImage: urlImageCat,
          loading,
        }}
        button={{
          onClick: () => {
            setName(getRandomElement(NAMES.all));
            refresh();
          },
          text: "NEXT",
        }}
        rate={{
          onClickRate: sendToServer,
        }}
      />
    </div>
  );
};

export default RateRandomCatView;
