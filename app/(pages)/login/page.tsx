"use client";

import { Button } from "@/app/components/Button/Button";
import s from "./page.module.css";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useUserStore } from "@/lib/store";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({ mode: "all" });

  const [username, setUsername] = useState("");
  const createUser = useUserStore((state) => state.createUser);

  const setNewUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form submitted with username:", username);
    createUser(username);
  };

  console.log("Rendering LoginPage with username:", username);

  return (
    <div className={s.main}>
      <h2>Who are you, stranger?</h2>
      <Image
        src="/login.jpg"
        alt="Login"
        width={500}
        height={550}
        className={s.image}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label className={s.label}>
          Enter your name:
          <input
            {...register("Username", {
              required: "Username is required",
              minLength: {
                value: 1,
                message: "Username must be at least 1 character long",
              },
            })}
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              setNewUsername(e);
              clearErrors("Username");
            }}
            className={s.input}
          />
          {errors.Username && (
            <span className={s.error}>{errors.Username.message as string}</span>
          )}
        </label>

        <Link href="/choose-hero">
          <Button
            type="submit"
            title="Go to the adventure"
            disabled={username.length === 0}
          />
        </Link>
      </form>
    </div>
  );
}
