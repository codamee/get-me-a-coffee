import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col bg-black text-white p-6 md:p-15 justify-between gap-10 md:gap-15'>

           
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4'>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-bold'>Creators</p>
                    <div className='text-sm text-gray-500 flex flex-col gap-2'>
                        <p className='hover:text-white cursor-pointer'>Podcasters</p>
                        <p className='hover:text-white cursor-pointer'>Video creators</p>
                        <p className='hover:text-white cursor-pointer'>Musicians</p>
                        <p className='hover:text-white cursor-pointer'>Artists</p>
                        <p className='hover:text-white cursor-pointer'>Game devs</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-bold'>Features</p>
                    <div className='text-sm text-gray-500 flex flex-col gap-2'>
                        <p className='hover:text-white cursor-pointer'>Create on your terms</p>
                        <p className='hover:text-white cursor-pointer'>Where real community thrives</p>
                        <p className='hover:text-white cursor-pointer'>Grow your community</p>
                        <p className='hover:text-white cursor-pointer'>Support for your business</p>
                        <p className='hover:text-white cursor-pointer'>Earning made easy</p>
                        <p className='hover:text-white cursor-pointer'>Start a membership</p>
                        <p className='hover:text-white cursor-pointer'>Set up a shop</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-bold'>Pricing</p>
                    <div className='text-sm text-gray-500 flex flex-col gap-2'>
                        <p className='hover:text-white cursor-pointer'>Starting a Patreon is free</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-bold'>Resources</p>
                    <div className='text-sm text-gray-500 flex flex-col gap-2'>
                        <p className='hover:text-white cursor-pointer'>Patreon for Creators</p>
                        <p className='hover:text-white cursor-pointer'>Newsroom</p>
                        <p className='hover:text-white cursor-pointer'>Help Center & FAQ</p>
                        <p className='hover:text-white cursor-pointer'>Partners & integrations</p>
                        <p className='hover:text-white cursor-pointer'>Mobile</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-bold'>Company</p>
                    <div className='text-sm text-gray-500 flex flex-col gap-2'>
                        <p className='hover:text-white cursor-pointer'>About</p>
                        <p className='hover:text-white cursor-pointer'>Press</p>
                        <p className='hover:text-white cursor-pointer'>Careers</p>
                        <p className='hover:text-white cursor-pointer'>Terms of Use & policies</p>
                        <p className='hover:text-white cursor-pointer'>Privacy policy</p>
                        <p className='hover:text-white cursor-pointer'>Cookie policy</p>
                        <p className='hover:text-white cursor-pointer'>Accessibility</p>
                        <p className='hover:text-white cursor-pointer'>Impressum</p>
                        <p className='hover:text-white cursor-pointer'>Brand assets & guidelines</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
                <img src="/google_app_store_button_en_US_869401a5e7.png" alt="playstore" className='w-32 md:w-40 h-auto' />
                <img src="/apple_app_store_button_en_US_38d7cda643.png" alt="applestore" className='w-32 md:w-40 h-auto' />
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center gap-8 border-t border-gray-800 pt-10'>

                <div className='flex flex-wrap justify-center gap-3'>
                    <div className='flex gap-2 px-4 py-2 rounded-full bg-gray-900 items-center justify-center hover:bg-gray-800 cursor-pointer'>
                        <img src="/svg/world.svg" alt="world" className='w-5' />
                        <p className='text-sm'>English</p>
                    </div>
                    <div className='flex gap-2 px-4 py-2 rounded-full bg-gray-900 items-center justify-center hover:bg-gray-800 cursor-pointer'>
                        <img src="/in.png" alt="india" className='w-5' />
                        <p className='text-sm'>India</p>
                    </div>
                    <div className='flex gap-2 px-4 py-2 rounded-full bg-gray-900 items-center justify-center hover:bg-gray-800 cursor-pointer'>
                        <img src="/svg/dollar.svg" alt="currency" className='w-5' />
                        <p className='text-sm'>USD</p>
                    </div>
                </div>

                <div className='flex gap-2 md:gap-4'>
                    {['twitter', 'facebook', 'insta', 'linkedin', 'youtube'].map((social) => (
                        <div key={social} className='hover:bg-gray-800 cursor-pointer rounded-full p-2 transition-colors'>
                            <img src={`/svg/${social}.svg`} alt={social} className='w-6 md:w-7' />
                        </div>
                    ))}
                </div>

                <div className='text-[10px] md:text-xs text-center lg:text-right text-gray-500 max-w-xs md:max-w-none'>
                    <p>600 Townsend Street, Suite 500 | San Francisco, CA 94103, USA</p>
                    <p>©️ Patreon</p>
                </div>
            </div>
        </div>
    )
}

export default Footer