import UserHandler from "@/app/handlers/userHandler";
import { NextResponse } from "next/server";

export async function POST(req : NextResponse) {
    const { username, email, age, password } = await req.json()
    const res = await UserHandler.registerUser({username, email, age, password})
    if(res === 'Failed') 
    {
        return NextResponse.json({message : 'User already exists'}, {status : 404 })
    }
    else{
        return NextResponse.json({message : 'Success'})
    }
}