import Movie from "./movie"
import User from "./user"

class Order {
    id : number
    orderDate : Date
    user : User
    movie : Movie
    seat : string
    isPaid : boolean

    constructor({id, orderDate, user, movie, seat, isPaid = false} : 
        {id : number, orderDate : Date, user : User, movie : Movie, seat : string, isPaid : boolean}){
        this.id = id
        this.orderDate = orderDate
        this.user = user
        this.movie = movie
        this.seat = seat
        this.isPaid = isPaid
    }
}

export default Order