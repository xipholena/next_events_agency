import Head from 'next/head'
import SiteHeader from '../site-header'
import SearchFilter from '../search-filters'

export const siteTitle = 'Next.js Workcation'

export default function Layout({
    children,
}: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Tailwind + Next.js" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className=" bg-gray-200 antialiased xl:h-screen">
                <SiteHeader />
                <div className="xl:flex xl:h-full">
                    <SearchFilter />
                    <main className="py-6">{children}</main>
                </div>
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
            </div>
        </>
    )
}
