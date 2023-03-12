import React from 'react';

const ProfileCard = () => {
    return (
        <li className="mb-10">
            <h2 className="text-blue-400 text-2xl font-bold">Twitte Cat</h2>
            <div className="card card-compact w-full bg-base-100 drop-shadow mt-5">
                <figure>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="" />
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">MR.CAT@</h2>
                    <p>CEO of Twitte Cat</p>
                </div>
            </div>
        </li>
    );
};

export default ProfileCard;