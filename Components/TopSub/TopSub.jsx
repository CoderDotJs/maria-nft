import React from "react";
import styles from "../../styles/About.module.css";

const TopSub = ({ left, right, both, text, align }) => {
  const dtStyle = (align) => {
    switch (align) {
      case "left":
        return "start";
      case "right":
        return "end";
      case "center":
        return "center";
      default:
        return "center";
    }
  };
  return (
    <>
      {left && (
        <h6 className={styles.h6} style={{ textAlign: dtStyle(align) }}>
          <span></span>
          {text}
        </h6>
      )}
      {right && (
        <h6 className={styles.h6} style={{ justifyContent: dtStyle(align) }}>
          {text}
          <span></span>
        </h6>
      )}
      {both && (
        <h6 className={styles.h6} style={{ textAlign: dtStyle(align) }}>
          <span></span>
          {text}
          <span></span>
        </h6>
      )}
    </>
  );
};

export default TopSub;
