import { useState } from 'react'
import './App.css'
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Card style={{width: '400px', padding: '20px'}}>
        <Typography style={{display: 'flex', justifyContent: 'center'}} variant='h6'>Simple react count App</Typography>
        <Buttons count={count} setCount={setCount}/>
        <CounterComponent count={count} />
      </Card>
    </div>
  )
}

function CounterComponent({count}) {
  return <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
    {count}
  </div>
}

function Buttons({count, setCount}) {
  return <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
    <Increate count={count} setCount={setCount} />
    <Decrement count={count} setCount={setCount} />
  </div>
}

function Increate({count, setCount}) {
  return <Button variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
}

function Decrement({count, setCount}) {
  return <Button variant="contained" onClick={() => setCount(count - 1)}>Decrement</Button>
}

export default App
