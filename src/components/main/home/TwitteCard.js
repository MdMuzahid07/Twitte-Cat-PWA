import React from 'react';
import CardBottomNav from './CardBottomNav';
import CardThreeDot from './CardThreeDot';

const TwitteCard = () => {
    return (
        <section className="border-b p-2 pb-5 relative mb-5">
            <CardThreeDot />
            <div className="card w-full">
                <div className="card-body p-0 mt-5 mb-10">
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="" />
                            </div>
                        </div>
                        <h2 className="card-title ml-5">MR.Cat</h2>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure>
                    <img className="rounded-2xl" src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="Shoes" />
                </figure>
            </div>
            <CardBottomNav />
        </section>
    );
};

export default TwitteCard;