import './App.css';
import { useState } from 'react';
import { Counter }  from './components/Counter'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = (event) => {
    setTheme(event.target.value)
  }

  return (
    <div className={`App ${theme}`}>
      <h1>Meu app</h1>
      <Counter count = {0}/>
      <select onChange={toggleTheme}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  );
}

export default App;
