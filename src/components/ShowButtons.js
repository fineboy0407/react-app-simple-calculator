import React from 'react';

const ShowButtons = ({ computeValue, computeDisplayExpression }) => {

  const CALCULATOR_BUTTONS = ['1', '2', '3', '4',
    '5', '6', '7', '8',
    '9', '0', '+', '-',
    '*', '.', '/', '(',
    ')', '^', 'CL', '='
  ]
  return (
    <div className="show-buttons">

	  	{
	  		CALCULATOR_BUTTONS.map((ele, index)=> {
		  		var divStyle = { gridRow: (index / 4) + 1, gridColumn: (index / 4) + 1} 

	  			return (
		  			<div key={'calc-'+ ele}>
			  			<a href="#" id={ele} className="btn" 
			  			onClick={(ele != '=') ? computeDisplayExpression: computeValue} >{ele}</a>
			  		</div>
		  		)
	  		})
	  	}
  	</div>
  );
};



export default ShowButtons;