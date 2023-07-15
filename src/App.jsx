import { createContext, useContext, useState } from 'react'
import './App.css'
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';

// create context to avoid props drilling
const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    // using this you dont need to pass props it automatically get it from global variable
    <CounterContext.Provider value={{
      count: count,
      setCount: setCount
    }}>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Card style={{width: '400px', padding: '20px'}}>
        <Typography style={{display: 'flex', justifyContent: 'center'}} variant='h6'>Simple react count App</Typography>
        <Buttons />
        <CounterComponent />
      </Card>
    </div>
    </CounterContext.Provider>
  )
}

function CounterComponent() {
  const {count} = useContext(CounterContext);
  return <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
    {count}
  </div>
}

function Buttons() {
  return <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
    <Increate />
    <Decrement />
  </div>
}

function Increate() {
  const {count, setCount} = useContext(CounterContext);
  return <Button variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
}

function Decrement() {
  const {count, setCount} = useContext(CounterContext);
  return <Button variant="contained" onClick={() => setCount(count - 1)}>Decrement</Button>
}

export default App
