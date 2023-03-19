import React from "react";

import styles from "./Body.module.css";

const Body = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.body__container}>
      <div className={styles.body__container__content}>{children}</div>
    </div>
  );
};

export default Body;
