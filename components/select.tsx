'use client'

import { useState } from 'react'

type Props = {
    description: {
        label_text: string
        select_id: string
        select_name: string
        options: Array<string | number>
    }
}
const Select = ({ description }: Props) => {
    const [isOpen, setIsopen] = useState<boolean>(false)
    return (
        <div className="w-full">
            <label
                className="text-sm font-semibold text-gray-500"
                htmlFor={description.select_id}
            >
                {description.label_text}
            </label>
            <div className="relative">
                <select
                    className="mt-1 w-full appearance-none rounded-lg py-2 px-4 bg-gray-700 text-white placeholder:text-white shadow-md leading-6.5"
                    name={description.select_name}
                    id={description.select_id}
                >
                    <option className="text-black" value={undefined}>
                        Select...
                    </option>
                    {description.options?.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                        className="size-5 stroke-white group-has-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        fill="none"
                    >
                        <path
                            d="M5.75 10.75L8 13L10.25 10.75"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M10.25 5.25L8 3L5.75 5.25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Select
