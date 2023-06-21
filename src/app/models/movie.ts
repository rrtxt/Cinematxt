class Movie{
    id : number 
    title : string
    description : string
    release_date : Date
    poster_url : string
    age_rating : number
    ticket_price : number

    constructor(id : number, title : string, description : string,
         release_date : Date, poster_url : string,age_rating : number, ticket_price : number){
        this.id = id
        this.title = title
        this.description = description
        this.release_date = release_date
        this.poster_url = poster_url
        this.age_rating = age_rating
        this.ticket_price = ticket_price
    }

    static fromJSON(id : number, json : any): Movie{
        return new Movie(
            id,
            json.title,
            json.description,
            new Date(json.release_date),
            json.poster_url,
            json.age_rating,
            json.ticket_price
        )
    }
}

export default Movie