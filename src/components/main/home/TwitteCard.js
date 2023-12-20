import React from 'react';
import CardBottomNav from './CardBottomNav';
import CardThreeDot from './CardThreeDot';
import { spaceX } from '../../../assets';

const TwitteCard = ({ img }) => {
    return (
        <section className="border-b p-8 pb-5 relative mb-5">
            <CardThreeDot />
            <div className="card w-full">
                <div className="card-body p-0 mt-5 mb-10">
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img src={spaceX} alt="" />
                            </div>
                        </div>
                        <h2 className="card-title ml-5">MR.Cat</h2>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, consectetur.</p>
                </div>
                <figure>
                    <img className="rounded-2xl" src={img} alt="post_thumbnail" />
                </figure>
            </div>
            <CardBottomNav />
        </section>
    );
};

export default TwitteCard;