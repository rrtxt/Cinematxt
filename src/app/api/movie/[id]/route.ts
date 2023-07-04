import MovieHandler from "@/app/handlers/movieHandler"
import { NextResponse } from "next/server"

export async function GET(req : Request){
    const movieId = req.url.slice(req.url.lastIndexOf('/') + 1)
    const id = parseInt(movieId)
    const movie = await MovieHandler.getMovieById(id)
    if(!movie){
        return NextResponse.json({message : 'Movie not found'}, {status : 404})
    } else {
        return NextResponse.json({movie}, {status : 200})
    }
}