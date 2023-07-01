import Movie from "./movie"
import User from "./user"

class Order {
    id : number
    order_Date : Date
    user : User
    movie : Movie
    seat : string
    isPaid : boolean

    constructor({id, order_Date, user, movie, seat, isPaid = false} : 
        {id : number, order_Date : Date, user : User, movie : Movie, seat : string, isPaid : boolean}){
        this.id = id
        this.order_Date = order_Date
        this.user = user
        this.movie = movie
        this.seat = seat
        this.isPaid = isPaid
    }
}

export default Order