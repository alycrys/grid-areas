import React from "react";
import PropTypes from "prop-types";
import styles from "./Copy.module.css";

const Copy = ({ title, content }) => {
  return (
    <div className={styles.copy}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

Copy.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Copy;
