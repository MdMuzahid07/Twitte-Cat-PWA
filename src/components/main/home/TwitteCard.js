import React from 'react';
import CardBottomNav from './CardBottomNav';
import { BsThreeDots } from 'react-icons/bs';

const TwitteCard = () => {
    return (
        <section className="border p-5 relative">
            <div className="dropdown dropdown-end absolute right-5 top-5 z-50">
                <label tabIndex={0} ><BsThreeDots /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 border border-blue-400 rounded-xl bg-base-100 w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className="card w-full">
                <div className="card-body p-0 mt-5 mb-10">
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="" />
                            </div>
                        </div>
                        <h2 className="card-title ml-5">Shoes!</h2>
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