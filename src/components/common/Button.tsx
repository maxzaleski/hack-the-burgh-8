export const Button = (props) => {
    return (
        <button type="submit" className="w-full text-xl bg-blue-500 text-white font-bold py-2 px-6 rounded drop-shadow-xl shadow-xl inline-flex items-center">
        {props.title}
        </button>
    );
}