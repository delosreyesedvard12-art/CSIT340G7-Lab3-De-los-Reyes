const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} units={props.parts[0].units} />
      <Part name={props.parts[1].name} units={props.parts[1].units} />
      <Part name={props.parts[2].name} units={props.parts[2].units} />
    </div>
  )
}

const Total = (props) => {
  return (
  <p>
    Total units:{' '}
    {props.parts[0].units + props.parts[1].units + props.parts[2].units}
  </p>
  )
}

const footer = (props) => {
return (
    <footer>
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CIT-U SUBJECT NAME',
    parts: [
      { name: 'IT317', units: 3 },
      { name: 'IT365', units: 3 },
      { name: 'CSIT321', units: 3 },
    ],
  }
  const fullName = 'EDVARD ANTONY L. DE LOS REYES'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App