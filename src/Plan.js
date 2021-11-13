import React from "react";

function Plan(props) {
  return (
    <>
      <li>{props.value}</li>
      <button onClick={()=>{
        props.sendData(props.id)
      }}>X</button>
    </>
  );
}

export default Plan;
