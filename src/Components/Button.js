import './Button.css'

const Button = (props) => {
  return (<div className='buttonContainer'>
    <button
      id="clear"
      onClick={props.reset}
      value="AC"
    >
      AC
    </button>
    <button
      id="divide" className='operator'
      onClick={props.operators}
      value="/"
    >
      /
    </button>
    <button
      id="multiply" className='operator'
      onClick={props.operators}
      value="x"
    >
      x
    </button>
    <button
      id="subtract" className='operator'
      onClick={props.operators}
      value="-"
    >
      -
    </button>
    <button
      id="add" className='operator'
      onClick={props.operators}
      value="+"
    >
      +
    </button>
    <button id="one"
      onClick={props.numbers}
      value="1">
      1
    </button>
    <button id="two"
      onClick={props.numbers}
      value="2">
      2
    </button>
    <button id="three"
      onClick={props.numbers}
      value="3">
      3
    </button>
    <button id="four"
      onClick={props.numbers}
      value="4">
      4
    </button>
    <button id="five"
      onClick={props.numbers}
      value="5">
      5
    </button>
    <button id="six"
      onClick={props.numbers}
      value="6">
      6
    </button>
    <button id="seven"
      onClick={props.numbers}
      value="7">
      7
    </button>
    <button id="eight"
      onClick={props.numbers}
      value="8">
      8
    </button>
    <button id="nine"
      onClick={props.numbers}
      value="9">
      9
    </button>
    <button
      id="zero"
      onClick={props.numbers}
      value="0"
    >
      0
    </button>
    <button id="decimal"
      onClick={props.decimal}
      value=".">
      .
    </button>
    <button
      id="equals"
      onClick={props.evaluate}
      value="="
    >
      =
    </button>
  </div>)
}

export default Button