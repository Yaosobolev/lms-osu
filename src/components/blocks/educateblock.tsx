export default function EducateBlock({
    label,
    name,
    progress,
    testCount,
    buttonName,
    link,

    classes,
    inputClasses,
}: {

    name?: string
    label?: string
    progress?: string
    testCount?: string
    buttonName?: string
    link?: string

    classes?: string
    inputClasses?: string
}) {
    return (
        <div className="mt-5 flex flex-col bg-white dark:bg-zinc-900 rounded-xl">
            <div className="felx flex-row px-4 pb-4 [&amp;:first-child]:pt-4">
                <label className="m-2 inline-block w-full text-2xl font-semibold">{name}</label>
                
                <a href={link}>
                    <button type="button" className="relative -right-3/4 -top-5 inline-flex items-center justify-center bg-blue-500 border-2 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 active:bg-blue-600 active:border-blue-600 px-5 py-1.5 text-base rounded-lg transition-all duration-300 ease-in-out ">{buttonName}</button>
                </a>
            </div>
        </div>
    )
}