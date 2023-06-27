import client from "@/lib/prisma"
import { hash } from "bcrypt"
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
}

export default UserHandler