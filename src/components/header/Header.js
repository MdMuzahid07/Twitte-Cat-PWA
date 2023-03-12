import React from 'react';
import { BiMenu } from "react-icons/bi";
import ProfileCard from './ProfileCard';
import { BsFillPersonFill, BsFillBellFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';

const Header = ({ children }) => {
    return (
        <header className="max-w-4xl mx-auto">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="navbar bg-blue-500 lg:hidden">
                        <div className="flex-1">
                            <a href="3/" className="btn btn-ghost normal-case text-xl text-base-100">Tweet Cat</a>
                        </div>
                        <div className="flex-none">
                            <label htmlFor="my-drawer-2" className="btn btn-circle drawer-button">
                                <BiMenu style={{ fontSize: "30px" }} />
                            </label>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 bg-base-100 text-base-content border-r">
                        <ProfileCard />
                        <li>
                            <Link to="/profile" className="text-xl "><BsFillPersonFill />Profile</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-xl"> <HiHome />Home</Link>
                        </li>
                        <li>
                            <div className="text-xl"> <FaSearch />Search</div>
                        </li>
                        <li>
                            <Link to="/notification" className="text-xl"> <BsFillBellFill />Notification</Link>
                        </li>
                        <li>
                            <Link to="/message" className="text-xl"> <AiFillMessage />Message</Link>
                        </li>
                        <li className="btn border-blue-400 bg-blue-400 rounded-full mt-5 ">MeowIt</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;