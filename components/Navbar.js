import React from 'react'

const Navbar = () => {
  return (
      <div className='flex justify-between'>
          <div>
              <p>Creators</p>
              <p>Features</p>
              <p>Pricing</p>
              <p>Resources</p>
              <button>Updates</button>
          </div>
          <div>PATREON</div>
          <div>
              <div>
                  <input type="search" name="" id="" />
              </div>
              <button>Log in</button>
              <button>Get Started</button>
          </div>
    </div>
  )
}

export default Navbar