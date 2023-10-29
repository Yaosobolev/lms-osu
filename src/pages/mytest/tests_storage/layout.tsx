
export default function DashboardLayout(
    {
        children,
        profile
    }: {
        children: React.ReactNode
        profile: React.ReactNode
    }
) {

    return (
        <main className="h-scree flex overflow-hidden">
            <div className="relative flex-1 h-screen overflow-y-auto bg-zinc-100 dark:bg-zinc-800">
                {/* <header className="sticky top-0 z-10 border-b border-zinc-300/25 bg-white/75 p-6 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-900/75">Header</header> */}
                <section className="p-4">
                    {children}
                </section>

                <footer className="flex justify-between gap-4 p-6 text-sm text-zinc-500">
                    <span>Copyright © 2023</span>
                    <span className=""><b>Debug Divas</b> team</span>
                </footer>
            </div>
        </main>
    )
}