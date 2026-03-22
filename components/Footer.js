import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col bg-black text-white p-15 justify-between gap-15'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm'>Creators</p>
                    <div className='text-sm text-gray-500'>
                        <p>Podcasters</p>
                        <p>Video creators</p>
                        <p>Musicians</p>
                        <p>Artists</p>
                        <p>Game devs</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm'>Features</p>
                    <div className='text-sm text-gray-500'>
                        <p>Create on your terms</p>
                        <p>Where real community thrives</p>
                        <p>Grow your community</p>
                        <p>Support for your business</p>
                        <p>Earning made easy</p>
                        <p>Start a membership</p>
                        <p>Set up a shop</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm'>Pricing</p>
                    <div className='text-sm text-gray-500'>
                        <p>Starting a Patreon is free</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm'>Resources</p>
                    <div className='text-sm text-gray-500'>
                        <p>Patreon for Creators</p>
                        <p>Newsroom</p>
                        <p>Help Center & FAQ</p>
                        <p>Partners & integrations</p>
                        <p>Mobile</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm'>Company</p>
                    <div className='text-sm text-gray-500'>
                        <p>About</p>
                        <p>Press</p>
                        <p>Careers</p>
                        <p>Terms of Use & policies</p>
                        <p>Privacy policy</p>
                        <p>Cookie policy</p>
                        <p>Accessibility</p>
                        <p>Impressum</p>
                        <p>Brand assets & guidelines</p>
                    </div>
                </div>

            </div>
            <div className='flex gap-4'>
                <div>
                    <img src="/google_app_store_button_en_US_869401a5e7.png" alt="playstore" width={150} />
                </div>
                <div>
                    <img src="/apple_app_store_button_en_US_38d7cda643.png" alt="applestore" width={150} />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <div className='flex gap-2 px-6 py-3 rounded-4xl bg-gray-800 items-center justify-center'>
                        <div >
                            <img src="/svg/world.svg" alt="worldsvg" width={30} />
                        </div>
                        <p>English</p>
                    </div>
                    <div className='flex gap-2 px-6 py-3 rounded-4xl bg-gray-800 items-center justify-center'>
                        <div >
                            <img src="/in.png" alt="worldsvg" width={30} />
                        </div>
                        <p>India</p>
                    </div>
                    <div className='flex gap-2 px-6 py-3 rounded-4xl bg-gray-800 items-center justify-center'>
                        <div >
                            <img src="/svg/dollar.svg" alt="worldsvg" width={30} />
                        </div>
                        <p>USD</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='hover:bg-gray-800 cursor-pointer rounded-4xl p-3 '>
                        <img src="/svg/twitter.svg" alt="twitter" width={30}/>
                    </div>
                    <div className='hover:bg-gray-800 cursor-pointer rounded-4xl p-3 '>
                        <img src="/svg/facebook.svg" alt="twitter" width={30}/>
                    </div>
                    <div className='hover:bg-gray-800 cursor-pointer rounded-4xl p-3 '>
                        <img src="/svg/insta.svg" alt="twitter" width={30}/>
                    </div>
                    <div className='hover:bg-gray-800 cursor-pointer rounded-4xl p-3 '>
                        <img src="/svg/linkedin.svg" alt="twitter" width={30}/>
                    </div>
                    <div className='hover:bg-gray-800 cursor-pointer rounded-4xl p-3 '>
                        <img src="/svg/youtube.svg" alt="twitter" width={30}/>
                    </div>
                </div>
                <div>
                    <p>600 Townsend Street, Suite 500 | San Francisco, CA 94103, USA | ©️Patreon</p>
                </div>
            </div>
        </div>
    )
}

export default Footer