import React from "react";

import styles from "./Footer.module.css";

const Footer = ({ children, large = false, ...props }) => {
  return (
    <div
      className={
        large
          ? styles.card__footer_container_large
          : styles.card__footer_container
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default Footer;
