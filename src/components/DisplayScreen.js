// DisplayScreen component
export default ({ displayExpression, displayValue }) => {
  return (
    <div className="display-div">
      <div className="display-expression">{displayExpression}</div>
      <div className="display-value">{displayValue}</div>
    </div>
  )
}
