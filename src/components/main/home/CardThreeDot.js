import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineDelete, AiOutlineUserDelete } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

const CardThreeDot = () => {
    return (
        <div>
            <div className="dropdown dropdown-end absolute right-5 top-5 z-50">
                <label className="cursor-pointer" tabIndex={0} ><BsThreeDots /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 border border-blue-400 rounded-xl bg-base-100 w-52">
                    <li type="button" className="text-error font-bold">
                        <p><AiOutlineDelete /> delete post</p>
                    </li>
                    <li type="button" className="text-error font-bold">
                        <p><AiOutlineUserDelete /> delete user</p>
                    </li>
                    <li type="button" className="text-blue-400 font-bold">
                        <p><MdOutlineAdminPanelSettings /> Make Admin</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CardThreeDot;