const MovieDetail = ({params} : {params : {id : number}}) => {
    return (
        <div>
            {params.id}
        </div>
    )
}

export default MovieDetail