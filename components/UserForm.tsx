import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Input from "./Input";

type IInputValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputValues>({ mode: "all" });

  const onSubmit: SubmitHandler<IInputValues> = (values) => {
    console.log(values);
  };

  return (
    <section>
      <h4 style={{ marginBottom: 0, marginLeft: "5px" }}>User Form</h4>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", width: "25%" }}
      >
        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="shahreaz"
          inputProps={register("username", {
            required: "Username is required",
            minLength: {
              value: 4,
              message: "Mininum 4",
            },
          })}
          error={errors.username?.message as string}
        />

        <Input
          id="email"
          label="Email"
          type="text"
          placeholder="shahreaz@gmail.com"
          inputProps={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter valid email",
            },
          })}
          error={errors.email?.message as string}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="*****"
          inputProps={register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Passowrd must be 6 charecter long",
            },
          })}
          error={errors.password?.message as string}
        />

        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="*****"
          inputProps={register("confirmPassword", {
            required: "Confirm Password is required",
            minLength: {
              value: 6,
              message: "Passowrd must be 6 charecter long",
            },
            validate: (value, values) => {
              if (value !== values.password) return "Password must match";
            },
          })}
          error={errors.confirmPassword?.message as string}
        />

        <input type="submit" value="Submit" style={{ margin: "5px" }} />
      </form>
    </section>
  );
}
