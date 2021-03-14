import React from "react";

function Celebrity(props) {
  const celebrityDetails = props.location.state;
  console.log(celebrityDetails);
  return (
    <div>
      <h1>{celebrityDetails.label}</h1>
      <img src={celebrityDetails.imageUrl} alt={celebrityDetails.label} />
    </div>
  );
}

export default Celebrity;
