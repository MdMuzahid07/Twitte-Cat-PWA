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
                                <img src="https://img.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg?w=826&t=st=1699976443~exp=1699977043~hmac=0be77eda444ec16cf3c201dbcd01789c736019d9612bb7c4a68540b732aed06b" alt="" />
                            </div>
                        </div>
                        <h2 className="card-title ml-5">MR.Cat</h2>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure>
                    <img className="rounded-2xl" src="https://img.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg?w=826&t=st=1699976443~exp=1699977043~hmac=0be77eda444ec16cf3c201dbcd01789c736019d9612bb7c4a68540b732aed06b" alt="Shoes" />
                </figure>
            </div>
            <CardBottomNav />
        </section>
    );
};

export default TwitteCard;