import OrderHandler from "@/app/handlers/orderHandler";
import UserHandler from "@/app/handlers/userHandler";
import client from "@/lib/prisma";
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

export async function PATCH(req : Request){
    const { userId, orderId } = await req.json()
    const order = await OrderHandler.getOrderById({id : orderId})
    const user = order?.user
    if(!order || !user){
        return NextResponse.json({message : 'Failed'}, {status : 404})
    }
    //@ts-expect-error
    const remainingBalance = user?.balance - order?.movie.ticket_price
    await OrderHandler.updateOrder({
        id : orderId,
        updatedData : {
            ...order,
            isPaid : true
        }
    })
    await UserHandler.updateUser({
        id : userId, 
        updatedData : {
            ...user,
            balance : remainingBalance
        }
    })

    return NextResponse.json({message : 'Success'}, {status : 200})
}

