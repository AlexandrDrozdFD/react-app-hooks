import React, {useEffect, useState} from 'react';

const ItemsList = ({ getItems }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems(42);
    setItems(newItems)
  }, [getItems]);

  return (
    <ul>
      {items.map((item, i) => {
        return (
          <li key={i}>{item}</li>
        );
      })}
    </ul>
  );
};

export default ItemsList;