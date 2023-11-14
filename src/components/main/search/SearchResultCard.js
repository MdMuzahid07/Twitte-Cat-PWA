import React from 'react';
import { MdVerified } from 'react-icons/md';
import { toast } from 'react-toastify';

const SearchResultCard = () => {
    return (
        <div className="card lg:card-side bg-base-100 border mb-3">
            <figure>
                <div className="p-3">
                    <div className="avatar border border-3 border-blue-400 rounded-full online">
                        <div className="w-24 rounded-full">
                            <img src="https://img.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg?w=826&t=st=1699976443~exp=1699977043~hmac=0be77eda444ec16cf3c201dbcd01789c736019d9612bb7c4a68540b732aed06b" alt="profile_image" />
                        </div>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">MR.Cat <MdVerified style={{ color: "#60a5fa" }} /></h2>
                <p>Ceo of OpenAI</p>
                <div className="card-actions justify-end">
                    <button onClick={() => toast.success("working")} className="btn btn-sm rounded-full bg-blue-400 border-none">Message</button>
                    <button onClick={() => toast.success("working")} className="btn btn-sm rounded-full bg-blue-400 border-none">Follow</button>
                </div>
            </div>
        </div >
    );
};

export default SearchResultCard;