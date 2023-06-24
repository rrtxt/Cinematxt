import TextField from "../components/TextField"
import MainLayout from "../layouts/main"

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
    return (
        <div className="flex items-center justify-center">
            <form className="border rounded-xl py-5 px-12 my-10">
                <h1 className="text-center">Login</h1>
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
                type='text'
                label='Password'
                className="mt-5"
                name="username"
                isRequired={true}
              />
            <TextField
                id='email'
                type='text'
                label='Confirm Password'
                className="mt-5"
                name="username"
                isRequired={true}
              />
            <button className="mt-10 px-24 py-2 rounded-md bg-yellow-500 hover:bg-yellow-700">
                Submit
            </button>
            </form>
        </div>
    )
}

export default LoginPage