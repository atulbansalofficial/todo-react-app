import React from "react";

function Plan(props) {
  const arr = props.p;
  return (
    <>
      {/* <li>{props.value}</li>
      <button
        onClick={() => {
          props.sendData(props.id);
        }}
      >
        X
      </button> */}
      {arr.map((value, i) => {
        return (
          <React.Fragment key={i}>
            <li>{value}</li>
            <button
              onClick={() => {
                props.sendDelete(i);
              }}
            >
              X
            </button>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Plan;
