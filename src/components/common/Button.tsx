import classes from './Button.module.css';

export const WhiteButton = (props) => {
    return (
        <button type="submit" className="text-xl bg-white text-black font-bold py-2 px-6 rounded drop-shadow-xl shadow-xl inline-flex items-center">
        {props.title}
        </button>
    );
}


export default function Button(props) {
  return (
    <button
      type="submit"
      className={`${classes.button} text-xl text-black font-bold py-2 px-6 rounded drop-shadow-xl shadow-xl inline-flex items-center`}>
      {props.children}
    </button>
  );
}
