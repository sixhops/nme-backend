import React from 'react';

const DroneDetail = props => {
  let details;
  if (Object.keys(props.drone).length) {
    details = (
      <>
        <h3>{props.drone.name}</h3>
        <h4>Job: {props.drone.job}</h4>
      </>
    )
  } else {
    details = (
      <>
        <p>Please select a queen and then a drone!</p>
      </>
    )
  }
  return (
    <div className="DroneDetail">
      {details}
    </div>
  )
}

export default DroneDetail;
