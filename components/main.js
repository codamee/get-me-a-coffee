"use client"
import React from 'react'
import Image from 'next/image'

const Main = () => {
    return (
        <div className='overflow-hidden '>
            <div className=' text-[9rem] p-10 flex flex-col justify-end  text-slate-100 min-h-[86vh]  bg-[url(/ai.jpg)] bg-cover bg-center '>
                <div className=" w-full flex flex-col p-10 justify-end border-white/10 
                  bg-black/50 backdrop-blur-[1px] shadow-2xl">
                    <p>Your Wildest</p>
                    <div className=' flex justify-between items-center'>
                        <lord-icon
                            src="https://cdn.lordicon.com/gupcdncx.json"
                            trigger="hover"
                            state="loop-cycle"
                            colors="primary:lightblue,secondary:#fff"
                            style={{ "width": "100px", "height": "100px" }}>
                        </lord-icon>
                        <p> Creative reality</p>
                    </div>
                </div>

            </div>
            <div className='flex p-30 min-h-screen  justify-between bg-blue-300' >
                <div className='flex flex-col gap-20 items-center w-[70%] '>
                    <p className='text-8xl'>Turning passions into Businesses worth Mention</p>
                    <div className='flex flex-col w-1/2 gap-10'>
                        <p className='text-3xl font-semibold '>Patreon is the best place to build community with your biggest fans, share exclusive work, and turn your passion into a lasting creative business.
                        </p>
                        <button className='px-6 py-3 rounded-4xl bg-black text-white w-1/3'>Set up shop</button>
                    </div>

                </div>
                <div className='text-9xl flex flex-col items-end justify-end'>
                    <img src="/Mobile_Insights_931320bfbd.png" alt="" width={300} />
                </div>
            </div>
            <div className='min-h-screen p-15 bg-[url(/qhd_Patreon_Website_Module3_2_X_72dpi_Kamauu1_c26920eff8.jpg)] bg-cover bg-center text-white flex justify-between items-end'>
                <div className='text-4xl flex flex-col gap-4 w-[80%]  p-10 '>
                    <p className='text-end'>"Patreon provides a space for artists to sustain ourselves</p>
                    <p>by connecting us directly to our own communities."</p>
                </div>
                <div className='text-6xl'>KAMAUU</div>
            </div>
            <div className='min-h-screen bg-blue-300 flex flex-col gap-30 '>
                <div className='w-full ml-20 flex justify-center'>
                    <img src="/small_Component_Card_8_dbf120bf79.png" alt="component" className='w-60' />
                </div>
                <div className='flex justify-between'>
                    <Image src="/Component_Card_11_18b523208f.png" alt="component" className='' width={300} height={200}
                        style={{ width: '25%    ', height: 'auto' }} />
                    <p className='text-9xl w-1/2'>complete creative control</p>
                    <img src="/medium_Component_Card_6_00ed3428aa.png" alt="component" className=' w-60 mt-10' />
                </div>
                <div className='flex w-[70%] py-20 justify-between'>
                    <div className='w-1/3'>
                        <img src="/small_Component_Card_1_0135f12736.png" alt="component" />
                    </div>
                    <div className='text-xl w-1/2 flex flex-col gap-10  self-end'>
                        <p className='w-[80%] '>Patreon is your space to create what excites you most, rough or polished, big or small. Hundreds of thousands of creators use Patreon to share videos, podcasts, writing, art, music, recipes, and more with their most passionate fans.
                        </p>
                        <button className='px-6 py-3 rounded-4xl bg-black text-white w-1/2'>Create on your terms</button>
                    </div>
                </div>
            </div>
            <div className='flex p-20 gap-20 bg-blue-400 items-center'>
                <div className='w-[70%] flex flex-col gap-10'>
                    <p className='text-[8rem]'>
                        Creators. Fans.
                        Nothing in
                        between.
                    </p>
                    <p className='text-xl w-1/2  mx-50'>
                        Patreon gives you a direct line of access to your fan community, with no ads or gatekeepers in the way.
                        Through real-time group chats, comments, DMs, and even directly over email, you can connect more deeply and directly with your community here than anywhere else.
                    </p>
                    <button className='px-6 py-4 w-1/4 mx-50 bg-black text-white  rounded-4xl'> Build real community</button>
                </div>
                <div className='rounded-4xl bg-black w-100 overflow-hidden border'>
                    <video muted={true} src="/1_Chelsea_1161fe215b.mp4" loop={true} autoPlay ></video>
                </div>
            </div>
            <div className='flex bg-[url(/bg.jpg)] bg-center bg-cover items-center justify-center min-h-screen '>
                <div className=' rounded-4xl p-15  bg-white  flex flex-col gap-15 items-center '>
                    <div className='flex gap-8 flex-col items-center'>
                        <img src="/logomark-animated.webp" width={70} alt="logo" />
                        <p className='text-3xl'>Your world to create</p>
                    </div>

                    <div className='flex flex-col gap-8 items-center'>
                        <button className='px-6 py-3 rounded-4xl text-white bg-black w-full'>Get started</button>
                        <p >
                            Already have an account? <a href="">Log in</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main