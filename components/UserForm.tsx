import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Input from "./Input";

type IInputValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  time: string;
};

export default function UserForm() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, dirtyFields },
  } = useForm<IInputValues>();

  const onSubmit: SubmitHandler<IInputValues> = () => {};

  return (
    <section>
      <h4 style={{ marginBottom: 0, marginLeft: "5px" }}>User Form</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
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
          clearFn={() => resetField("username")}
          dirty={dirtyFields.username as boolean}
          error={errors.username?.message as string}
        />

        <Input
          id="time"
          label="time"
          type="time"
          inputProps={register("time", {
            required: "time is required",
            minLength: {
              value: 4,
              message: "Mininum 4",
            },
          })}
          clearFn={() => resetField("time")}
          dirty={dirtyFields.time as boolean}
          error={errors.time?.message as string}
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
