import React from "react";
import styles from "./Card.module.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

const Card = ({
  background,
  showSkeleton,
  children,
  customSkeletonComponent,
  ...props
}) => {
  const styleBackgroundImg = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  if (showSkeleton) {
    return (
      <div className={styles.card__container}>
        <div className={styles.card__skeleton}>
          {customSkeletonComponent && customSkeletonComponent}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.card__container} ${styles.card__image}`}
      style={styleBackgroundImg}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
