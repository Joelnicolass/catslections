import React from "react";

import styles from "./Header.module.css";
import { useCardContext } from "../../context/CardContext";

const Header = ({ children, ...props }) => {
  const { title, isHover } = useCardContext();

  return (
    <div
      className={
        !isHover
          ? styles.card__header_container
          : styles.card__header_container__hover
      }
      {...props}
    >
      {title && <h2 className={styles.card__header_title}>{title}</h2>}
      {children}
    </div>
  );
};

export default Header;
