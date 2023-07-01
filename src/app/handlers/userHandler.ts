import client from "@/lib/prisma"
import { hash } from "bcrypt"
import User from "../models/user"
class UserHandler{
    static registerUser = async ({email, username, age, password} : {email : string, username : string, age : number, password : string}) => {
        const exists = await client.user.findUnique({
            where: {
                email : email
            }
        })

        if(exists) return 'Failed'
        await client.user.create({
            data : { 
                email,
                username,
                age,
                balance : 0,
                password : await hash(password, 10)
            }
        })
        return 'Success'
    }
    
    static getUserById = async ({id} : {id : number}) => {
        const user : User|null = await client.user.findUnique({
            where : {
                id
            }
        })
        return user
    }

    static updateUser = async ({id, updatedData} : {id : number, updatedData : User}) => {
        await client.user.update({
            where : {
                id
            },
            data : updatedData
        })
    }
}

export default UserHandler