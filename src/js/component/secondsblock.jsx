import React from 'react';


const SecondsCounter = ({ time }) => {
  return (
    <div className="container bg-dark d-flex justify-content-center align-items-center text-center">
        <div className="col-1 text-light fs-2 border-end border-start rounded m-2 p-2 bg-secondary bg-opacity-25">
          {time}
        </div>
        
    </div>  
    )
}

export default SecondsCounter;