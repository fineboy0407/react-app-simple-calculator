import { useState } from "react"
import { evaluate } from "mathjs"

// components
import DisplayScreen from "./DisplayScreen"
import ShowButtons from "./ShowButtons"
import ErrorComponent from "./ErrorComponent"

const Calculator = () => {
  // initial state
  const calcExpression = {
    displayExpression: "",
    displayValue: 0,
    showError: false,
  }

  // set the initial state along with its modifier function
  const [calcExp, setCalcExp] = useState(calcExpression)

  // the actual computation using Math.js
  const computeValue = () => {
    setCalcExp({
      ...calcExp,
      displayValue: evaluate(calcExp.displayExpression),
      displayExpression: "",
    })
  }

  const computeDisplayExpression = (e) => {
    if (e.target.id == "CL") {
      setCalcExp({ ...calcExp, displayExpression: "", displayValue: 0 })
    } else if (
      calcExp.displayExpression == "" &&
      e.target.id.match(/[0-9]/g) == null
    ) {
      // if a symbol comes without any number show the error notification
      setCalcExp({ ...calcExp, displayExpression: "", showError: true })

      // after 3ms hide the notification
      setTimeout(() => {
        setCalcExp({ ...calcExp, showError: false })
      }, 3000)
    } else {
      setCalcExp({
        ...calcExp,
        displayExpression: calcExp.displayExpression + e.target.id,
      })
    }
  }

  const { displayValue, displayExpression, showError } = calcExp

  return (
    <div>
      {showError && <ErrorComponent msg={"Please enter a number first"} />}

      <DisplayScreen
        displayExpression={displayExpression}
        displayValue={displayValue}
      />

      <ShowButtons
        computeValue={computeValue}
        computeDisplayExpression={computeDisplayExpression}
      />
    </div>
  )
}

export default Calculator
