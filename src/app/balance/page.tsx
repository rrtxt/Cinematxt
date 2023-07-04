'use client'

import { useSession } from "next-auth/react"
import MainLayout from "../layouts/main"
import { useRouter } from "next/navigation"
import TextField from "../components/TextField"
import { useEffect, useState } from "react"
import User from "../models/user"
import axios from "axios"
import { error } from "console"

const BalancePage = () => {
    return (
        <div>
            <MainLayout>
                <BalanecContent/>
            </MainLayout>
        </div>
    )    
}

const BalanecContent = () => {
    const router = useRouter()
    const session = useSession({
        required : true,
        onUnauthenticated() {
            router.push('/login')
        },
    })
    const [user, setUser] = useState<User>()
    const [topupAmount, setTopupAmount] = useState<number>(0)
    const [withdrawAmount, setWithdrawAmount] = useState<number>(0)
    const userId = session.data?.user?.id

    useEffect(() => {
        const fetchUser = async () => {
            try{
                const res = await axios.get(`/api/auth/user/${userId}`)
                const currUser = res.data.user
                setUser(currUser)
            } catch (e) {
                console.log(e);
            }
        }
        fetchUser()
    }, [userId])

    const TopUp = async () => {
        if(topupAmount <= 0){
            alert('Please fill top up amount!')
            return
        }
        try {
            const updatedBalance = user.balance + topupAmount
            const updatedUser : User = {
                ...user,
                balance : updatedBalance
            }
            await axios.patch(`/api/auth/user/${userId}`, updatedUser)
            setUser(updatedUser)
            alert('Top Up Success')
            setTopupAmount(0)
        } catch (e) {
            console.error(e)
            alert('Something went wrong!')
        }
    }

    const Withdraw = async () => {
        if(withdrawAmount <= 0){
            alert ('Please fill withdraw amount!')
            return
        }
        if(withdrawAmount > Math.min(user?.balance, 500000)){
            alert('You cannot withdraw at this amount!')
            return
        }
        try {
            const updatedBalance = user?.balance - withdrawAmount
            const updatedUser : User = {
                ...user,
                balance : updatedBalance
            }
            await axios.patch(`/api/auth/user/${userId}`, updatedUser)
            setUser(updatedUser)
            alert('Withdraw Success')
            setWithdrawAmount(0)
        } catch (e) {
            console.error(e)
            alert('Something went wrong!')
        }
    }

    return (
        <div>
            <div className="bg-black text-white mt-10 flex flex-col justify-center items-center">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <div className="mb-4">
                      <p className="text-lg">
                        <strong>Your Balance: </strong>Rp. {user?.balance}
                      </p>
                    </div>
                    <div>
                        <TextField
                          id='topup'
                          type='number'
                          label='Top-up'
                          className="mt-5"
                          name="username"
                          isRequired={true}
                          value={topupAmount}
                          onChange={(e) => setTopupAmount(parseInt(e.target.value))}
                        />
                        <div onClick={() => {TopUp()}} className="bg-blue-500 text-center mt-5 mx-auto w-72 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Top Up
                        </div>
                        <TextField
                          id='topup'
                          type='number'
                          label='Withdraw'
                          className="mt-5"
                          name="username"
                          isRequired={true}
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(parseInt(e.target.value))}
                        />
                        <div onClick={()=> {Withdraw()}} className="bg-yellow-500 text-center mt-5 mx-auto w-72 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                          Withdraw
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalancePage