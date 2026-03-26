"use client"
import React from 'react'
import Image from 'next/image'

const Main = () => {
    return (
        <div className='overflow-x-hidden'>
       
            <div className='p-4 md:p-10 flex flex-col justify-end text-white min-h-[90vh] bg-[url(/ai.jpg)] bg-cover bg-center'>
                <div className="w-full flex flex-col p-6 md:p-10 justify-end border-white/10 bg-black/40 backdrop-blur-[2px] shadow-2xl rounded-2xl md:rounded-3xl">
                    <p className='text-5xl md:text-7xl lg:text-[9rem] leading-tight font-bold'>Your Wildest</p>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                        <div className='order-2 md:order-1'>
                            <lord-icon
                                src="https://cdn.lordicon.com/gupcdncx.json"
                                trigger="hover"
                                state="loop-cycle"
                                colors="primary:lightblue,secondary:#fff"
                                style={{ "width": "80px", "height": "80px" }}>
                            </lord-icon>
                        </div>
                        <p className='text-5xl md:text-7xl lg:text-[9rem] leading-tight font-bold order-1 md:order-2'>Creative reality</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row p-8 md:p-20 lg:p-30 min-h-screen justify-between bg-blue-300 gap-12' >
                <div className='flex flex-col gap-10 md:gap-20 items-start lg:w-[70%]'>
                    <p className='text-4xl md:text-6xl lg:text-8xl font-bold leading-tight'>Turning passions into Businesses worth Mention</p>
                    <div className='flex flex-col w-full md:w-3/4 lg:w-1/2 gap-6 md:gap-10'>
                        <p className='text-xl md:text-2xl lg:text-3xl font-semibold opacity-90'>
                            Patreon is the best place to build community with your biggest fans, share exclusive work, and turn your passion into a lasting creative business.
                        </p>
                        <button className='px-8 py-4 rounded-full bg-black text-white w-fit font-bold hover:scale-105 transition-transform'>Set up shop</button>
                    </div>
                </div>
                <div className='flex items-center justify-center lg:items-end lg:justify-end'>
                    <img src="/Mobile_Insights_931320bfbd.png" alt="Mobile insights" className='w-48 md:w-64 lg:w-75' />
                </div>
            </div>


            <div className='min-h-[70vh] p-8 md:p-15 bg-[url(/qhd_Patreon_Website_Module3_2_X_72dpi_Kamauu1_c26920eff8.jpg)] bg-cover bg-center text-white flex flex-col md:flex-row justify-between items-end gap-10'>
                <div className='text-2xl md:text-4xl flex flex-col gap-2 w-full lg:w-[80%] bg-black/20 p-4 rounded-xl backdrop-blur-sm'>
                    <p className='md:text-end'>"Patreon provides a space for artists to sustain ourselves</p>
                    <p>by connecting us directly to our own communities."</p>
                </div>
                <div className='text-4xl md:text-6xl font-black tracking-tighter'>KAMAUU</div>
            </div>


            <div className='min-h-screen bg-blue-300 flex flex-col gap-10 md:gap-20 py-10'>
                <div className='w-full flex justify-center px-6'>
                    <img src="/small_Component_Card_8_dbf120bf79.png" alt="component" className='w-40 md:w-60 hover:rotate-3 transition-transform' />
                </div>

                <div className='flex flex-col lg:flex-row justify-between items-center px-6 md:px-20 gap-10'>
                    <Image src="/Component_Card_11_18b523208f.png" alt="component" width={300} height={200} className='w-1/2 md:w-1/4 h-auto' />
                    <p className='text-5xl md:text-7xl lg:text-9xl text-center lg:text-left font-bold leading-none lg:w-1/2'>complete creative control</p>
                    <img src="/medium_Component_Card_6_00ed3428aa.png" alt="component" className='w-40 md:w-60 lg:mt-10' />
                </div>

                <div className='flex flex-col lg:flex-row w-full lg:w-[90%] py-10 lg:py-20 px-8 gap-10 items-center lg:items-end'>
                    <div className='w-full lg:w-1/3 flex justify-center'>
                        <img src="/small_Component_Card_1_0135f12736.png" alt="component" className='w-48 md:w-64' />
                    </div>
                    <div className='text-lg md:text-xl w-full lg:w-1/2 flex flex-col gap-6 md:gap-10'>
                        <p className='opacity-80'>Patreon is your space to create what excites you most, rough or polished, big or small. Hundreds of thousands of creators use Patreon to share videos, podcasts, writing, art, music, recipes, and more with their most passionate fans.</p>
                        <button className='px-8 py-4 rounded-full bg-black text-white w-fit font-bold'>Create on your terms</button>
                    </div>
                </div>
            </div>


            <div className='flex flex-col lg:flex-row p-8 md:p-20 gap-12 bg-blue-400 items-center'>
                <div className='w-full lg:w-[70%] flex flex-col gap-8 md:gap-10'>
                    <p className='text-5xl md:text-7xl lg:text-[8rem] font-bold leading-none'>
                        Creators. Fans. Nothing in between.
                    </p>
                    <div className='lg:ml-20 flex flex-col gap-8'>
                        <p className='text-lg md:text-xl md:w-3/4 lg:w-2/3'>
                            Patreon gives you a direct line of access to your fan community, with no ads or gatekeepers in the way.
                            Through real-time group chats, comments, DMs, and even directly over email, you can connect more deeply and directly with your community here than anywhere else.
                        </p>
                        <button className='px-8 py-4 bg-black text-white rounded-full w-fit font-bold'>Build real community</button>
                    </div>
                </div>
                <div className='rounded-3xl bg-black w-full md:w-80 lg:w-100 overflow-hidden border-4 border-black/10 shadow-2xl'>
                    <video muted src="/1_Chelsea_1161fe215b.mp4" loop autoPlay playsInline className='w-full h-full object-cover'></video>
                </div>
            </div>


            <div className='flex bg-[url(/bg.jpg)] bg-center bg-cover items-center justify-center min-h-screen p-6'>
                <div className='rounded-4xl md:rounded-[3rem] p-10 md:p-20 bg-white flex flex-col gap-10 md:gap-15 items-center shadow-2xl w-full max-w-xl'>
                    <div className='flex gap-6 flex-col items-center'>
                        <img src="/logomark-animated.webp" width={60} alt="logo" className='animate-bounce' />
                        <p className='text-3xl md:text-4xl font-bold text-center'>Your world to create</p>
                    </div>

                    <div className='flex flex-col gap-6 items-center w-full'>
                        <button className='px-10 py-4 rounded-full text-white bg-black w-full text-lg font-bold hover:bg-zinc-800 transition-colors'>Get started</button>
                        <p className='text-gray-600'>
                            Already have an account? <a href="#" className='text-black font-bold underline'>Log in</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main