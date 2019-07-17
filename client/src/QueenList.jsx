import React from 'react';

const QueenList = props => {
  let queens;
  if ( props.queens.length ) {
    queens = props.queens.map((queen, index) => {
      return <p className='queenrow' key={index}>{queen.name}</p>
    })
  } else {
    // No data yet
    queens = <p>No Queen Data!</p>
  }
  return (
    <div className='QueenList'>
      <h3>All the Queens:</h3>
      {queens}
    </div>
  )
}

export default QueenList;
