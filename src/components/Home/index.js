import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isClicked: true}

  btnClicked = () => {
    this.setState(prevState => {
      isClicked: !prevState.isClicked
    })
  }

  render() {
    const {isClicked} = this.state
    const text = isClicked ? 'Please Login' : 'welcome User'
    const btnText = isClicked ? 'Login' : 'Logout'

    return (
      <div className="bg-container">
        <div className="small-container">
          {isClicked ? <Message text={text} /> : <Message text={text} />}
          {isClicked ? (
            <Login btnText={btnText} click={this.btnClicked} />
          ) : (
            <Logout btnText={btnText} click={this.btnClicked} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
