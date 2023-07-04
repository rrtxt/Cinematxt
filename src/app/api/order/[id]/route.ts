import OrderHandler from "@/app/handlers/orderHandler";
import { NextResponse } from "next/server";

export async function DELETE(req : Request){
    const orderId = req.url.slice(req.url.lastIndexOf('/') + 1)
    const id = parseInt(orderId)
    const res = await OrderHandler.deleteOrder({id})
    if(res === 'Failed'){
        return NextResponse.json({message : 'Order is not found'}, {status : 404})
    } else {
        return NextResponse.json({message : 'Success delete order'}, {status : 200})
    }
} 