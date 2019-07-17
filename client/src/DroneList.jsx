import React from 'react';

const DroneList = props => {
  let drones = props.drones.map((drone, index) => {
    // TODO: Add click functionality
    return <li onClick={() => props.selectDrone(drone)} key={index}>{drone.name}</li>
  })
  return (
    <ul className="DroneList">
      {drones}
    </ul>
  )
}

export default DroneList;
