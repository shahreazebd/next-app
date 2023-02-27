import { UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";

type IInput = {
  id: string;
  type: "number" | "text" | "password" | "time";
  label: string;
  placeholder?: string;
  inputProps: UseFormRegisterReturn<string>;
  error: string;
  clearFn?: any;
  dirty?: boolean;
};

export default function Input({
  id,
  type,
  label,
  placeholder,
  inputProps,
  error,
  clearFn,
  dirty,
}: IInput) {
  const [show, isShow] = useState(false);

  return (
    <section style={{ margin: "10px 0", width: "100%" }}>
      <label htmlFor={id}>
        <span style={{ marginBottom: "5px", display: "inline-block" }}>{label}</span>
      </label>
      <br />
      {type === "password" ? (
        <>
          <input
            type={!show ? "password" : "text"}
            id={id}
            placeholder={placeholder}
            {...inputProps}
          />
          <button onClick={() => isShow((prev) => !prev)}>
            {show ? "Hide" : "Show"}
          </button>
        </>
      ) : (
        <>
          <input type={type} id={id} placeholder={placeholder} {...(inputProps ?? {})} />
          {dirty && <button onClick={clearFn}>Clear</button>}
        </>
      )}
      <div className="error">
        <p style={{ margin: 0 }}>{error ? error : " "}</p>
      </div>
    </section>
  );
}
