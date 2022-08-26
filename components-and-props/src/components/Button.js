const Button = ({color, text, reference}) => {
  return (
    <a href ={reference}>
        <button style={{backgroundColor: color, }}>{text}</button>
    </a>
  )
}

export default Button