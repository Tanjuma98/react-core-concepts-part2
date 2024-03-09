import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Posts from '../Posts'

function App() {
  const handleClick = () => {
    alert('clicked')
  }
  const addTo5 = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h3>React core concepts part 2</h3>
      <p>3. useEffect</p>
      <Posts></Posts>
      <Users></Users>
      <p>2. useState</p>
      <Team></Team>
      <Counter></Counter>
      <p>1. Different Way To Handle Events In React</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => {alert('clicked button 2')}}>click me 2</button>
      <button onClick={() => {addTo5(3)}}>click me 3</button>
    </>
  )
}

export default App
