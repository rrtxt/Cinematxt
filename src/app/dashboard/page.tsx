'use client'

import { useSession } from "next-auth/react"
import MainLayout from "../layouts/main"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

const Dashboard = () => {
    const session = useSession({
        required : true,
        onUnauthenticated() {
            toast('Please login!')
            router.push('/login')
        },
    })
    const router = useRouter()
    return (
        <div>
            <MainLayout>
                Dashboard {session?.data?.user?.username}
            </MainLayout>
        </div>
    )
}

export default Dashboard