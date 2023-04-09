import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Letreiro from './Letreiro';

function App() {
  const [time, setTime] = useState(0)

  useEffect(() =>{
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    },500)
    return () => clearInterval(interval)
    }, [time])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
          <h2>Agora é {time}</h2>
          <Letreiro/>
      </header>
    </div>
  );
}



export default App;
