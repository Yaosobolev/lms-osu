export default function DashboardPage() {
    return (
        <div className="p-0">
            <div id="Examples" className="scroll-mt-offset col-span-12">
                <span className="text-3xl font-semibold">Тема</span>
            </div>
            <div className="mt-5 flex flex-col bg-white dark:bg-zinc-900 rounded-xl">
                <div className="felx flex-row px-4 pb-4 [&amp;:first-child]:pt-4">
                    <label className="m-2 mt-8 inline-block w-full cursor-pointer text-2xl font-semibold">Тест</label>
                    <span className="m-2 text-xl font-medium">Осталось попыток: 0/3 </span>
                    <label className="relative -right-3/4 -top-5  inline-flex items-center justify-center text-xl font-low">Лучший результат</label>
                    <label className="relative -right-3/4 ml-10 mb-5 -top-5 inline-flex items-center justify-center text-2xl font-medium ">5</label>
                </div>
            </div>
        </div>
    )
}