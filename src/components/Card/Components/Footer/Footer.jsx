import React from "react";

import styles from "./Footer.module.css";
import { useCardContext } from "../../Card";

const Footer = ({ children, ...props }) => {
  const { isHover } = useCardContext();

  return (
    <div
      className={
        !isHover
          ? styles.card__footer_container
          : styles.card__footer_container__hover
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default Footer;
