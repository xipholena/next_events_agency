import { addresses, events, genres, reviews } from '@/constants'
import { faker, fakerEN, fakerDE, fakerZH_CN } from '@faker-js/faker'
import { useEffect } from 'react'

const Faker = () => {
    useEffect(() => {
        function randomIntFromInterval(min, max) {
            // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        // USERS
        const users = []
        const roles = ['user', 'moderator', 'operator'] //no admin

        for (let i = 0; i < 10; i++) {
            const user = {
                //id: fakerEN.string.uuid(),
                id: i + 1,
                user_email: fakerEN.internet.email(),
                first_name: fakerEN.person.firstName(),
                last_name: fakerEN.person.lastName(),
                password: fakerEN.string.uuid(),
                role: roles[randomIntFromInterval(0, roles.length - 1)],
            }
            users.push(user)
        }

        //EVENTS
        const statuses = ['draft', 'open', 'sold_out', 'finished']

        //tickets

        function addRandomThings(entities) {
            return entities.map((item, index) => {
                return {
                    ...item,
                    id: index + 1,
                    status: 'pending',
                    event_id: index + 10,
                    user_id: index + 100,
                }
            })
        }
        console.log(addRandomThings(reviews))
    }, [])
    return <h1>Faker</h1>
}
export default Faker
