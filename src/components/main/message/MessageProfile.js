import React from 'react';
import { MdVerified } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const MessageProfile = () => {
    const navigate = useNavigate();

    return (
        <section onClick={() => navigate("/chatBox")} className="flex items-center cursor-pointer rounded-2xl border p-4 mb-3">
            <div className="mr-3">
                <div className="avatar border border-3 border-blue-400 rounded-full online">
                    <div className="w-14 rounded-full">
                        <img src="https://img.freepik.com/free-vector/night-neon-megapolis-soaring-island_1441-3150.jpg?w=1380&t=st=1700332109~exp=1700332709~hmac=cf1373e3cb95950b2e83188bc98cbe935073547db806399b1b42a04f6677be6d" alt="profile_image" />
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