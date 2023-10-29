import { MouseEventHandler, ReactNode } from "react";

export default function Question({
    id,
    label,
    name,
    progress,
    testCount,
    buttonName,
    question,
    answer,
    link,
    attempt,
    attempts,
    onClick,
    classes,
    inputClasses,
}: {
    id?: number
    name?: string
    label?: string
    progress?: number
    testCount?: number
    buttonName?: string
    question?: ReactNode
    answer?: ReactNode
    link?: string
    attempt?: string
    attempts?: string
    onClick?: MouseEventHandler

    classes?: string
    inputClasses?: string
}) {
    return (
        <div className="mt-5 flex flex-col bg-white dark:bg-zinc-900 rounded-xl">
            <div className="felx flex-row px-4 pb-4 [&amp;:first-child]:pt-4">
                <div className=" flex flex-row items-center justify-center">
                    <label className="mx-auto mt-5 inline-block w-full cursor-pointer text-2xl font-semibold">Вопрос {progress}/{testCount}</label>
                    <span className="mr-12 text-xl font-medium">попытка: {attempt} из {attempts}</span>
                </div>
                <div className="flex flex-col justify-center items-center m-10">
                    <span className="text-3xl">{question}</span>
                    <span className="text-2xl mt-5">Выберите правильный вариант ответа </span> 
                </div>
                {answer}
                
                <div className="flex flex-row items-center justify-center mt-20">
                    
                    <a href={link}>
                        <button type="button" className="inline-flex items-center justify-center bg-blue-500 border-2 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 active:bg-blue-600 active:border-blue-600 px-5 py-1.5 text-base rounded-lg transition-all duration-300 ease-in-out ">Ответить</button>
                    </a>
                        
                    
                    <span className="mx-5 ml-auto cursor-pointer text-xl">Предыдущий вопрос</span>
                    <span className="mx-5 mr-auto cursor-pointer text-xl" onClick={onClick}>Следующий вопрос</span>
                    <a href={link}>
                            <button type="button" className="ml-10 inline-flex items-center justify-center bg-blue-500 border-2 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 active:bg-blue-600 active:border-blue-600 px-5 py-1.5 text-base rounded-lg transition-all duration-300 ease-in-out ">Завершить</button>
                        </a>
                    
                </div>
                
            </div>
        </div>
    )
}