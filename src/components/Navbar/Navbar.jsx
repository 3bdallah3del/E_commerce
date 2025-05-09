import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import Navbar_Mobile from './Navbar_Mobile/Navbar_Mobile';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.product.item);
  const [OpenMenu, setOpenMenu] = useState(false);
  const style ='hover:text-blue ease-in-out transition-all duration-150 px-3'
  return (
        <nav className='flex sticky top-0 z-20 bg-light text-basic px-6 py-4 m-auto items-center justify-between '>
        
           <a href=""><img src="/public/logo.png" alt="logo" /></a> 

          <div className="hidden md:block">
              <ul className="flex gap-4 font-bold text-lg cursor-pointer items-center">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${style} text-blue` : style
                  }
                  // className="hover:text-blue ease-in-out transition-all duration-150 px-3"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? `${style} text-blue` : style
                  }
                >
                  Shop
                </NavLink>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    isActive ? `${style} text-blue` : style
                  }
                >
                  About us
                </NavLink>
                <NavLink
                  to={'/contact'}
                  className={({ isActive }) =>
                    isActive ? `${style} text-blue` : style
                  }
                >
                  Contact us
                </NavLink>
              <NavLink
                  to={'/cart'}
                  className={({ isActive }) =>
                    isActive ? `${style} text-blue` : style
                  }
                >
                  <CiShoppingCart size={23} className="relative" />
                  <span className="absolute top-[15px] right-[35px] text-xs text-blue ">{cartItems.length}</span>
                </NavLink>
              </ul>
          </div>
              {OpenMenu ? (
                <div>
                  <Navbar_Mobile setOpenMenu={setOpenMenu}/>
                </div>
              ) : (
                <div className="block md:hidden relative">
                  <div className='flex items-center '>
                    <NavLink
                      to={'/cart'}
                      className={({ isActive }) =>
                        isActive ? `${style} text-blue` : style
                      }
                    >
                      <CiShoppingCart size={23} className="relative" />
                      <span className="absolute top-[-8px] right-[35px] text-xs text-blue ">{cartItems.length}</span>
                    </NavLink>
                    
                    <HiOutlineMenu
                      size={23}
                      className="font-bold text-basic cursor-pointer"
                      onClick={() => setOpenMenu((prev) => !prev)}
                    />


                  </div>
                </div>
              )}

    </nav>
  )
}

export default Navbar;