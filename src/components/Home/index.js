import {Component} from 'react'
import Login from './Login/index'
import Logout from './Logout/index'
import Message from './Message/index'

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
        {isClicked ? (
          <Logout text={text} btnText={btnText} click={btnClicked} />
        ) : (
          <Login text={text} btnText={btnText} />
        )}
      </div>
    )
  }
}

export default Home
