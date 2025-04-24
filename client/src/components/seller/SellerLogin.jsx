import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const SellerLogin = () => {
    const { setIsSeller, navigate } = useAppContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = (event) => {
        event.preventDefault()
        setIsSeller(true)
        navigate("/seller")
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
            <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 '>
                <p className='text-2xl font-medium m-auto'><span className='text-[#4fbf8b]'>Seller</span> Login</p>
                <div className='w-full'>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email}
                        type="email" placeholder="Type Here Your Email" className='border border-gray-200 rounded w-full p-2 mt-1 outline-[#4fbf8b]' required />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password}
                        type="password" placeholder="Type Here Your Password" className='
                    border border-gray-200 rounded w-full p-2 mt-1 outline-[#4fbf8b]' required />
                </div>
                <button className='bg-[#4fbf8b] text-white w-full py-2 rounded-md cursor-pointer'>
                    Login
                </button>
            </div>
        </form>
    )
}

export default SellerLogin
