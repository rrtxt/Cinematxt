import OrderHandler from "@/app/handlers/orderHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : Request){
    const { seats, movieId, userId  } = await req.json()
    const res = await OrderHandler.addOrder({seats : seats, orderDate : new Date(), movieId : movieId, userId : userId }) 
    if(res === 'Failed'){
        return NextResponse.json({message : 'Something went wrong!'}, {status : 404})
    } else{
        return NextResponse.json({message : 'Success'})
    }

}