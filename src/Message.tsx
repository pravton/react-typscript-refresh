import React from "react";
import messageHoc from "./HOC";

const func = (props: any): any => {
  return (
    <p>
      {props.name}, {props.message}
    </p>
  )
}

const Message = messageHoc(func);

export default Message;