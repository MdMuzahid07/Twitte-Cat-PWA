import React from 'react';
import { MdVerified } from 'react-icons/md';
import { AiTwotoneHeart } from 'react-icons/ai';

const NotificationCard = () => {
    return (
        <section className="flex items-center border p-4 mb-3">
            <div className="flex items-center">
                <div>
                    <AiTwotoneHeart style={{ fontSize: "40px", color: "red" }} />
                </div>
                <div className="p-3">
                    <div className="avatar border border-3 border-blue-400 rounded-full online">
                        <div className="w-9 rounded-full">
                            <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="profile_image" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">MR.Cat <MdVerified style={{ color: "#60a5fa", }} /></h2>
                <p>Ceo of OpenAI</p>
            </div>
        </section>
    );
};

export default NotificationCard;