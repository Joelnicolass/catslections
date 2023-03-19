import React from "react";
import styles from "./Card.module.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import useCardHover from "./hooks/useCardHover";
import { ProviderCard } from "./context/CardContext";

const Card = ({
  data: { title, backgroundImage },
  showSkeleton,
  children,
  customSkeletonComponent,
  visibilityControl = null,
  onClick = () => {},
  ...props
}) => {
  const styleBackgroundImg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const { handleMouseEnter, handleMouseLeave, isHover } =
    useCardHover(visibilityControl);

  return (
    <ProviderCard
      value={{
        title,
        isHover,
      }}
    >
      {showSkeleton ? (
        <div className={styles.card__container}>
          <div className={styles.card__skeleton}>
            {customSkeletonComponent && customSkeletonComponent}
          </div>
        </div>
      ) : (
        <div
          className={`${styles.card__container} ${styles.card__image}`}
          style={styleBackgroundImg}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
          {...props}
        >
          {children}
        </div>
      )}
    </ProviderCard>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
