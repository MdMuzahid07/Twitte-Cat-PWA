import React from 'react';
import { BiMenu } from "react-icons/bi";
import ProfileCard from './ProfileCard';
import { BsFillPersonFill, BsFillBellFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <header className="max-w-4xl mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    {/* ================== navbar top start ================> */}
                    <div className="navbar bg-slate-50 lg:hidden sticky top-0 z-50">
                        <div className="flex-1">
                            <a href="3/" className="btn btn-ghost normal-case text-xl text-blue-500">Tweet Cat</a>
                        </div>
                        <div className="flex-none">
                            <label htmlFor="my-drawer-2" className="btn btn-circle border-0 btn-sm drawer-button">
                                <div className="w-16">
                                    <img className="rounded-full" src="https://img.freepik.com/free-photo/full-shot-female-astronaut-wearing-spacesuit_23-2150417571.jpg?t=st=1699976271~exp=1699979871~hmac=54e925740608ef87c0360c3983e73a4280d5f402838e0968e62ffe0294f22cad&w=1380" alt="" />
                                </div>
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
                        <li className="btn text-white bg-blue-400 rounded-full mt-5 w-full">MeowIt</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;