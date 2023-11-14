import React from 'react';
import ProfileHeader from '../components/main/profile/ProfileHeader';
import TwitteCard from '../components/main/home/TwitteCard';

const Profile = () => {
    return (
        <section className="max-w-4xl w-full border-r">
            <ProfileHeader />
            <TwitteCard />
        </section>
    );
};

export default Profile;