'use client'

import Link from "next/link"
import TextField from "../components/TextField"
import MainLayout from "../layouts/main"
import { useState } from "react"

const LoginPage = () => {
    return (
        <div>
            <MainLayout>
                <LoginForm/>
            </MainLayout>
        </div>
    )
}

const LoginForm = () => {
    const [data, setData] = useState({
        email : '',
        password : ''
    })
    return (
        <div className="flex items-center justify-center">
            <form className="border rounded-xl py-5 px-12 my-10">
                <h1 className="text-center">Login</h1>
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
                <div className="text-sm text-center">Doesnt have account? 
                    <Link href={'/register'} className="text-yellow-500 hover:text-yellow-600"> Register Now</Link> 
                </div>
            </form>
        </div>
    )
}

export default LoginPage