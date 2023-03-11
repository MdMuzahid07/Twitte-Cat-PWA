import React from 'react';
import { BiMenu } from "react-icons/bi";

const Header = ({ children }) => {
    return (
        <header className="max-w-4xl mx-auto">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-end">
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
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 bg-base-100 text-base-content border-r">
                        <li>
                            <h2 className="text-blue-500 text-2xl font-bold">Twitte Cat</h2>
                            <div className="card card-compact bg-base-100 drop-shadow mt-5">
                                <figure>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="" />
                                        </div>
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">MR.CAT@</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        </li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Header;