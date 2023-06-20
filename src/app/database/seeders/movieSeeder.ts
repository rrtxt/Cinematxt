import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seedData() {
    const data = await fetch('https://seleksi-sea-2023.vercel.app/api/movies')
    const movies = await data.json()

    try{
        await Promise.all(
            movies.map(async (movie : any) => {
              const formattedDate = new Date(movie.release_date)// Format the date string
              await prisma.movie.create({
                data: {
                    title: movie.title,
                    description: movie.description,
                    release_date: formattedDate,
                    age_rating : movie.age_rating,
                    poster_url: movie.poster_url,
                    ticket_price : movie.ticket_price
                },
              });
            })
          );
        console.info('Seeding complete')
    } catch (e){
        console.error('Error while seeding data:', e)
    } finally{
        await prisma.$disconnect()
    }
}

seedData()