const BurgerIcon = () => {
    return (
        <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g strokeWidth="0" />
            <g
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.144"
            />

            <g>
                <path
                    d="M5 12H20"
                    className="stroke-indigo-300"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <path
                    d="M5 17H20"
                    className="stroke-indigo-300"
                    strokeWidth="3"
                    strokeLinecap="round"
                />{' '}
                <path
                    d="M5 7H20"
                    className="stroke-indigo-300"
                    strokeWidth="3"
                    strokeLinecap="round"
                />{' '}
            </g>
        </svg>
    )
}

export default BurgerIcon
