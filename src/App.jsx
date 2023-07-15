import './App.css'
import { Button, Typography, Card } from '@mui/material';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

function App() {

  return (
    <RecoilRoot>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Card style={{width: '400px', padding: '20px'}}>
        <Typography style={{display: 'flex', justifyContent: 'center'}} variant='h6'>Simple react count App</Typography>
        <Buttons />
        <CounterComponent />
      </Card>
    </div>
    </RecoilRoot>
  )
}

function CounterComponent() {
  const count = useRecoilValue(counterState);
  return <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
    {count}
  </div>
}

function Buttons() {
  return <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
    <Increment />
    <Decrement />
  </div>
}

function Increment() {
  const setCount = useSetRecoilState(counterState)
  return <Button variant="contained" onClick={() => setCount(currentCount => currentCount + 1)}>Increment</Button>
}

function Decrement() {
  const setCount = useSetRecoilState(counterState)
  return <Button variant="contained" onClick={() => setCount(currentCount => currentCount - 1)}>Decrement</Button>
}

export default App

// atom is recoil way to define state
const counterState = atom({
  key: 'counterState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});