export const OnboardingHeader = (props) => {
  return (
    <div className="flex flex-col p-8 w-full h-full">
      <span className="font-mono text-rose-500">Step {props.step}</span>
      <div className="flex flex-col justify-center items-center w-full h-full">
        {props.children}
      </div>
    </div>
  );
};
