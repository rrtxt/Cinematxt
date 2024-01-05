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

    
    updateUserWithDefaults(user: Partial<User>): User {
        return new User({
            id: user.id ?? 0,
            balance: user.balance ?? 0,
            email: user.email ?? '',
            username: user.username ?? '',
            age: user.age ?? 0,
            // Add other fields as needed
    })
}
}

export default User