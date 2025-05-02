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
const RadioButton = ({ item }: Props) => {
    //todo up, server
    const [isChecked, setChecked] = useState<boolean>(false)
    return (
        <div className="relative pl-7 mt-3 sm:w-1/4 lg:w-full">
            <input
                className="opacity-0 absolute left-0 top-0 w-full h-full z-1"
                id={item?.input_id}
                type="radio"
                name={item?.input_name}
                value={item?.input_value}
                checked={item?.checked}
                onChange={() => {}}
            />
            <label className="text-white" htmlFor={item?.input_id}>
                {item?.label_text}
            </label>

            <svg
                className="absolute left-0 top-0 w-6 h-6 fill-white"
                viewBox="0 0 32 32"
                id="icon"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
                {isChecked ? (
                    <path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Z" />
                ) : null}
            </svg>
        </div>
    )
}

export default RadioButton
