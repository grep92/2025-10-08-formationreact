import './App.css'
import Button from '../ui/Button/Button.js'
import { useEffect, useState } from 'react';

const App = () => {
  
  const [counter, setCounter] = useState(-1000);

  // Sur montage et démontage du composant.
  useEffect(() => {
    setCounter(0);
  }, []);

  // Sur rafraîchissement de counter
  useEffect(() => {
    //console.log(`useEffect is called with ${counter}`); 
  }, [counter]);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>Valeur du compteur {counter}</div>
      <hr />
      <Button bgcolor='tomato'
        clickAction={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}>
        -1
      </Button>
      <Button bgcolor='skyblue'
        clickAction={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}>
        +1
      </Button>
    </div>
  )
}

export default App
