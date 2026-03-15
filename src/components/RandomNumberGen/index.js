import {Component} from 'react'
import './index.css'

class Randomcounter extends Component {
  state = {count: 0}

  randomnumber = () => Math.ceil(Math.random() * 100)

  changenumber = () => {
    const random = this.randomnumber()

    this.setState({count: random})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="head">Random Number</h1>
        <p className="para">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="but" onClick={this.changenumber}>
          Generate
        </button>
        <p className="heading">{count}</p>
      </div>
    )
  }
}

export default Randomcounter
