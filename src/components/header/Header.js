import React from 'react';
import { BiMenu } from "react-icons/bi";
import ProfileCard from './ProfileCard';
import { BsFillPersonFill, BsFillBellFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { starLink } from '../../assets';

const Header = () => {
    return (
        <header className="max-w-4xl mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    {/* ================== navbar top start ================> */}
                    <div className="navbar bg-white lg:hidden sticky top-0 z-50">
                        <div className="flex-1">
                            <Link to="/" className="text-xl">
                                <button
                                    className="btn btn-ghost normal-case text-xl text-blue-500">Tweet Cat</button>
                            </Link>
                        </div>
                        <div className="flex-none">
                            <label htmlFor="my-drawer-2" className="btn btn-circle border-0 btn-sm drawer-button">
                                <img className="max-h-14 max-w-14 rounded-full object-cover object-center" src={starLink} alt="" />
                            </label>
                        </div>
                    </div>

                    {/* ================== navbar top end ================> */}

                    {<Outlet />}

                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full bg-base-100 border-r text-base-content">
                        <ProfileCard />
                        <li>
                            <Link to="/" className="text-xl"> <HiHome />Home</Link>
                        </li>
                        <li>
                            <Link to="/profile" className="text-xl "><BsFillPersonFill />Profile</Link>
                        </li>
                        <li>
                            <Link to="/search" className="text-xl"> <FaSearch />Search</Link>
                        </li>
                        <li>
                            <Link to="/notification" className="text-xl"> <BsFillBellFill />Notification</Link>
                        </li>
                        <li>
                            <Link to="/message" className="text-xl"> <AiFillMessage />Message</Link>
                        </li>
                        <li onClick={() => document.getElementById('meowit-modal').showModal()} className="btn text-white bg-blue-400 rounded-full mt-5 w-full">MeowIt</li>
                    </ul>
                </div>
            </div>




            <div className="btm-nav md:hidden bg-base-100 border-t border-slate-50 z-40">
                <button>
                    <NavLink
                        to="/"
                        className="text-2xl"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#60A5FA" : "black",
                            };
                        }}
                    >
                        <HiHome />
                    </NavLink>
                </button>
                <button>
                    <NavLink
                        to="/search"
                        className="text-2xl"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#60A5FA" : "black",
                            };
                        }}
                    >
                        <FaSearch />
                    </NavLink>
                </button>
                <button>
                    <NavLink
                        to="/message"
                        className="text-2xl"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#60A5FA" : "black",
                            };
                        }}
                    >
                        <AiFillMessage />
                    </NavLink>
                </button>
            </div>
        </header>
    );
};

export default Header;