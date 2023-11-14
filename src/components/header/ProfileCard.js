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
                        <img src="https://img.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg?w=826&t=st=1699976443~exp=1699977043~hmac=0be77eda444ec16cf3c201dbcd01789c736019d9612bb7c4a68540b732aed06b" alt="" />
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