import classes from './Button.module.css';

export default function Button(props) {
  return (
    <button
      type="submit"
      className={`${classes.button} text-xl text-black font-bold py-2 px-6 rounded drop-shadow-xl shadow-xl inline-flex items-center`}>
      {props.children}
    </button>
  );
}
