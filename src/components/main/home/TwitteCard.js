import React from 'react';
import CardBottomNav from './CardBottomNav';
import CardThreeDot from './CardThreeDot';

const TwitteCard = () => {
    return (
        <section className="border-b p-8 pb-5 relative mb-5">
            <CardThreeDot />
            <div className="card w-full">
                <div className="card-body p-0 mt-5 mb-10">
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img src="https://img.freepik.com/free-vector/night-neon-megapolis-soaring-island_1441-3150.jpg?w=1380&t=st=1700332109~exp=1700332709~hmac=cf1373e3cb95950b2e83188bc98cbe935073547db806399b1b42a04f6677be6d" alt="" />
                            </div>
                        </div>
                        <h2 className="card-title ml-5">MR.Cat</h2>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, consectetur.</p>
                </div>
                <figure>
                    <img className="rounded-2xl" src="https://img.freepik.com/free-vector/night-neon-megapolis-soaring-island_1441-3150.jpg?w=1380&t=st=1700332109~exp=1700332709~hmac=cf1373e3cb95950b2e83188bc98cbe935073547db806399b1b42a04f6677be6d" alt="post_thumbnail" />
                </figure>
            </div>
            <CardBottomNav />
        </section>
    );
};

export default TwitteCard;