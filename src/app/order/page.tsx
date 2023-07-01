'use client'

import { useEffect, useState } from "react"
import MainLayout from "../layouts/main"
import axios from "axios"
import { useSession } from "next-auth/react"
import Order from "../models/order"
import { useRouter } from "next/navigation"
import formatDate from "@/helpers/dateFormat"

const OrderPage = () => {
    return (
        <div>
            <MainLayout>
                <OrderLists/>
            </MainLayout>
        </div>
    )
}

const OrderLists = () => {
    const [orders, setOrder] = useState<Order[]>([])
    const router = useRouter()
    const session = useSession({
        required : true, 
        onUnauthenticated() {
            router.push('/login')
        },})

    const user = session.data?.user
    const userId = user?.id

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/order/${userId}`)
                setOrder(res.data.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData()
    }, [userId])

    orders.forEach((order) => {
        console.log(new Date(order.order_Date))
    })
    

    return (
        <div className="mt-5 mx-10">
            <h2 className="text-2xl font-medium">Order List</h2>
            <div>
                <table>
                    <thead>
                      <tr>
                        <th>Index</th>
                        <th>Movie Name</th>
                        <th>Order Date</th>
                        <th>Price</th>
                        <th>Seat</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{order.movie.title}</td>
                          <td>{formatDate(new Date(order.order_Date))}</td>
                          <td>{order.movie.ticket_price}</td>
                          <td>{order.seat}</td>
                          <td>
                            <button>
                              Pay
                            </button>
                          </td>
                          <td>
                            <button>
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default OrderPage