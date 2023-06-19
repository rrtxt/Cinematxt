import MainLayout from "../layouts/main";
import Image from "next/image";
import Card from "../components/card";
import Movie from "../models/movie";

const MoviesPage = () => {
    return <div>
        <MainLayout>
            <MoviesContent/>
        </MainLayout>
    </div>
};

const MoviesContent = async () => {
    const data = await getMovies()
    const movies : Movie[] = []
    data.forEach((element : any)  => {
        movies.push(Movie.fromJSON(element))
    });
    return <div className="mt-5 mx-10">
        <h2 className="text-2xl font-medium">Movies List</h2>
        <div className="mt-5 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
            {movies.map((value, key) => (
                <h2 key={key}>{value.title}</h2>
            ))}
        </div>
    </div>
}



const getMovies = async () => {
    const res = await fetch('https://seleksi-sea-2023.vercel.app/api/movies')

    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default MoviesPage
