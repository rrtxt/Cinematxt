import { PrismaClient } from "@prisma/client";
import { hash } from 'bcrypt'

class UserHandler{
    private static prisma =  new PrismaClient()

    static registerUser = async (email : string, username : string, age : number, password : string) => {
        let message
        const exists = await this.prisma.user.findUnique({
            where: {
                email : email
            }
        })

        if(exists) return 'Failed'

        const user = await this.prisma.user.create({
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