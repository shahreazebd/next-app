import type { NextPage } from "next";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

import { useAtom } from "jotai";
import { counterAtom } from "@/atoms/counterAtoms";

const About: NextPage = () => {
  // console.log("hello");
  const [open, isOpen] = useState(false);
  const [, setCounter] = useAtom(counterAtom);

  return (
    <>
      <Sidebar open={open} isOpen={isOpen} />
      <h1>About</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </>
  );
};

export default About;
