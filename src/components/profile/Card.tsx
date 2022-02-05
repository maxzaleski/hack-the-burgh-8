import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode}) {
  return <div className="bg-white rounded-lg shadow-md p-6">{children}</div>;
}
