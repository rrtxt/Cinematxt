import OrderHandler from "@/app/handlers/orderHandler"
import { NextResponse } from "next/server"

export async function GET(req : Request){
    const userId = req.url.slice(req.url.lastIndexOf('/') + 1)
    const id = parseInt(userId)
    const res = await OrderHandler.getOrderbyUserId({userId : id})
    return NextResponse.json({data : res}, {status : 200})
}