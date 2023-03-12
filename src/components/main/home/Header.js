import React from 'react';
import { BsFileEarmarkImage } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Header = () => {
    return (
        <header className="bg-blue-400 border my-5 p-5 rounded-xl">
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="" />
                </div>
            </div>
            <form >
                <div className="my-2">
                    <input type="text" placeholder="Whats happening?" className="input w-full border border-base-100" />
                </div>
                <div className="flex justify-between items-center">
                    <div className="border border-base-100 rounded-full p-2">
                        <label htmlFor="img">
                            <BsFileEarmarkImage />
                        </label>
                        <input type="file" className="hidden" id="img" />
                    </div>
                    <button type="submit" className="btn btn-sm  btn-outline btn-circle bg-base-100 border-0"><AiOutlineArrowUp /></button>
                </div>
            </form>

        </header>
    );
};

export default Header;