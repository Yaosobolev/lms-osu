import LoginForm from "@/components/login/LoginForm";

export default function LoginLayout() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <img src="/logo.svg" className="h-12" alt="" />
            </div>

            <div>
                <h2 className="text-4xl font-semibold">Авторизация</h2>
            </div>

            <div>
                <p>Войдите в свой аккаунт.</p>
            </div>

            <div className="border border-zinc-500/25 dark:border-zinc-500/50"></div>

            <LoginForm />

            <div>
                <span className="flex gap-2 text-sm">
                    <span className="text-zinc-400 dark:text-zinc-500">Ещё нет аккаунта на платформе?</span>
                    <a className="hover:text-inherit" href="/sign-up">Создать</a>
                </span>
            </div>
        </div>
    )
}