// Write your code here
import Message from '../Message'

import Home from '../Home'

const Login = props => {
  const {click, btnText} = props
  return <button onClick={click}>{btnText}</button>
}
export default Login
