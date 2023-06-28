class User {
    id : number
    email : string
    username : string
    age : number
    balance : number|null
    
    constructor({id, email, username, age, balance = 0} : 
        {id : number, email : string, username : string, age : number, balance : number }){
            this.id = id
            this.email = email
            this.username = username
            this.age = age
            this.balance = balance
    }
}

export default User