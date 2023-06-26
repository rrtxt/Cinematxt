import prisma from "@/lib/prisma"

class UserHandler{
    static registerUser = async ({email, username, age, password} : {email : string, username : string, age : number, password : string}) => {
        const exists = await prisma.user.findUnique({
            where: {
                email : email
            }
        })

        if(exists) return 'Failed'
        const user = await prisma.user.create({
            data : { 
                email,
                username,
                age,
                balance : 0,
                password : password
            }
        })

        return 'Success'
    }
}

export default UserHandler