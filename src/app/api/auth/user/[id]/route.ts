import UserHandler from "@/app/handlers/userHandler"
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