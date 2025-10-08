import './App.css'
import Button from '../ui/Button/Button.jsx'

const App = () => {
  return (
    <>
      <div>DEMAT Breizh</div>
      <Button mystyle={{backgroundColor:"pink"}} type="button">Benjamin</Button>
      <Button>
        <div>Div1</div>
        <div>Div2</div>
      </Button>
    </>
  )
}

export default App
