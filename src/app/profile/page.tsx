'use client'

import { useSession } from "next-auth/react"
import MainLayout from "../layouts/main"
import User from "../models/user"

const ProfilePage = () => {

    return (
        <div>
            <MainLayout>
                <Profile/>
            </MainLayout>
        </div>
    )
}

const Profile = () => {
    const session = useSession()
    const user = session.data?.user
    return (
        <div className="bg-black text-white mt-10 flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Email:</strong> {user?.email}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Username:</strong> {user?.username}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Age:</strong> {user?.age}
          </p>
        </div>
      </div>
    </div>
        // <div className="flex justify-center m-10">
        //     <div className="border rounded-xl py-5 px-12 my-10">
        //         <h2 className="text-center text-2xl">Profile</h2>
        //         <div>
        //             Email : {session?.data?.user?.email}
        //         </div>
        //         <div>
        //             Username : {session?.data?.user?.username}
        //         </div>
        //         <div>
        //             Age : {session?.data?.user?.age}
        //         </div>
        //         <div>
        //             Balance : {session?.data?.user?.balance}
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProfilePage