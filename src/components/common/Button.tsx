import classes from './Button.module.css';

const WhiteButton = (props) => {
  return (
    <button
      type="submit"
      className="bg-white font- text-neutral-900 font-medium py-2 px-6 flex items-center justify-center w-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 ring-white">
      {props.title}
    </button>
  );
};

function Button(props) {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={`${classes.button} ${props.className} text-neutral-900 font-medium py-2 px-6 rounded drop-shadow-xl shadow-xl inline-flex items-center`}>
      {props.children}
    </button>
  );
}

export default Button;
export { WhiteButton };
