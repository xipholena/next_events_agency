import { useState } from 'react'
import Checkbox from './checkbox'
import FilterIcon from './filter-svg'
import RadioButton from './radio-button'
import SearchIcon from './search-svg'
import Select from './select'
import SearchBar from './search-bar'

const propertyType = [
    {
        input_id: 'house',
        input_name: 'propertyType',
        input_value: 'house',
        label_text: 'House',
        checked: true,
    },
    {
        input_id: 'apartment',
        input_name: 'propertyType',
        input_value: 'apartment',
        label_text: 'Apartment',
    },
    {
        input_id: 'loft',
        input_name: 'propertyType',
        input_value: 'loft',
        label_text: 'Loft',
    },
    {
        input_id: 'townhouse',
        input_name: 'propertyType',
        input_value: 'townhouse',
        label_text: 'Townhouse',
    },
]
const amenities = [
    {
        input_id: 'balcony',
        input_name: 'balcony',
        input_value: '',
        label_text: 'Balcony',
    },
    {
        input_id: 'airConditioning',
        input_name: 'airConditioning',
        input_value: '',
        label_text: 'Air Conditioning',
    },
    {
        input_id: 'pool',
        input_name: 'pool',
        input_value: '',
        label_text: 'Pool',
        checked: true,
    },
    {
        input_id: 'beach',
        input_name: 'beach',
        input_value: '',
        label_text: 'Beach',
    },
    {
        input_id: 'petFriendly',
        input_name: 'petFriendly',
        input_value: '',
        label_text: 'Pet Friendly',
    },
    {
        input_id: 'kidFriendly',
        input_name: 'kidFriendly',
        input_value: '',
        label_text: 'Kid Friendly',
    },
    {
        input_id: 'parking',
        input_name: 'parking',
        input_value: '',
        label_text: 'Parking',
    },
]
const bedrooms = {
    label_text: 'Bedrooms',
    select_id: 'bedrooms',
    select_name: 'bedrooms',
    options: [4],
}
const bathrooms = {
    label_text: 'Bathrooms',
    select_id: 'bathrooms',
    select_name: 'bathrooms',
    options: [2],
}
const priceRange = {
    label_text: 'Price Range',
    select_id: 'priceRange',
    select_name: 'priceRange',
    options: ['Up to $2000 /wk'],
}

const SearchFilter = () => {
    const [isOpen, setIsopen] = useState<boolean>(false)
    return (
        <section className="bg-gray-800 xl:max-w-2xs ">
            <div className="custom-container flex gap-x-4 justify-between py-3 text-white xl:hidden">
                <SearchBar />

                <button
                    onClick={() => setIsopen(!isOpen)}
                    className={`${isOpen ? 'bg-gray-900' : 'bg-gray-600'} flex items-center  rounded-lg shadow px-3 border-2 border-transparent hover:bg-gray-400 focus:outline-none, focus:border-2 focus:border-indigo-300 xl:hidden`}
                    type="button"
                >
                    <FilterIcon />
                    <span className="ml-1 text-white font-medium">Filters</span>
                </button>
            </div>

            <form
                className={`${isOpen ? '' : 'hidden'} xl:block xl:h-full xl:flex xl:flex-col xl:justify-between xl:relative xl:w-2xs`}
            >
                <div className="lg:flex xl:flex-col">
                    <div className="custom-container border-t border-gray-900 lg:w-full">
                        <fieldset className="sm:flex sm:gap-4 lg:flex-wrap">
                            <div className="flex justify-between gap-4 mt-4 sm:w-full lg:mt-3">
                                <Select description={bedrooms} />
                                <Select description={bathrooms} />
                            </div>
                            <div className="mt-4 sm:w-full">
                                <Select description={priceRange} />
                            </div>
                        </fieldset>
                    </div>
                    <div className="custom-container mt-4 pt-3 border-t border-gray-900 lg:mt-0 lg:w-full lg:border-l">
                        <fieldset>
                            <legend className="text-sm font-semibold text-gray-500">
                                Property type
                            </legend>
                            <div className="mt-3  sm:flex lg:flex-col">
                                {propertyType.map((item, index) => (
                                    <RadioButton key={index} item={item} />
                                ))}
                            </div>
                        </fieldset>
                    </div>
                    <div className="custom-container mt-4 py-3 border-t border-gray-900 lg:mt-0 lg:w-full lg:border-l ">
                        <fieldset>
                            <legend className="text-sm font-semibold text-gray-500">
                                Amenities
                            </legend>

                            <div className="mt-3 sm:flex sm:flex-wrap">
                                {amenities?.map((item, index) => (
                                    <Checkbox key={index} item={item} />
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div className="custom-container bg-gray-900 px-4 py-4 sm:text-right xl:sticky bottom-0">
                    <button
                        className="block w-full px-4 py-2 rounded-lg bg-indigo-500 font-semibold text-white hover:bg-indigo-400 hover:cursor-pointer
                            sm:inline-block sm:w-auto xl:w-full"
                        type="submit"
                    >
                        Update results
                    </button>
                </div>
            </form>
        </section>
    )
}
export default SearchFilter
