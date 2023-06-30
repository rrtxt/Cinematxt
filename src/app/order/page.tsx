'use client'

import { useEffect, useState } from "react"
import MainLayout from "../layouts/main"
import axios from "axios"
import { useSession } from "next-auth/react"
import Order from "../models/order"
import { useRouter } from "next/navigation"

const OrderPage = () => {
    return (
        <div>
            <MainLayout>
                <OrderList/>
            </MainLayout>
        </div>
    )
}

const OrderList = () => {
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

    console.log(userId);
    console.log(orders)
    

    return (
        <div className="mt-5 mx-10">
            <h2 className="text-2xl font-medium">Order List</h2>
            <div>
                {/* {orders} */}
                {orders.map((item) => (
                    <div key={item.id}>{item.movie.title}</div>
                ))}
            </div>
        </div>
    )
}

export default OrderPage