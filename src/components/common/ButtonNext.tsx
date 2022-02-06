export const ButtonNext = (props) => {
    return (
        <button type="submit" className="text-xl bg-white text-black font-bold py-2 px-6 rounded drop-shadow-xl shadow-xl inline-flex items-center">
        {props.title}
        <svg xmlns="http:www.w3.org/2000/svg" className="h-8 w-8 pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </button>
    );
}