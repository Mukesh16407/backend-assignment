import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='store-header'>
        <div className='container-fluid'>
            <div>
              <h1 className="logo">
              <NavLink to="/" >TeeRex Store</NavLink>
            </h1>
            <nav>
                
            </nav>
            </div>

        </div>
    </div>
  )
}
