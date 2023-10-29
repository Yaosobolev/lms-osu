import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";

export default function SignUpPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <img src="/vite.svg" className="h-12" alt="" />
            </div>

            <div>
                <h2 className="text-4xl font-semibold">Создание аккаунта</h2>
            </div>

            <div>
                <p>Самостоятельная регистрация предусмотрена только для владельцев организаций.</p>
            </div>

            <div className="border border-zinc-500/25 dark:border-zinc-500/50"></div>

            <div>
                <SignUpForm />

                <span className="flex gap-2 text-sm">
                    <span className="text-zinc-400 dark:text-zinc-500">Уже есть аккаунт на платформе?</span>
                    <Link className="hover:text-inherit" to="/sign-in">Войти</Link>
                </span>
            </div>
        </div>
    )
}