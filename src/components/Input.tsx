import { ChangeEventHandler } from "react"

export default function Input({
    label,
    type = "text",
    icon,

    classes,
    inputClasses,

    ...otherProps
}: {
    placeholder?: string
    type?: string
    name?: string
    label?: string
    icon?: React.ReactElement

    classes?: string
    inputClasses?: string

    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}) {
    return (
        <label className={classes}>
            {label && (
                <div className="mb-2 text-sm">{label}</div>
            )}

            <div className="relative">
                <div className="absolute top-[2px] bottom-[2px] flex justify-center items-center rounded start-px px-3">
                    {icon}
                </div>
                <input
                    className={["w-full appearance-none outline-none text-black dark:text-white transition-all duration-300 ease-in-out border-2 border-zinc-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 focus:border-zinc-300 dark:focus:border-zinc-800 focus:bg-transparent dark:focus:bg-transparent px-1.5 py-2 rounded-lg", inputClasses].join(" ")}
                    style={icon && { paddingLeft: "32.5px" }}
                    type={type}
                    {...otherProps}
                />
            </div>
        </label>
    )
}