import React from "react";
import Item from "../Item";

const List = ({ className, items }) => {
  return (
    <div className={className}>
      {items.map(item => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default List;
