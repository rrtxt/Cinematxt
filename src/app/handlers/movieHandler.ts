import prisma from "@/lib/prisma";
import Movie from "../models/movie";

class MovieHandler{
    static getAllMovies = async ()=> {
        const allMovies : Movie[] = await prisma.movie.findMany()
        return allMovies
    }

    static getMovieById = async (movieId : number) => {
        const movie : Movie|null = await prisma.movie.findUnique({
            where : {
                id : movieId
            }
        })
        return movie
    }
}

export default MovieHandler