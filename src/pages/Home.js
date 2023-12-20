import React, { useEffect } from 'react';
import TwitteCard from '../components/main/home/TwitteCard';
import TwitteBox from '../components/main/home/TwitteBox';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase.init';
import { rocket, rocket2, spaceX, starLink } from '../assets';

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
            <TwitteCard img={rocket} />
            <TwitteCard img={rocket2} />
            <TwitteCard img={spaceX} />
            <TwitteCard img={starLink} />
        </div>
    );
};

export default Home;