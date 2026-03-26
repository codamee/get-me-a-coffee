"use client"
import React from 'react'
import Link from 'next/link'
import { UserButton, Show } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div className='h-dvh flex overflow-hidden   '>
      <div className="sidebar h-full flex flex-col justify-between items-center px-10 py-5 border-r border-r-gray-200 ">
        <div className='flex flex-col gap-4 font-bold text-slate-700'>
          <div className='flex items-end justify-center'>
            <img src="/logomark-animated.webp" alt="logo" width={40} />
            {/* <p className='font-bold'>ATREON</p> */}
          </div>
          <div className='flex gap-2 px-4 py-2 rounded-xl hover:bg-mauve-100'>
            <img src="/svg/home.svg" alt="Home" width={20} />
            <Link href={"/"}><p>Home</p></Link>
          </div>
          <div className='flex gap-2 px-4 py-2 rounded-xl hover:bg-mauve-100 cursor-pointer'>
            <img src="/svg/dash.svg" alt="Dashboard" width={20} />
            <p>Dashboard</p>
          </div>
        </div>
        <div className="login flex justify-center  items-center border px-4 py-2 rounded-4xl hover:bg-mauve-100">
          <Show when="signed-in">
            <UserButton
              showName={true}
              appearance={{
                elements: {
                  userButtonBox: {
                    flexDirection: "row-reverse",
                  },
                  userButtonOuterIdentifier: {
                    fontWeight: "700",
                    color: "black",
                  }
                }
              }}
            />
          </Show>
        </div>
      </div>
      <div className="main h-full flex-1">
        <div className='w-full flex flex-col gap-2  relative'>
          <img src="/dashBg.jpg" alt="dash" className="w-full h-67 object-cover" />
          <div className='w-full flex flex-col gap-2 items-center justify-center absolute top-50'>
            <img src="/dashprofile.jpg" alt="profile" className='w-30 rounded-[10rem] border border-gray-700' />
            <div className='flex flex-col items-center gap-2'>
              <p className='text-3xl font-bold'>Raw Coding</p>
              <p>creating Web Development Tutorials</p>
              <p className='text-gray-400 text-sm'>419 members . 1 post . $14525 raised</p>
            </div>
            <div className='flex justify-around items-center p-4 gap-4 w-full'>
              <div className='p-4 rounded-md w-full flex flex-col gap-4 h-80 bg-slate-200 '>
                <p className='font-bold text-xl'>Supporters</p>
                <div className='flex flex-col  gap-3 h-[90%] overflow-auto'>
                  <p className='px-4 py-2 bg-slate-100 rounded-md'>Shubam donated $500 : "Lots of love bro "</p>
                  <p className='px-4 py-2 bg-slate-100 rounded-md'>Shubam donated $500 : "Lots of love bro "</p>
                  <p className='px-4 py-2 bg-slate-100 rounded-md'>Shubam donated $500 : "Lots of love bro "</p>

                </div>
              </div>
              <div className='bg-slate-200 p-4 rounded-md w-full flex flex-col gap-5 h-80'>
                <p className='font-bold text-xl'>Make a Payment</p>
                <div className='flex flex-col gap-2'>
                  <input className='px-4 py-2 w-full rounded-md outline-0  bg-slate-100' type="text" name="name" id="name" placeholder='Enter Name' />
                  <input className='px-4 py-2 w-full rounded-md outline-0  bg-slate-100' type="text" name="message" id="message" placeholder='Enter Message' />
                  <input className='px-4 py-2 w-full rounded-md outline-0  bg-slate-100' type="number" name="amount" id="amount" placeholder='Enter Amount' />
                  <button className='px-4 py-2 font-semibold text-white bg-black rounded-md'>Submit</button>
                </div>
                <div className='flex gap-4'>
                  <p className='bg-black text-white font-semibold px-2 py-1 rounded-md'>Pay $10</p>
                  <p className='bg-black text-white font-semibold px-2 py-1 rounded-md'>Pay $50</p>
                  <p className='bg-black text-white font-semibold px-2 py-1 rounded-md'>Pay $100</p>
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