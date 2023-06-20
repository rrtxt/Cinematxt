import MainLayout from "../layouts/main";
import Card from "../components/card";
import Movie from "../models/movie";
import Link from "next/link";

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

    data.map((value : Movie, key : string) => {
        movies.push(Movie.fromJSON(key, value))
    })

    return <div className="mt-5 mx-10">
        <h2 className="text-2xl font-medium">Movies List</h2>
        <div className="mt-5 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
            {movies.map((value, key) => (
                <Link key={key} 
                href={{ pathname: `/movie/${value.id}`, 
                        query: 
                            {movie : 'coba'}
                     }}>
                    <Card movie={value}/>
                </Link>
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
