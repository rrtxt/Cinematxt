import UserHandler from "@/app/handlers/userHandler"
import User from "@/app/models/user"
import { NextResponse } from "next/server"

export async function GET(req : Request) {
    const userId = req.url.slice(req.url.lastIndexOf('/') + 1)
    const id = parseInt(userId)
    const user = await UserHandler.getUserById({id})
    if(!user){
        return NextResponse.json({message : 'Cannot Find User'}, {status : 404})
    } else {
        return NextResponse.json({user}, {status : 200})
    }
}

export async function PATCH(req : Request){
    const updatedUser = await req.json() 
    const userId = req.url.slice(req.url.lastIndexOf('/') + 1)
    const id = parseInt(userId)
    const user = await UserHandler.getUserById({id})
    if(!user){
        return NextResponse.json({message : 'Cannot Find User'}, {status : 404})
    }
    const updatedData : User = updatedUser
    const res = await UserHandler.updateUser({id, updatedData})
    if(res === 'Failed'){
        return NextResponse.json({message : 'Failed to update user'}, {status : 404})
    } else {
        return NextResponse.json({message : 'User data has been updated'}, {status : 200})
    }
}