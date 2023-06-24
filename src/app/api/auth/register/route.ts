import UserHandler from "@/app/handlers/userHandler"
import { NextResponse } from "next/server"

export async function POST(req : Request) {
    const {username, email, age, password} = await req.json()
    const res = await UserHandler.registerUser(email, username, age, password)
    if (res === 'Success') {
        return NextResponse.json({res})
    } 
    else {
        return NextResponse.json({error : 'User already exist'}, {status : 400})
    } 
}