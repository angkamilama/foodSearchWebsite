import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import style from '../Modules/RootLayout.modules.css';

function RootLayout() {
  return (
    <div>
        <header>
             <nav >
                <NavLink to="/">Home</NavLink>
                <NavLink to="ProjectDetail" >About Project</NavLink>
                <NavLink to="FoodItems" >Food Gallery</NavLink>
                <NavLink to="SearchFood" >Search Food</NavLink>
             </nav>
        </header>
        <main>
          <Outlet/>
         </main>

    </div>
  )
}

export default RootLayout