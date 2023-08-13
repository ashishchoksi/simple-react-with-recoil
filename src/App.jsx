import { useState } from 'react'
import './App.css'
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function App() {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Card style={{width: '400px', padding: '20px'}}>
        <Typography style={{display: 'flex', justifyContent: 'center'}} variant='h6'>Simple react count App</Typography>
        <Buttons/>
        <CounterComponent/>
      </Card>
    </div>
  )
}

/**
 * Since we have provider, store available to all component
 * we just have to access state that we can do with hook useSelector that give us access to whole state
 * we can choose what we want from state.
 * currenly our state holds only single variable count so we accessing whole state. 
 */
function CounterComponent() {
  const count = useSelector(state => state);
  console.log (count);
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

/**
 * onclick of this button we are dispatching the event with type: 'INCREMENT'
 * This dispatch() invokes reducer that updates the store means state updated
 * 
 * How??
 * Since we aready added provider in root DOM with store we have access to store here
 * store takes reducer as argument so we have access to reducer
 * we cant directly invokes the reducer but we have have a hook useDispatcher which internally invokes reducer with
 * actionType using dispatch function. 
 */
function Increate() {
  const dispatch = useDispatch();
  return <Button variant="contained" onClick={() => dispatch({type: 'INCREMENT'})}>Increment</Button>
}

function Decrement() {
  const dispatch = useDispatch();
  return <Button variant="contained" onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</Button>
}

export default App
