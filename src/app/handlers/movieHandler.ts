import { PrismaClient } from "@prisma/client";
import Movie from "../models/movie";

class MovieHandler{
    private static prisma = new PrismaClient()
    
    static getAllMovies = async ()=> {
        const allMovies : Movie[] = await this.prisma.movie.findMany()
        return allMovies
    }

    static getMovieById = async (movieId : number) => {
        const movie : Movie|null = await this.prisma.movie.findUnique({
            where : {
                id : movieId
            }
        })
        return movie
    }
}

export default MovieHandler