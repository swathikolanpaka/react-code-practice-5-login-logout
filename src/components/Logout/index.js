// Write your co

const Logout = props => {
  const {btnText, click} = props

  const onChange = () => {
    click()
  }

  return <button onClick={onChange}>{btnText}</button>
}

export default Logout
