import React from 'react';
import NotificationCard from '../components/main/notification/NotificationCard';

const Notification = () => {
    return (
        <div className="max-w-4xl w-full border-r">
            <section className="py-5 border-b sticky bg-base-100 top-0 px-3 z-30 mb-5">
                <h2 className="text-lg md:text-xl">All Notification</h2>
            </section>
            <div className="px-3">
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
        </div>
    );
};

export default Notification;