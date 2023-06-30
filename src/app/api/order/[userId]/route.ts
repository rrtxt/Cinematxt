import OrderHandler from "@/app/handlers/orderHandler"
import { NextResponse } from "next/server"

export async function GET(req : Request){
    const { userId } = await req.json()
    const res = await OrderHandler.getOrderbyUserId({userId})
    return NextResponse.json({data : res}, {status : 200})
}