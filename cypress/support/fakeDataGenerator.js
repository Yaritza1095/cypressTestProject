import {faker} from '@faker-js/faker'
class FakeDataGenerator{
    getRandomFirstName(){
        return faker.person.firstName()
    }
    getRandomLastName(){
        return faker.person.lastName()
    }
    getRandomEmail(){
        return faker.internet.email()
    }
    getRandomPhoneNumber(){
        return faker.phone.number()
    }
}
module.exports = FakeDataGenerator
