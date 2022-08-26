import Button from './Button'

const NavBar = (props) => {
    return(
        <nav>
            <h1>React- Components & Props</h1>
            <Button color={props.color} text='REACT' reference='https://reactjs.org'/>
            <Button color='gray' text='DONT CLICK' reference='http://www.pudim.com.br'/>
            <button>Dont Click me</button>
            <button>Click Me</button>
        </nav>
    )
}

export default NavBar