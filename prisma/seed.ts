import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '2cd58a84-902a-481d-9d77-d2eb66a397ed',
            title: 'My first event',
            details: 'This is my first event',
            slug: 'my-first-event',
            maximumAttendees: 10,
        }
    })
}

seed().then(() => {
    console.log('Seed complete')
    prisma.$disconnect()
})