import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';

function App() {
  

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Card style={{width: '400px', padding: '20px'}}>
        <Typography style={{display: 'flex', justifyContent: 'center'}} variant='h6'>Simple react count App</Typography>
        <Buttons/>
        <CounterComponent />
      </Card>
    </div>
  )
}

function CounterComponent() {
  return <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
    0
  </div>
}

function Buttons() {
  return <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
    <Increate />
    <Decrease />
  </div>
}

function Increate() {
  return <Button variant="contained">Increment</Button>
}

function Decrease() {
  return <Button variant="contained">Increment</Button>
}

export default App
