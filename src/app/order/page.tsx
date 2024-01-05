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
    const userId : number = user?.id ?? 0

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/order/user/${userId}`)
                const resOrders : Order[]= res.data.data
                // const unpaidOrders = resOrders.filter(order => order.isPaid === false)
                setOrder(resOrders)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData()
    },)

    return (
        <div className="mt-5 mx-10">
            <h2 className="text-2xl font-medium">Order List</h2>
            <div>
            <table className="mt-5 min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Movie Name</th>
                    <th className="px-4 py-2">Order Date</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Seat</th>
                    <th className="px-4 py-2">Paid</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="text-center">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{order.movie.title}</td>
                      <td className="px-4 py-2">{formatDate(new Date(order.order_Date))}</td>
                      <td className="px-4 py-2">{order.movie.ticket_price}</td>
                      <td className="px-4 py-2">{order.seat}</td>
                      <td className="px-4 py-2">{order.isPaid? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default OrderPage