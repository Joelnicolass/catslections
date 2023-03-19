import React from "react";

import styles from "./Header.module.css";

const Header = ({ children, ...props }) => {
  return (
    <div className={styles.card__header_container} {...props}>
      {children}
    </div>
  );
};

export default Header;
