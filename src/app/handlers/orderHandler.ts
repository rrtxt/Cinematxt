import client from "@/lib/prisma"
import Order from "../models/order"
import { order } from "@prisma/client"

class OrderHandler {
    static getOrderbyUserId = async ({userId} : {userId : number}) => {
        const orders = await client.order.findMany({
            where : {
                userId
            },
            include: {
                user : true,
                movie : true
            }
        })

        return orders
    }

    static getOrderById = async ({id} : {id : number}) => {
        const order = await client.order.findUnique({
            where : {
                id
            },
            include : {
                movie : true,
                user : true
            }
        })

        return order
    }

    static addOrder = async ({seats, orderDate, userId, movieId} : 
        {seats : number[], orderDate : Date, userId : number, movieId : number }) => {
            try { 
                for (let index = 0; index < seats.length; index++) {
                    await client.order.create({
                        data: {
                            order_Date : orderDate,
                            seat : String(seats[index]),
                            movie: {
                                connect : {
                                    id : movieId
                                }
                            },
                            user : {
                                connect : {
                                    id : userId
                                }
                            },
                        }
                    })
                }
                return 'Success'
            } catch (e) {
                console.error(e)
                return 'Failed'
            }
    }

    static updateOrder = async ({id, updatedData} : {id : number, updatedData : order}) => {
        try{
            const updatedOrder = await client.order.update({
                where : {
                    id
                },
                data : {
                    isPaid : updatedData.isPaid
                }
            })
            return 'Success'
        } catch (e) {
            console.error(e)
            return 'Failed'
        }
    }

    static deleteOrder = async ({id} : {id : number}) => {
        await client.order.delete({
            where : {
                id
            }
        })
    }
}

export default OrderHandler