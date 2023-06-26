'use client'

import Link from "next/link"
import TextField from "../components/TextField"
import MainLayout from "../layouts/main"
import { FormEventHandler, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-toastify"

const RegisterPage = () => {
    return (
        <div>
            <MainLayout>
                <RegisterForm/>
            </MainLayout>
        </div>
    )
}

const RegisterForm = () => {
    const [data, setData] = useState({
        email : '',
        username : '',
        password : '',
        age : 0
    })
    const router = useRouter()

    const handleRegister : FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/auth/register', data)
            toast.success('Account created! Redirecting to login...')
            setTimeout(() => {
                router.push('login')   
            });
        } catch (e) {
            toast.error('Something went wrong!')
        }
    }

    return (
        <div className="flex items-center justify-center">
            <form className="border rounded-xl py-5 px-12 my-10" method="POST" onSubmit={handleRegister}>
                <h1 className="text-center">Register</h1>
            <TextField
                id='email'
                type='text'
                label='Username'
                className="mt-5"
                name="username"
                isRequired={true}
                value={data.username}
                onChange={(e) => setData({...data, username : e.target.value})}
              />
            <TextField
                id='email'
                type='text'
                label='Email'
                className="mt-5"
                name="email"
                isRequired={true}
                value={data.email}
                onChange={(e) => setData({...data, email : e.target.value})}
              />
            <TextField
                id='email'
                type='number'
                label='Age'
                className="mt-5"
                name="age"
                isRequired={true}
                value={data.age}
                onChange={(e) => setData({...data, age : parseInt(e.target.value)})}
              />
            <TextField
                id='email'
                type='password'
                label='Password'
                className="mt-5"
                name="password"
                isRequired={true}
                value={data.password}
                onChange={(e) => setData({...data, password : e.target.value})}
              />
            <button className="mt-10 mb-5 px-24 py-2 rounded-md bg-yellow-500 hover:bg-yellow-700">
                Submit
            </button>
            <div className="text-sm text-center">Already have account? 
                    <Link href={'/login'} className="text-yellow-500 hover:text-yellow-600"> Login Now</Link> 
            </div>
            </form>
        </div>
    )
}

export default RegisterPage