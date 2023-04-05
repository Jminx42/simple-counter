import React from 'react';
import propTypes from 'prop-types';

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="container bg-dark d-flex justify-content-center text-center">
        <div className="col-1 text-light fs-1 border-end border-start rounded m-3"><i class="fa-regular fa-clock"></i></div>
        <div className="col-1 text-light border-end border-start rounded m-3 bg-opacity-50">0</div>
        <div className="col-1 text-light border-end border-start rounded m-3">0</div>
        <div className="col-1 text-light border-end border-start rounded m-3">0</div>
        <div className="col-1 text-light border-end border-start rounded m-3">0</div>
        <div className="col-1 text-light border-end border-start rounded m-3">0</div>
        <div className="col-1 text-light border-end border-start rounded m-3">0</div>
    </div>  
    )
}

export default SecondsCounter;