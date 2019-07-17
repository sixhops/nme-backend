import React from 'react';
import DroneList from './DroneList';

const QueenDetail = props => {
  let details;
  if ( Object.keys(props.queen).length === 0 ) {
    // empty queen - no data
    details = (
      <>
        <p>Please select a Queen Bee...</p>
      </>
    )
  } else {
    details = (
      <>
        <h3>{props.queen.name}</h3>
        <h4>Flavor: {props.queen.royalJellyFlavor}</h4>
        <DroneList selectDrone={props.selectDrone} drones={props.queen.drones} />
      </>
    )
  }
  return (
    <div className="QueenDetail">
      {details}
    </div>
    )
}

export default QueenDetail;
