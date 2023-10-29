"use client"

import api from "@/api";
import { Input } from "@/components";
import { FormEvent, useState } from "react";
import { HiOutlineMail, HiOutlineKey } from "react-icons/hi";
import userStore from "@/lib/stores/user.store";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(event: FormEvent) {
        event.preventDefault();

        const response = await api.post("auth/sign-in", { email, password });

        const { accessToken, refreshToken } = response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        userStore.fetchUser();
    }

    return (
        <form onSubmit={submit} className="flex flex-col gap-4">
            <Input value={email} onChange={(event) => setEmail(event.target.value)} name="email" placeholder="Почта" icon={<HiOutlineMail />}></Input>
            <Input value={password} onChange={(event) => setPassword(event.target.value)} name="password" placeholder="Пароль" icon={<HiOutlineKey />} type="password"></Input>

            <button className="inline-flex items-center justify-center bg-blue-500 border-2 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 active:bg-blue-600 active:border-blue-600 px-6 py-2 text-lg rounded-lg transition-all duration-300 ease-in-out w-full font-semibold">Войти</button>
        </form>
    )
}