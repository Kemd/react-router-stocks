import { Link } from 'react-router-dom'

import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/stocks'>
            <div>Home / Dashboard page</div>
        </Link>

        <Link to='/about'>
            <div>About page</div>
        </Link>
    </div>
  )
}

export default Nav