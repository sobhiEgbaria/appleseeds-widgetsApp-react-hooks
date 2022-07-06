import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [itemIndex, setItemIndex] = useState(null);

  const onTitleClick = (index) => {
    setItemIndex(index);
  };

  const itemsRender = items.map((item, index) => {
    const active = index === itemIndex ? "active" : "";

    return (
      <React.Fragment key={index}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${active}`}>
          <p>{item.content}</p>
          <p>{item.content}</p>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="ui styled accordion">{itemsRender}</div>
    </>
  );
};

export default Accordion;
