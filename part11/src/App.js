const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Time = () => {
  const now = new Date()
  return (
  <div>
    It is {now.toString()}
  </div>
  )
}
const Auther = () => {
  return (
    <div>
      This App created by <a href="https://github.com/abdelfatah-92"> Abdo </a>
    </div>
  )
}
const Part = (props) => {
  return (
   <div>
     {props.name} {props.exercises}
   </div>
  )
}
const Content = () => {
  return ( 
    <div>
      <Part name="Fundamentals of React" exercises={10} />
      <Part name="Using props to pass data" exercises={7} />
      <Part name="State of a component" exercises={14} />
    </div>
  )
}
const Total = (props) => {
  return (
  <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} </p>
  )
}
const App = () => {
  return (
    <div>
      <Time/>
      <Header course = "Half stack application development" />
      <Content/>
      <Total exercises1 = {10} exercises2 = {7} exercises3 = {14} />
      <Auther/>
    </div>
  )
}
export default App

