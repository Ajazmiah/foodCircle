import classes from './Button.module.css'

const Button = props =>{
  return(
    <button
      onClick={props.clicked}
      className={`${classes.Button}
      ${props.cusClass ?
      classes[`${props.cusClass}`] : ''}`}>
      {props.children}
    </button>
  )
}

export default Button;
