

const Button = (props) => {


  return (
    <button onClick={props.click} className="buttonClass">{props.tittle}</button>
  );
}

export default Button;