import DisplayEntities from "@/components/display-entities"

const EntitiesPage = () => {
    return (
        <div className='flex max-w-full'>
            <DisplayEntities name='users'/>
            <DisplayEntities name='events'/>
            <DisplayEntities name='tickets'/>
        </div>
    )
}

export default EntitiesPage