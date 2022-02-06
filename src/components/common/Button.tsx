export const Button = (props) => {
    return (
        <button type="submit" className="text-xl bg-white text-black font-bold py-2 px-6 rounded drop-shadow-xl shadow-xl inline-flex items-center">
        {props.title}
        </button>
    );
}