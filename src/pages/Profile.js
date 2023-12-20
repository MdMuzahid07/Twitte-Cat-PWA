import React from 'react';
import ProfileHeader from '../components/main/profile/ProfileHeader';
import TwitteCard from '../components/main/home/TwitteCard';
import { rocket, spaceX } from '../assets';

const Profile = () => {
    return (
        <section className="max-w-4xl w-full border-r">
            <ProfileHeader />
            <TwitteCard img={spaceX} />
            <TwitteCard img={rocket} />
        </section>
    );
};

export default Profile;