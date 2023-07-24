// Write y

const Login = props => {
  const {btnText, click} = props

  const onChange = () => {
    click()
  }

  return <button onClick={onChange}>{btnText}</button>
}

export default Login
