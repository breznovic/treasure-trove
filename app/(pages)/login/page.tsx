"use client";

import { Button } from "@/app/components/Button/Button";
import s from "./page.module.css";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useUserStore } from "@/store/users";
import { useRouter } from "next/navigation";
import { User } from "@/app/utils/types/usersTypes";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({ mode: "onTouched" });

  const [username, setUsername] = useState("");
  const createUser = useUserStore((state) => state.createUser);
  const users = useUserStore((state) => state.users);

  const router = useRouter();

  const setNewUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const existingUserFromLocalStorage = Object.values(localStorage)
      .map((item) => JSON.parse(item))
      .find((user: User) => user.username === username);

    const existingUserFromStore = users.find(
      (user) => user.username === username
    );

    if (existingUserFromLocalStorage || existingUserFromStore) {
      const existingUserId =
        existingUserFromLocalStorage?.id || existingUserFromStore?.id;
      router.push(`/town?userId=${existingUserId}`);
    } else {
      const newUserId = createUser(username);
      localStorage.setItem(
        `user_${newUserId}`,
        JSON.stringify({ id: newUserId, username })
      );
      router.push(`/choose-hero?userId=${newUserId}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

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
            {...register("username", {
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
              clearErrors("username");
            }}
            onKeyDown={handleKeyPress}
            className={s.input}
          />
          {errors.username && (
            <span className={s.error}>{errors.username.message as string}</span>
          )}
        </label>

        <Button
          type="submit"
          title="Go to the adventure"
          disabled={username.length === 0}
        />
      </form>
    </div>
  );
}
