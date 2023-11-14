import React from 'react';
import { MdVerified } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const MessageProfile = () => {
    const navigate = useNavigate();

    return (
        <section onClick={() => navigate("/chatBox")} className="flex items-center cursor-pointer rounded-2xl border p-4 mb-3">
            <div className="mr-3">
                <div className="avatar border border-3 border-blue-400 rounded-full online">
                    <div className="w-9 rounded-full">
                        <img src="https://img.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg?w=826&t=st=1699976443~exp=1699977043~hmac=0be77eda444ec16cf3c201dbcd01789c736019d9612bb7c4a68540b732aed06b" alt="profile_image" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h2 className="card-title">MR.Cat <MdVerified style={{ color: "#60a5fa", }} /></h2>
                    <p>Ceo of OpenAI</p>
                </div>
            </div>
        </section>
    );
};

export default MessageProfile;