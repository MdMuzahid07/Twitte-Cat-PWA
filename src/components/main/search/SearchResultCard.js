import React from 'react';
import { MdVerified } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SearchResultCard = ({ img }) => {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between rounded-2xl bg-base-100 border py-2 px-4 mb-3">
            <div onClick={() => navigate("/profile")} className="flex items-center gap-4  cursor-pointer">
                <div className="p-3">
                    <div className="avatar border border-3 border-blue-400 rounded-full online">
                        <div className="w-14 rounded-full">
                            <img src={img} alt="profile_image" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">MR.Cat <MdVerified style={{ color: "#60a5fa" }} /></h2>
                    <p>Ceo of OpenAI</p>
                </div>
            </div>
            <div className="flex gap-2">
                <button onClick={() => navigate("/chatBox")} className="btn btn-sm text-white rounded-full bg-blue-400 border-none">Message</button>
                <button onClick={() => toast.success("working")} className="btn btn-sm text-white rounded-full bg-blue-400 border-none">Follow</button>
            </div>
        </div >
    );
};

export default SearchResultCard;