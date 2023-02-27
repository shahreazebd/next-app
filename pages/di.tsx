// import DiModal from "@/components/di/DiModal";
import dynamic from "next/dynamic";
import { useState } from "react";
const DiModal = dynamic(() => import("../components/di/DiModal"));
export default function DynamicImport() {
  const [open, isOpen] = useState(false);
  return (
    <section>
      <h1>Dymanic Imports</h1>
      <button onClick={() => isOpen((prev) => !prev)}>Show</button>
      {open && <DiModal />}
    </section>
  );
}
