import { Dispatch, SetStateAction } from "react";

import { useAtom } from "jotai";
import { counterAtom } from "@/atoms/counterAtoms";

type TProps = {
  open: boolean;
  isOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ open, isOpen }: TProps) {
  // console.log(open, isOpen);

  const [counter] = useAtom(counterAtom);

  return (
    <section>
      <h1>Sidebar</h1>
      <button onClick={() => isOpen((prev) => !prev)}>Click</button>
      <h1>{open ? "Open" : "Close"}</h1>
      <h1>Counter: {counter}</h1>
    </section>
  );
}
