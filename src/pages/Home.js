import React from 'react';
import TwitteCard from '../components/main/home/TwitteCard';
import TwitteBox from '../components/main/home/TwitteBox';

const Home = () => {
    return (
        <div className="overflow-y-scroll w-full px-3">
            <TwitteBox />
            <TwitteCard />
            <TwitteCard />
            <TwitteCard />
        </div>
    );
};

export default Home;