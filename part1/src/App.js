import React from "react"
const Ho = (props) => {
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
    greeting app created by <a href="https://github.com/abdelfatah-92">Abdo</a>
    </div>
  )
}
const App = () => {
  const Name = 'Abdelfatah'
  const Age = 30
  const Time = new Date()
  const a = 40
  const b = 20 
  return [
      <h1>Greating</h1>,
      <Ho name="Saleh" age={20+5} />,
      <Ho name="Mohamed" age="33" />,
      <Ho name={Name} age={Age} />,
      <Footer />,
      <p>hello world it is {Time.toString()}</p>,
      <p> {a} plus {b} = {a + b}</p>
  ]
}  
export default App;
