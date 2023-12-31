import MainLayout from "../layouts/main";
import Card from "../components/card";
import Link from "next/link";
import MovieHandler from "../handlers/movieHandler";

const MoviesPage = () => {
    return <div>
        <MainLayout>
            <MoviesContent/>
        </MainLayout>
    </div>
};

const MoviesContent = async () => {
    const movies = await MovieHandler.getAllMovies()

    return <div className="mt-5 mx-10">
        <h2 className="text-2xl font-medium">Movies List</h2>
        <div className="mt-5 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
            {movies.map((value, key) => (
                <div className="mt-5" key={key}>
                <Link href={`/movie/${value.id}`}>
                    <Card movie={value}/>
                </Link>
                </div>
            ))}
        </div>
    </div>
}

export default MoviesPage
