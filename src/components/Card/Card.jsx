import React, { createContext, useContext, useEffect, useState } from "react";
import styles from "./Card.module.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

export const CardContext = createContext({});
export const { Provider: ProviderCard } = CardContext;
export const useCardContext = () => useContext(CardContext);

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
