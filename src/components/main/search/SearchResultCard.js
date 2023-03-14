import React from 'react';
import { MdVerified } from 'react-icons/md';
import { toast } from 'react-toastify';

const SearchResultCard = () => {
    return (
        <div className="card lg:card-side bg-base-100 rounded-none border mb-3">
            <figure>
                <div className="p-3">
                    <div className="avatar border border-3 border-blue-400 rounded-full online">
                        <div className="w-24 rounded-full">
                            <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="profile_image" />
                        </div>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">MR.Cat <MdVerified style={{ color: "#60a5fa" }} /></h2>
                <p>Ceo of OpenAI</p>
                <div className="card-actions justify-end">
                    <button onClick={() => toast.success("working")} className="btn btn-wide btn-sm rounded-full bg-blue-400 border-none">Follow</button>
                </div>
            </div>
        </div >
    );
};

export default SearchResultCard;