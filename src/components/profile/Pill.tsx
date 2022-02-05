interface Props {
  text: string;
}

export default function Pill({ text }: Props) {
  return (
    <div className="rounded-full bg-slate-200 w-min px-2 py-0.5 mr-1 my-1">
      <p className="text-slate-700">{text}</p>
    </div>
  );
}
