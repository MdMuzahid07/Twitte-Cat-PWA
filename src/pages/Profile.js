import React from 'react';
import ProfileHeader from '../components/main/profile/ProfileHeader';
import MyTwittesCard from '../components/main/profile/MyTwittesCard';

const Profile = () => {
    return (
        <section className="overflow-y-scroll w-full px-3">
            <ProfileHeader />
            <MyTwittesCard />
        </section>
    );
};

export default Profile;