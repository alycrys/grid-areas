import React from "react";
import cx from "classnames";
import Image from "../Image";
import Copy from "../Copy";
import styles from "./Item.module.css";

const Item = ({ item, className }) => {
  const { artwork, title, content } = item;
  return (
    <div className={cx(item.className, className, styles.item)}>
      <Image src={artwork} alt={title} />
      <Copy title={title} content={content} />
    </div>
  );
};

export default Item;
