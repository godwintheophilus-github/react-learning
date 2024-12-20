import React from "react";
import { Fragment } from "react";
const ListGroup = () => {
  const labels = ["Chennai", "Hyderabad", "Mumbai", "Pune", "Delhi"];

  if (labels.length == 0) {
    return (
      <>
        <ul className="list-group">
          <li className="list-group-item">No items</li>
        </ul>
      </>
    );
  }

  return (
    <>
      <ul className="list-group">
        {labels.map((value) => {
          return (
            <li className="list-group-item" key={value}>
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;
