import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'
import AliveOutlet from './AliveOutlet';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/1')}>Detail:1</button>
        <button onClick={() => navigate('/2')}>Detail:2</button>
        <button onClick={() => navigate('/3')}>Detail:3</button>
      </div>
      <AliveOutlet />
    </div>
  )
}

export default App
