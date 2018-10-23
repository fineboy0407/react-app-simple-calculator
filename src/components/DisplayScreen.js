import React from 'react';

const DisplayScreen = ({ displayExpression, displayValue }) => {
  return (
    <div className="display-div">
	  	<div className="display-expression">{displayExpression}</div>
	  	<div className="display-value">{displayValue}</div>
    </div>
  );
};




export default DisplayScreen;