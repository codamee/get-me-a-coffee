"use client"
import React from 'react'
import Link from 'next/link'
import { UserButton, Show } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div className='h-screen flex '>
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
        <div className='w-full bg-red-300 relative'>
          <img src="/dashBg.jpg" alt="dash" className="w-full h-75 object-cover" />
          <div className=' flex flex-col gap-4 items-center absolute bottom-[-170] right-140'>
            <img src="/dashprofile.jpg" alt="profile" className='w-30 rounded-2xl border border-gray-700' />
            <div className='flex flex-col items-center gap-2'>
              <p className='text-3xl font-bold'>Raw Coding</p>
              <p>creating Web Development Tutorials</p>
              <p className='text-gray-400 text-sm'>419 members . 1 post . $14525 raised</p>
            </div>
          </div>

        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard