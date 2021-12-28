// ShowButtons component
export default ({ computeValue, computeDisplayExpression }) => {
	const CALCULATOR_BUTTONS = [
		"(",
		")",
		"^",
		"CL",
		"7",
		"8",
		"9",
		"/",
		"4",
		"5",
		"6",
		"*",
		"1",
		"2",
		"3",
		"-",
		".",
		"0",
		"=",
		"+",
	]
	return (
		<div className="show-buttons">
			{CALCULATOR_BUTTONS.map((ele, index) => {
				return (
					<a
						key={"calc-" + ele}
						href="#"
						id={ele}
						className="btn"
						onClick={
							ele != "=" ? computeDisplayExpression : computeValue
						}
					>
						{ele}
					</a>
				)
			})}
		</div>
	)
}
