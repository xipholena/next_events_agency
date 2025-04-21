import Image from 'next/image'
import StarIcon from '@/components/star-svg'

const rate = 4
const stars = new Array(5).fill('')

const Card = () => {
    return (
        <>
            <div className="mt-5 aspect-6x5">
                <Image
                    className=" rounded-lg shadow-md"
                    src="https://images.unsplash.com/photo-1656139789481-433ed92df29a?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="house photo"
                    fill={true}
                />
            </div>
            <div className="relative px-4 -top-16">
                <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
                    <p>
                        <span className="px-2 py-1 leading-none bg-teal-200 rounded-full text-teal-800 font-semibold uppercase tracking-wide text-xs">
                            Plus
                        </span>
                        <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                            &nbsp; 3 beds &bull; 2 baths
                        </span>
                    </p>
                    <h4 className="mt-1 text-gray-900 font-semibold text-lg">
                        Modern home in city center
                    </h4>
                    <p className="mt-1">
                        <span className="text-gray-900">$1,400 &nbsp;</span>
                        <span className="ml-1 text-sm text-gray-600">/wk</span>
                    </p>
                    <div className=" flex items-center mt-2">
                        <div className="flex mr-2">
                            {stars?.map((item, index) => {
                                return (
                                    <StarIcon
                                        key={index}
                                        index={index}
                                        rate={rate}
                                    />
                                )
                            })}
                        </div>
                        <p className="text-sm text-gray-600">34 reviews</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
