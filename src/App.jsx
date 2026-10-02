const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {' '}
  {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {'name': 'Fundamentals of React', 'exercises': 10}
  const exercises1 = 10
  const part2 = {'name': 'Using props to pass data', 'exercises': 7}
  const exercises2 = 7
  const part3 = {'name': 'State of a component', 'exercises': 14}
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App