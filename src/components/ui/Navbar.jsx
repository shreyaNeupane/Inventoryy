import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className=" bg-gray-800 text-white p-4">
        <div className="logo font-bold text-xl">
          {/* <img src="" alt="" srcset="" /> */}
        </div>
        <div className="navbar">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
