import React from "react";
import { useState } from "react";
import ListGroup from "./components/ListGroup";

const Message = () => {
  const message = "Hello World";
  const [active, setactive] = useState(0);

  const handleClick = (index) => {
    setactive(index);
  };

  const label = ["Chennai", "Hyderabad", "Mumbai", "Pune", "Delhi"];

  return (
    <div>
      {message}
      <ListGroup
        labels={label}
        heading={"heading"}
        active={active}
        callBackFunction={handleClick}
      />
    </div>
  );
};

export default Message;
