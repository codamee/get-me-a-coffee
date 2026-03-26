"use client"
import React from 'react'
import Link from 'next/link'
import { UserButton, Show } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-white'>

      <div className="sidebar w-full md:w-64 md:h-screen flex flex-row md:flex-col justify-between items-center px-6 md:px-10 py-4 md:py-5 border-b md:border-b-0 md:border-r border-gray-200 sticky top-0 bg-white z-20">
        <div className='flex flex-row md:flex-col gap-4 md:gap-8 font-bold text-slate-700 items-center md:items-start'>
          <div className='flex items-center justify-center'>
            <img src="/logomark-animated.webp" alt="logo" width={35} />
          </div>

          <div className='flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors'>
            <img src="/svg/home.svg" alt="Home" width={18} />
            <Link href={"/"} className="hidden md:block">Home</Link>
          </div>

          <div className='flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors'>
            <img src="/svg/dash.svg" alt="Dashboard" width={18} />
            <p className="hidden md:block">Dashboard</p>
          </div>
        </div>

        <div className="login flex justify-center items-center">
          <Show when="signed-in">
            <UserButton
              showName={false} // Hidden name on mobile to save space
              appearance={{
                elements: {
                  userButtonBox: { flexDirection: "row-reverse" },
                  userButtonOuterIdentifier: { fontWeight: "700", color: "black" }
                }
              }}
            />
          </Show>
        </div>
      </div>

      <div className="main flex-1 h-screen overflow-y-auto bg-slate-50">
        <div className='w-full flex flex-col'>
          <div className="w-full h-48 md:h-67 shrink-0">
            <img src="/dashBg.jpg" alt="dash" className="w-full h-full object-cover" />
          </div>

          <div className='px-4 md:px-10 -mt-12 md:-mt-16 flex flex-col items-center'>
            <img
              src="/dashprofile.jpg"
              alt="profile"
              className='w-24 md:w-30 h-24 md:h-30 rounded-full border-4 border-white shadow-sm object-cover bg-white'
            />

            <div className='mt-4 flex flex-col items-center text-center gap-1'>
              <h1 className='text-2xl md:text-3xl font-bold'>Raw Coding</h1>
              <p className='text-slate-600'>creating Web Development Tutorials</p>
              <p className='text-gray-400 text-sm'>419 members • 1 post • $14525 raised</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-6 w-full max-w-6xl my-8'>

              <div className='flex-1 p-5 rounded-xl flex flex-col gap-4 h-80 bg-slate-200'>
                <p className='font-bold text-xl'>Supporters</p>
                <div className='flex flex-col gap-3 h-[90%] overflow-auto pr-2'>
                  {[1, 2, 3].map((i) => (
                    <p key={i} className='px-4 py-3 bg-slate-100 rounded-md text-sm shadow-sm'>
                      <span className='font-bold'>Shubam</span> donated $500 : "Lots of love bro "
                    </p>
                  ))}
                </div>
              </div>

              <div className='flex-1 bg-slate-200 p-5 rounded-xl flex flex-col gap-4 h-80'>
                <p className='font-bold text-xl'>Make a Payment</p>
                <div className='flex flex-col gap-2'>
                  <input className='px-4 py-2 w-full rounded-md outline-0 bg-slate-100 focus:ring-2 focus:ring-black transition-all' type="text" placeholder='Enter Name' />
                  <input className='px-4 py-2 w-full rounded-md outline-0 bg-slate-100 focus:ring-2 focus:ring-black transition-all' type="text" placeholder='Enter Message' />
                  <input className='px-4 py-2 w-full rounded-md outline-0 bg-slate-100 focus:ring-2 focus:ring-black transition-all' type="number" placeholder='Enter Amount' />
                  <button className='px-4 py-2 font-semibold text-white bg-black rounded-md hover:opacity-80 transition-opacity active:scale-95'>Submit</button>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {['10', '50', '100'].map((amt) => (
                    <button key={amt} className='flex-1 bg-black text-white font-semibold px-3 py-1.5 rounded-md text-sm hover:bg-slate-800 transition-colors'>
                      Pay ${amt}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard