"use client"
import React from 'react'
import Link from 'next/link'
import { UserButton, Show } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div className='h-screen flex'>
      <div className="sidebar h-full flex flex-col justify-between items-center p-5 border-r border-r-gray-200 ">
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
      <div className="main"></div>
    </div>
  )
}

export default Dashboard