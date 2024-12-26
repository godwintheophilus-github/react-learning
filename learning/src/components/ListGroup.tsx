import React from "react";
import { Fragment, useState } from "react";

interface ListGroupProps {
  labels: string[];
  heading: string;
  active: any;
  callBackFunction: (set: any) => void;
}

const ListGroup = (props: ListGroupProps) => {
  return (
    <>
      <ul className="list-group">
        {props.labels.length == 0 && <p>No Items</p>}
        {props.labels.map((value, index) => {
          return (
            <li
              className={
                props.active === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={value}
              onClick={() => props.callBackFunction(index)}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;
