import React from "react";
import ListGroup from "./components/ListGroup";

const Message = () => {
  const message = "Hello World";
  return (
    <div>
      {message}
      <ListGroup />
    </div>
  );
};

export default Message;
