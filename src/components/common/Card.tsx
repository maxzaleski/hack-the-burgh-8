import { ReactNode } from "react";

export default function Card(props) {
  return <div className={`${props.className} bg-white rounded-lg shadow-md p-6`}>{props.children}</div>;
}
