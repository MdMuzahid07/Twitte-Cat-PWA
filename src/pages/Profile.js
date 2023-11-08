import React from 'react';
import ProfileHeader from '../components/main/profile/ProfileHeader';
import TwitteCard from '../components/main/home/TwitteCard';

const Profile = () => {
    return (
        <section className="overflow-y-scroll w-full px-3">
            <ProfileHeader />
            <TwitteCard />
        </section>
    );
};

export default Profile;