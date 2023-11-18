import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
    const navigate = useNavigate();


    return (
        <li className="mb-10 w-full">
            <button onClick={() => navigate("/")} className="text-blue-400 text-2xl font-bold">Twitte Cat</button>

            <div onClick={() => navigate("/profile")} className="w-full bg-base-100 border mt-5">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://img.freepik.com/free-vector/night-neon-megapolis-soaring-island_1441-3150.jpg?w=1380&t=st=1700332109~exp=1700332709~hmac=cf1373e3cb95950b2e83188bc98cbe935073547db806399b1b42a04f6677be6d" alt="" />
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