import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-4 justify-center items-center w-1/4'>
        <div className='w-full p-10 flex flex-col gap-10'>
          <div className='flex flex-col items-center gap-6'>
            <img src="/logomark-animated.webp" alt="" width={60} />
            <p className='text-2xl font-bold'>Log in or sign up</p>
          </div>
          <div className='w-full flex flex-col gap-4 justify-center items-center'>
            <div className='flex items-center justify-center border gap-2 w-full px-4 py-2 border-gray-300 rounded-sm cursor-pointer hover:bg-slate-200'>
              <lord-icon
                src="https://cdn.lordicon.com/gdzgkrni.json"
                trigger="hover"
                state="hover-roll"
                stroke="bold"
                colors="primary:#242424,secondary:#242424"
                style={{"width":"30px","height":"30px"}}>
              </lord-icon>
              <p>Continue with Apple</p>
            </div>
            <div className='flex items-center justify-center border gap-2 w-full px-4 py-2 border-gray-300 rounded-sm cursor-pointer hover:bg-slate-200'>
              <lord-icon
                src="https://cdn.lordicon.com/uewqxptr.json"
                trigger="hover"
                stroke="bold"
                state="loop-roll"
                colors="primary:#16c72e,secondary:lightblue"
                style={{"width":"30px","height":"30px"}}>
              </lord-icon>
              <p>Continue with Google</p>
            </div>
            <div className='flex items-center justify-center border gap-2 w-full px-4 py-2 border-gray-300 rounded-sm cursor-pointer hover:bg-slate-200'>
              <lord-icon
                src="https://cdn.lordicon.com/bfoumeno.json"
                trigger="hover"
                state="hover-roll"
                stroke="bold"
                colors="primary:#107c91,secondary:#08a88a"
                style={{"width":"30px","height":"30px"}}>
              </lord-icon>
              <p>Continue with Facebook</p>
            </div>
            <p className='text-gray-400'>or</p>
            <input className='px-4 py-2 w-full outline-0 border border-gray-300 rounded-sm' placeholder='Email' type="text" />
            <button className='px-4 py-2 w-full bg-slate-300 cursor-pointer border border-gray-300 rounded-sm'>Continue</button>
          </div>
        </div>
        <div className='text-[12px] w-[70%] text-center text-mauve-500'>By signing up, you are creating a Patreon account and agree to Patreon’s <span className='underline font-bold'>Terms && Privacy Policy</span></div>
      </div>
    </div>
  )
}

export default page