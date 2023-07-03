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
    const userId : number = user?.id

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/order/user/${userId}`)
                const resOrders : Order[]= res.data.data
                const unpaidOrders = resOrders.filter(order => order.isPaid === false)
                setOrder(unpaidOrders)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData()
    },)
    
    const PayOrder = async ({orderId} : {orderId : number}) => {
      const data = {
        userId,
        orderId,
      }
      try{
        const res = await axios.patch('/api/order', data)
          setTimeout(() => {
            router.push('/order')
          })
      } catch (e) {
        console.log(e);
        alert('Something went wrong!')
      }
    }

    const CancelOrder = async ({orderId} : {orderId : number}) => {
      try {
        const res = await axios.delete(`/api/order/${orderId}`)
        setTimeout(() => {
          router.push('/order')
        })
      } catch (e) {
        console.log(e)
        alert('Something went wrong!')
      }
    }

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
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2"></th>
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
                      <td className="px-4 py-2">
                        <button onClick={() => PayOrder({orderId : order.id})} className=" px-10 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                          Pay
                        </button>
                      </td>
                      <td className="px-4 py-2">
                        <button onClick={() => CancelOrder({orderId : order.id})} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
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