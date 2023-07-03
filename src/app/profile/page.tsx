'use client'

import { useSession } from "next-auth/react"
import MainLayout from "../layouts/main"
import { useEffect, useState } from "react"
import axios from "axios"
import User from "../models/user"
import { useRouter } from "next/navigation"

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
  const router = useRouter()
    const session = useSession({
      required : true,
      onUnauthenticated() {
          router.push('/login')
      },
    })
    const [currentUser, setCurrentUser] = useState<User>()
    const user = session.data?.user
    const userId : number = user?.id

    useEffect(() => {
      const fetchData = async () => {
        try{
          const res = await axios.get(`/api/auth/user/${userId}`)
          const currUser = res.data.user
          setCurrentUser(currUser)
        } catch (e) {
          console.error(e);
        }
      }

      fetchData()
    })

    return (
    <div className="bg-black text-white mt-10 flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Email:</strong> {currentUser?.email}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Username:</strong> {currentUser?.username}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Balance:</strong> {currentUser?.balance}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Age:</strong> {currentUser?.age}
          </p>
        </div>
        <button className="bg-blue-500 mt-5 mx-auto w-72 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Top Up
        </button>
      </div>
    </div>
    )
}

export default ProfilePage