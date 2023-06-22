import Card from "@/app/components/card"
import Seat from "@/app/components/seat"
import MovieHandler from "@/app/handlers/movieHandler"
import formatDate from "@/app/helpers/dateFormat"
import MainLayout from "@/app/layouts/main"
import Movie from "@/app/models/movie"


const MoviePage = async ({ params } : {params : {id : string}}) => {
    const movieId = parseInt(params.id, 10)

    if(isNaN(movieId)){
        return <div>
            Invalid movie ID
        </div>
    }
    const movie = await MovieHandler.getMovieById(movieId)
    return (
        <MainLayout>
            <MovieDetail movie={movie}/>
            <MovieOrder movie={movie}/>
        </MainLayout>
    )
}

const MovieDetail = ({movie} : {movie : Movie|null}) => {
    const release_date = movie?.release_date
    const formattedDate = release_date? formatDate(release_date) : 'Undefined date'
    return (
        <div className="bg-slate-600">
            <div className="flex flex-col items-center py-10 sm:px-10 md:px-30 md:flex-row lg:px-60 xl:px-80 gap-20">
                {movie && <Card movie={movie}/>}
                <div>
                    <h1 className=" text-xl font-bold">Description</h1>
                    <p>
                        {movie?.description}
                    </p>
                    <div className="mt-5 flex gap-5">
                        <div className="bg-yellow-400 rounded-md p-2 text-black">
                            <h3>Age Rating</h3>
                            <h3>{movie?.age_rating}</h3>
                        </div>
                        <div className="p-2 bg-blue-600 rounded-md text-black">
                            <h3>Release Date</h3>
                            <h3>{formattedDate}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MovieOrder = ({movie} : {movie : Movie|null}) => {
    return (
        <div>
            <SeatSelection movie={movie}/>
        </div>
    )
}

const SeatSelection = ({movie} : {movie : Movie|null}) => {
    const data = Array.from({ length: 64 }, (_, index) => ({ id: index + 1, name: `${index + 1}` }));

    const rows = 8; // Number of rows
    const cols = 8; // Number of columns
  
    return (
        <div className="flex flex-col items-center md:flex-row md:items-start sm:justify-center gap-10 my-5">
            <div>
              {Array(rows)
                .fill(0)
                .map((_, rowIndex) => (
                  <div key={rowIndex} className="flex flex-row gap-3">
                    {data.slice(rowIndex * cols, rowIndex * cols + cols).map((item) => (
                      <div key={item.id} className="flex flex-col mb-3">
                       <Seat id={item.id}/> 
                      </div>
                    ))}
                  </div>
                ))}
            </div>
            <div className="bg-slate-500 w-72 sm:w-80 h-32 rounded-md p-3 flex flex-col justify-between">
                <span>Qty: 1</span>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Price: {movie?.ticket_price}</div>
                    <a href="#" className="mt-5">
                        <div className=" bg-yellow-400 p-2 text-black rounded-md hover:text-white hover:bg-yellow-500">Buy Ticket</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MoviePage