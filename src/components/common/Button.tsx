import classes from './Button.module.css';

const WhiteButton = (props) => {
    return (
        <button type="submit" className="text-xl bg-white text-black font-bold py-2 px-6 rounded drop-shadow-xl shadow-xl inline-flex items-center">
        {props.title}
        </button>
    );
}


function Button(props) {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={`${classes.button} ${props.className} text-xl text-black font-bold py-2 px-6 rounded drop-shadow-xl shadow-xl inline-flex items-center`}>
      {props.children}
    </button>
  );
}

export default Button;
export { WhiteButton };
