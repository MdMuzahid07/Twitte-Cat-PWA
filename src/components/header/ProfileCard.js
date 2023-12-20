import React from 'react';
import { useNavigate } from 'react-router-dom';
import { starLink } from '../../assets';

const ProfileCard = () => {
    const navigate = useNavigate();


    return (
        <li className="mb-10 w-full">
            <button onClick={() => navigate("/")} className="text-blue-400 text-2xl font-bold">Twitte Cat</button>

            <div onClick={() => navigate("/profile")} className="w-full bg-base-100 border mt-5">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src={starLink} alt="" />
                    </div>
                </div>
                <div className="">
                    <h2 className="card-title">MR.CAT@</h2>
                    <p className="text-xs">CEO of Twitte Cat</p>
                </div>
            </div>
        </li>
    );
};

export default ProfileCard;