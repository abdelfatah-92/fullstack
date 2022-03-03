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
const sum = (p1, p2, p3 ) => {
  return( p1 + p2 + p3
    )
}
const Total = (props) => {
  return (
   <div> 
    Number of exercises {sum(props.parts[0].exercises, props.parts[1].exercises, props.parts[2].exercises)}
   </div>
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
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
      <Footer/>
    </div>
  )
}
export default App
