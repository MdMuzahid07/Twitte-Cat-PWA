import React, { useEffect } from 'react';
import TwitteCard from '../components/main/home/TwitteCard';
import TwitteBox from '../components/main/home/TwitteBox';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase.init';

const Home = () => {

    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/login");
            }
        });
    }, [navigate]);


    return (
        <div className="max-w-4xl w-full border-r">
            <TwitteBox />
            <TwitteCard />
            <TwitteCard />
            <TwitteCard />
        </div>
    );
};

export default Home;