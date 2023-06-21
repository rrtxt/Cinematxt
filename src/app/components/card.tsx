import Link from "next/link";
import Movie from "../models/movie"

const Card = ({movie} : {movie : Movie}) => {
    console.log(movie.poster_url)
      const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${movie.poster_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'opacity 0.3s',
      };

      const hoverStyle = {
        opacity: '1',
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${movie.poster_url})`,
      };
      
      return (
        <div>
                <div className="group flex items-end justify-center w-60 h-80
                  bg-gray-500 rounded-xl mx-auto hover:" style={{ ...cardStyle, ...hoverStyle }}>
                  <h5 className="pb-2 text-center transition transform group-hover:-translate-y-5">
                    {movie.title}
                  </h5>
                </div>  
        </div>
      )
}

export default Card