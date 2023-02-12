import type { NextPage } from "next";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

import { useAtom } from "jotai";
import { counterAtom } from "@/atoms/counterAtoms";
import VerticalLayout from "@/layout/VerticalLayout";

const About: NextPage = () => {
  // console.log("hello");
  const [open, isOpen] = useState(false);
  const [, setCounter] = useAtom(counterAtom);

  return (
    <VerticalLayout>
      <Sidebar open={open} isOpen={isOpen} />
      <h1>About</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </VerticalLayout>
  );
};

export default About;
