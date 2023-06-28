'use client'

import { useSession } from "next-auth/react"
import MainLayout from "../layouts/main"

const Dashboard = () => {
    const session = useSession()
    return (
        <div>
            <MainLayout>
                Dashboard {session?.data?.user?.name}
            </MainLayout>
        </div>
    )
}

export default Dashboard