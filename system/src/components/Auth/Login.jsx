import React, {  useEffect, useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'
// import {  setLocalStorage } from '../../utils/LocalStorage'

const Login = ({ handleLogin }) => {

    useEffect(() => {
        setLocalStorage()

        // console.log(getLocalStorage())
    }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-emerald-200 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-emerald-700 mb-8">Welcome Back 👋</h2>

                <form
                    onSubmit={(e) => submitHandler(e)}
                    className="space-y-6"
                >
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // required 
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-6 py-3 border-2 border-emerald-400 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // required 
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-6 py-3 border-2 border-emerald-400 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition duration-300 shadow-md"
                    >
                        Log In
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-500">
                    Don't have an account? <span className="text-emerald-700 font-semibold cursor-pointer hover:underline">Sign Up</span>
                </p>
            </div>
        </div>

    )
}

export default Login