import Movie from "../models/movie";
import client from "@/lib/prisma";

class MovieHandler{
    static getAllMovies = async ()=> {
        const allMovies : Movie[] = await client.movie.findMany()
        return allMovies
    }

    static getMovieById = async (movieId : number) => {
        const movie : Movie|null = await client.movie.findUnique({
            where : {
                id : movieId
            },
            include : {
                order : true
            }
        })
        return movie
    }
}

export default MovieHandler