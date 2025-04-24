import { addresses, events, genres, reviews } from '@/constants'
import { faker, fakerEN, fakerDE, fakerZH_CN } from '@faker-js/faker'
import { useEffect } from 'react'

const Faker = () => {
    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const generateUsers = () => {
        const users = []
        const roles = ['user', 'moderator', 'operator'] //no admin
        for (let i = 0; i < 10; i++) {
            const user = {
               // id: i + 1,
               //avatar
                user_email: fakerEN.internet.email(),
                first_name: fakerEN.person.firstName(),
                last_name: fakerEN.person.lastName(),
                password: fakerEN.string.uuid(),
                role: roles[randomIntFromInterval(0, roles.length - 1)],
            }
            users.push(user)
        }
    }

    const genrateEvents = () => {
        const statuses = ['draft', 'open', 'sold_out', 'finished']
        const events = []
        for (let i = 0; i < 10; i++) {
            const event = {
            event_name: "Visions in Color",
            "description": "Immerse yourself in a vibrant collection that celebrates identity, culture, and emotion through bold strokes and brilliant palettes. This contemporary art exhibition invites you to see the world through diverse and dynamic perspectives.",
            "performer_name": "Alicia Torrez",
            "date": 1712611200000,
            "duration": 3,
            "price": 59,
            "capacity": 431,
            "status": "draft",
            "address": "69 Tsentralna Street, Chernihiv, Ukraine",
            "id": 7
            }
        }
        /*{
            
        },*/
    }
    useEffect(() => {
        

        

        

        //tickets

        function addRandomThings(entities) {
            return entities.map((item, index) => {
                return {
                    id: index + 1,
                    event_id: index + 1,
                    tag_id: index + 1,
                }
            })
        }
        console.log(addRandomThings(new Array(10).fill(1)))
    }, [])
    return <h1>Faker</h1>
}
export default Faker
