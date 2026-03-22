"use client"
import React from 'react'

const Main = () => {
    return (
        <div className=' '>
            <div className='flex flex-col justify-end text-[10rem] min-h-[86vh] bg-blue-300 p-10'>
                <p>Your Wildest</p>
                <div className=' flex justify-between'>
                    <lord-icon
                        src="https://cdn.lordicon.com/gupcdncx.json"
                        trigger="loop"
                        state="loop-cycle"
                        colors="primary:#121331,secondary:#000000"
                        style={{"width":"250px","height":"250px"}}>
                    </lord-icon>
                    <p> Creative reality</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Main