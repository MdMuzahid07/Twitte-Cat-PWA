import React from 'react';
import Header from '../components/main/home/Header';
import TwitteCard from '../components/main/home/TwitteCard';

const Home = () => {
    return (
        <div className="overflow-y-scroll w-full px-3">
            <Header />
            <TwitteCard />
            <TwitteCard />
            <TwitteCard />
        </div>
    );
};

export default Home;