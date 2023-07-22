// Write your code here

import Message from '../Message/index'

import Home from '../Home'

const Logout = props => {
  const {btnText, click} = props
  return <button onClick={click}>{btnText}</button>
}

export default Logout
