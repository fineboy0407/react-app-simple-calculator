import { useState, useEffect, Component } from 'react';
import { evaluate } from 'mathjs'

// components
import DisplayScreen from './DisplayScreen'
import ShowButtons from './ShowButtons'
import ErrorComponent from './ErrorComponent'

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayExpression: '',
      displayValue: 0,
      showError: false
    }
  }


  computeValue() {

    this.setState({
      displayValue: evaluate(this.state.displayExpression)
    })

    this.state.displayExpression = ''
  }

  computeDisplayExpression(event) {
    event.persist()

    if (event.target.id == 'CL') {
      this.setState({
        displayExpression: '',
        displayValue: 0
      })

    } else if (this.state.displayExpression == '' && event.target.id.match(/[0-9]/g) == null) {

      // if a symbol comes without any number
      this.setState({
        displayExpression: ''
      })

      // show the error notification
      this.setState((prevState, props) => ({
        showError: true
      }))

      // after 3ms hide the notification
      setTimeout(() => {
        this.setState((prevState, props) => ({
          showError: false
        }))
      }, 3000)

    } else {

      this.setState((prevState, props) => ({
        displayExpression: prevState.displayExpression + event.target.id
      }))
    }
  }

  render() {
    let { displayValue, displayExpression } = this.state

    var err = ''
    if (this.state.showError == true) {
      err = <ErrorComponent msg={'Please enter a number first'} />
    }

    return (
      <div>
        {err}

        <DisplayScreen
          displayExpression={displayExpression}
          displayValue={displayValue} />

        <ShowButtons
          computeValue={this.computeValue.bind(this)}
          computeDisplayExpression={this.computeDisplayExpression.bind(this)} />
      </div>
    );
  }
}

export default Calculator;