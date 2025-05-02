import Image from 'next/image'
import Layout from '@/src/components/layout/layout'
import Link from 'next/link'

const SplashPage = () => {
    return (
        <Layout>
            <div className="max-w-sm mx-auto sm:max-w-xl lg:max-w-full lg:relative lg:min-h-screen">
                {/* relative since fill={true} comes with absolute added by JS*/}
                <div>
                    <div className=" relative mt-8 w-full h-auto min-h-48 sm:h-56 lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:h-full  lg:mt-0 ">
                        <Image
                            className="object-cover  sm:object-center rounded-lg shadow-xl lg:shadow-none lg:rounded-none lg:object-left"
                            src="/img/beach-work.jpg"
                            alt="girl on the beach working with laptop"
                            fill={true}
                        />
                        <svg
                            className="hidden lg:block absolute inset-y-0 left-0 h-full w-16 z-1 text-gray-200 "
                            preserveAspectRatio="none"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polygon
                                fill="currentColor"
                                points="0,0 0,100, 100,0"
                            />
                        </svg>
                    </div>
                </div>

                <div className="lg:w-7/12 lg:pl-12 lg:pr-8">
                    <h1 className="mt-8 text-3xl sm:text-4xl font-semibild leading-tight">
                        <span className="text-gray-900">
                            You can work from anywhere.
                        </span>
                        <br className="hidden sm:inline" />
                        <span className="text-indigo-500">
                            Take advantage of it
                        </span>
                    </h1>
                    <p className="mt-4 text-grey-600 text-xl">
                        Workcation helps you find work-friendly rentals in
                        beautiful locations so you can enjoy some nice weather
                        even when you&apos;re not on vacation.
                    </p>
                    <div className="mt-6 px-5 py-3 inline-block rounded-lg bg-indigo-500 shadow-lg text-white font-semibold tracking-wide uppercase hover:bg-indigo-400">
                        <Link href="">Book your escape</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default SplashPage
