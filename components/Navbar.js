"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='relative bg-black text-white z-50'>
            <div className='flex justify-between items-center py-6 px-4 md:px-8'>

                
                <div className='text-xl md:text-2xl font-bold order-2 md:order-0'>
                    <Link href={"/"} className='tracking-tighter'>PATREON</Link>
                </div>

                <div className='hidden lg:flex items-center gap-1'>
                    <p className='hover:bg-white rounded-full px-4 py-2 hover:text-black transition-colors'>Creators</p>
                    <p className='hover:bg-white rounded-full px-4 py-2 hover:text-black transition-colors'>Features</p>
                    <p className='hover:bg-white rounded-full px-4 py-2 hover:text-black transition-colors'>Pricing</p>
                    <p className='hover:bg-white rounded-full px-4 py-2 hover:text-black transition-colors'>Resources</p>
                    <button className='px-4 py-2 ml-2 border border-zinc-700 rounded-full hover:text-black hover:bg-white transition-all'>Updates</button>
                </div>

                <div className='flex gap-3 items-center order-3'>
                    
                    <div className='hidden md:block'>
                        <input
                            className='px-4 py-2 border border-zinc-700 rounded-full focus:text-black focus:bg-white outline-none transition-all'
                            type="search"
                            placeholder='Find a creator'
                        />
                    </div>

                    <div className='flex items-center gap-2'>
                        <Show when="signed-out">
                            <SignInButton mode="modal">
                                <button className='hidden sm:block px-5 py-2 border border-zinc-700 rounded-full hover:text-black hover:bg-white transition-all'>
                                    Log in
                                </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className='px-5 py-2 bg-white text-black font-bold rounded-full hover:bg-zinc-200'>
                                    Get Started
                                </button>
                            </SignUpButton>
                        </Show>

                        <Show when="signed-in">
                            <Link href={"/dashboard"} className='hidden sm:block'>
                                <button className='px-5 py-2 bg-white text-black font-bold rounded-full'>Dashboard</button>
                            </Link>
                            <div className='flex items-center border border-zinc-700 rounded-full px-2 py-1'>
                                <UserButton
                                    showName={false} // Hidden name on mobile for space
                                    appearance={{
                                        elements: {
                                            userButtonBox: { flexDirection: "row-reverse" },
                                            userButtonOuterIdentifier: { fontWeight: "700", color: "white" }
                                        }
                                    }}
                                />
                            </div>
                        </Show>

                        {/* MOBILE MENU TOGGLE */}
                        <button
                            className='lg:hidden p-2 text-white'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <span className='text-2xl'>✕</span> // Close Icon
                            ) : (
                                <div className='space-y-1.5'>
                                    <div className='w-6 h-0.5 bg-white'></div>
                                    <div className='w-6 h-0.5 bg-white'></div>
                                    <div className='w-6 h-0.5 bg-white'></div>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className='lg:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 p-6 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4'>
                    <div className='flex flex-col gap-4 text-lg font-medium'>
                        <p className='hover:text-zinc-400'>Creators</p>
                        <p className='hover:text-zinc-400'>Features</p>
                        <p className='hover:text-zinc-400'>Pricing</p>
                        <p className='hover:text-zinc-400'>Resources</p>
                    </div>
                    <div className='pt-4 border-t border-zinc-800'>
                        <input
                            className='w-full px-4 py-3 bg-zinc-800 border-none rounded-xl text-white outline-none mb-4'
                            type="search"
                            placeholder='Find a creator'
                        />
                        <Show when="signed-out">
                            <SignInButton mode="modal">
                                <button className='w-full py-3 text-center border border-zinc-700 rounded-xl mb-3'>Log in</button>
                            </SignInButton>
                        </Show>
                        <Show when="signed-in">
                            <Link href="/dashboard" className='block w-full py-3 text-center bg-zinc-800 rounded-xl'>Dashboard</Link>
                        </Show>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar