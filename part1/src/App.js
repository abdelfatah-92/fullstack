import React from "react"
const Time = () => {
  const Now = new Date()
  return(
    <p>it is {Now.toString()}</p>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
} 
const Content = (props) => {
  return ( 
    <div>
     {props.parts.map(t => <li>{t.name} {t.exercises}</li> )}
    </div>
  )
}
const Total = (props) => {
  return (
   <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} </p>
  )
}
const Footer = () => {
  return(
   <p>
      App created by <a href="https://github.com/abdelfatah-92">Abdo</a>
   </p>
  )
}
const App = () => {
  const course = "Half stack application development" 
  const parts = [
    {
     name: "Fundamentals of React",
     exercises: 10
    },
    {
     name: "Using props to pass data",
     exercises: 7 
    },
    {
     name: "state of component",
     exercises: 14
    }
  ]
  return (
    <div>
      <Time/>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total exercises1 = {10} exercises2 = {7} exercises3 = {14} />
      <Footer/>
    </div>
  )
}
export default App
