import SearchIcon from './search-svg'

const SearchBar = ({ isinHeader }: { isinHeader?: boolean }) => {
    return (
        <div
            className={`relative  max-w-xs w-full ${isinHeader ? 'custom-container' : ''}`}
        >
            <input
                placeholder="Search by keywords"
                type="text"
                className="pl-10 pr-4 py-2 max-w-xs w-full  border border-transparent bg-gray-900 rounded-lg focus:outline-none focus:bg-white focus:text-gray-900 xl:bg-gray-200 xl:focus:text-gray-300 xl:text-gray-900 xl:focus:bg-white xl:focus:text-gray-900 xl:focus:border xl:focus:border-gray-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 xl:left-4">
                <SearchIcon />
            </div>
        </div>
    )
}

export default SearchBar
