import { UseFormRegisterReturn } from "react-hook-form";
import React, { useState } from "react";

type IInput1 = {
  id: string;
  type: "number" | "text" | "password" | "time";
  label: string;
  placeholder?: string;
  inputProps: UseFormRegisterReturn<string>;
  error: string;
  clearFn?: false;
  dirty?: never;
};

type IInput2 = {
  id: string;
  type: "number" | "text" | "password" | "time";
  label: string;
  placeholder?: string;
  inputProps: UseFormRegisterReturn<string>;
  error: string;
  // eslint-disable-next-line no-unused-vars
  clearFn: (event: React.MouseEvent<HTMLButtonElement>) => void;
  dirty: boolean;
};

type IInput = IInput2 | IInput1;

export default function Input(props: IInput) {
  const [show, isShow] = useState(false);

  return (
    <section style={{ margin: "10px 0", width: "100%" }}>
      <label htmlFor={props.id}>
        <span style={{ marginBottom: "5px", display: "inline-block" }}>
          {props.label}
        </span>
      </label>
      <br />
      {props.type === "password" ? (
        <>
          <input
            type={!show ? "password" : "text"}
            id={props.id}
            placeholder={props.placeholder}
            {...props.inputProps}
          />
          <button onClick={() => isShow((prev) => !prev)}>
            {show ? "Hide" : "Show"}
          </button>
        </>
      ) : (
        <>
          <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            {...(props.inputProps ?? {})}
          />
          {props.clearFn && props.dirty && <button onClick={props.clearFn}>Clear</button>}
        </>
      )}
      <div className="error">
        <p style={{ margin: 0 }}>{props.error ? props.error : " "}</p>
      </div>
    </section>
  );
}
