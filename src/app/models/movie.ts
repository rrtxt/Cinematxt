class Movie{
    id : string 
    title : string
    description : string
    release_date : Date
    poster_url : string
    price : number

    constructor(id : string, title : string, description : string,
         release_date : Date, poster_url : string, price : number){
        this.id = id
        this.title = title
        this.description = description
        this.release_date = release_date
        this.poster_url = poster_url
        this.price = price
    }

    static fromJSON(json : any): Movie{
        return new Movie(
            json.id,
            json.title,
            json.description,
            new Date(json.release_date),
            json.poster_url,
            json.price
        )
    }
}

export default Movie