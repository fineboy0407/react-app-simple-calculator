// ShowButtons component
export default ({ computeValue, computeDisplayExpression }) => {

	const CALCULATOR_BUTTONS = [
		'(', ')', '^', 'CL',
		'7', '8', '9', '/',
		'4', '5', '6', '*',
		'1', '2', '3', '-',
		'.', '0', '=', '+'
	]
	return (
		<div className="show-buttons">

			{
				CALCULATOR_BUTTONS.map((ele, index) => {
					var divStyle = { gridRow: (index / 4) + 1, gridColumn: (index / 4) + 1 }

					return (
						<div key={'calc-' + ele}>
							<a href="#" id={ele} className="btn"
								onClick={(ele != '=') ? computeDisplayExpression : computeValue} >{ele}</a>
						</div>
					)
				})
			}
		</div>
	);
};
