// props drilling: passing data from parent component to child component through props (properties) in multiple levels
// child component of A: B
const B = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  )
}

// child component of App: A
const A = ({ name }) => {
  return (
    <div>
      <B
        name={name}
      />
    </div>
  )
}

// parent component: App
// data is in the parent component
// data: name
const App = () => {
  const name = 'React';

  return (
    <div>
      <A
        name={name}
      />
    </div>
  )
}

export default App;