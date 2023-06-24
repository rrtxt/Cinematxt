'use client'

import Link from "next/link"
import TextField from "../components/TextField"
import MainLayout from "../layouts/main"
import { FormEventHandler } from "react"

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
    const handleSubmit : FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        
    }
    return (
        <div className="flex items-center justify-center">
            <form className="border rounded-xl py-5 px-12 my-10">
                <h1 className="text-center">Register</h1>
            <TextField
                id='email'
                type='text'
                label='Username'
                className="mt-5"
                name="username"
                isRequired={true}
              />
            <TextField
                id='email'
                type='text'
                label='Email'
                className="mt-5"
                name="username"
                isRequired={true}
              />
            <TextField
                id='email'
                type='number'
                label='Age'
                className="mt-5"
                name="username"
                isRequired={true}
              />
            <TextField
                id='email'
                type='password'
                label='Password'
                className="mt-5"
                name="username"
                isRequired={true}
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