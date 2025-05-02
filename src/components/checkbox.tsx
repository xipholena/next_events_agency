'use client'

import { useState } from 'react'

type Props = {
    item: {
        input_id: string
        input_name: string
        input_value: string
        label_text: string
        checked?: boolean
    }
}
const Checkbox = ({ item }: Props) => {
    const [isChecked, setChecked] = useState<boolean>(false)
    return (
        <div className="relative pl-7 mt-3 sm:w-1/4 lg:w-1/2 xl:w-full">
            <input
                className="opacity-0 absolute left-0 top-0 w-full h-full z-1"
                id={item?.input_id}
                type="checkbox"
                name={item?.input_name}
                checked={item?.checked}
                onChange={() => {
                    setChecked(!isChecked)
                }}
            />

            <label className="text-white" htmlFor={item?.input_id}>
                {item?.label_text}
            </label>
            <svg
                className="absolute left-0 top-0 w-6 h-6 fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="stroke-gray-900"
                    d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                    strokeWidth="1.5"
                />
                {isChecked ? (
                    <path
                        className="stroke-gray-900"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                ) : null}
            </svg>
        </div>
    )
}

export default Checkbox
