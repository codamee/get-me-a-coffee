import React from 'react'
import Link from 'next/link'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-8 px-6 bg-black text-white cursor-pointer'>
            <div className='flex items-center'>
                <p className='hover:bg-white rounded-4xl px-6 py-3 hover:text-black'>Creators</p>
                <p className='hover:bg-white rounded-4xl px-6 py-3 hover:text-black'>Features</p>
                <p className='hover:bg-white rounded-4xl px-6 py-3 hover:text-black'>Pricing</p>
                <p className='hover:bg-white rounded-4xl px-6 py-3 hover:text-black'>Resources</p>
                <button className='px-6 py-3 mx-4 border rounded-4xl cursor-pointer hover:text-black hover:bg-white'>Updates</button>
            </div>

            <div className='w-1/5 text-2xl font-bold '>
                <Link href={"/"} >PATREON</Link>
            </div>
            <div className='flex gap-5 items-center'>
                <div>
                    <input className='px-6 py-3 border rounded-4xl  focus:text-black focus:bg-white' type="search" name="" id="" placeholder='find a creator' />
                </div>
                <Show when="signed-out">
                    <SignInButton >
                        <button className='px-6 py-3 border rounded-4xl cursor-pointer hover:text-black hover:bg-white'>
                            <Link href={"/login"} >Log in</Link>
                        </button>
                    </SignInButton>
                    <SignUpButton>
                        <button className='px-6 py-3 bg-white text-black cursor-pointer rounded-4xl'>Get Started</button>
                    </SignUpButton>
                </Show>
                <Show when="signed-in">
                    <UserButton />
                </Show>
            </div>
        </nav>
    )
}

export default Navbar