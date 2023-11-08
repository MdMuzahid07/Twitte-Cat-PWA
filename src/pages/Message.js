import React from 'react';
import MessageProfile from '../components/main/message/MessageProfile';

const Message = () => {
    return (
        <div className="max-w-4xl">
            <section className="py-5 border-b sticky bg-base-100 top-0 px-3 z-30 mb-5">
                <h2 className="text-lg md:text-xl">All Messages</h2>
            </section>
            <div className="px-3 overflow-y-scroll w-full h-full">
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
                <MessageProfile />
            </div>
        </div>
    );
};

export default Message;