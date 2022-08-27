import { useState } from 'react'

export const Counter = (props) => {
    const [count, setCount] = useState(() => props.count)
    const [style, setStyle] = useState('blue')

    const changeButtonStyle = (color) => {
        setStyle(color)
    }
  return (
    <div>
        <h2>Counter</h2>
        <p>Você clicou {count} vezes</p>
        <button 
            onMouseEnter={() => changeButtonStyle('red')} 
            onMouseLeave={() => changeButtonStyle('blue')}
            style={{backgroundColor:`${style}`}} 
            onClick = {() => setCount((prevCount) => prevCount + 1)}> 
            + 
        </button>
        <button onClick = {() => setCount(count - 1)}> - </button>
        <button onClick={()=> setCount(count * 2)}> *2 </button>
    </div>
  )
}

// const btn = document.getElementById('button')
// btn.onclick = () => { count += 1}
// btn.addEventListener('click', () => { count += 1 })




