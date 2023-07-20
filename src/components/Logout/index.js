// Write your code here

import Message from './Message/index'

const Logout = props => {
  const {btnText, click} = props
  return <button onClick={click}>{btnText}</button>
}

export default Logout
