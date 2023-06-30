import client from "@/lib/prisma"

class OrderHandler {
    static getOrderbyUserId = async ({userId} : {userId : number}) => {
        const orders = await client.order.findMany({
            where : {
                userId
            }
        })

        return orders
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
}

export default OrderHandler