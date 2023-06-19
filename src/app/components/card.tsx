import Movie from "../models/movie"

const Card = ({movie} : {movie : Movie}) => {
    return <div className="mt-5 flex items-end justify-center w-60 h-72 bg-gray-500 rounded-xl hover:bg-slate-600 mx-auto">
        <h5 className="pb-2">ini Judul</h5>
    </div>
}

export default Card