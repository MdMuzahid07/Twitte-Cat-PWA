import React from 'react';

const Chats = () => {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://img.freepik.com/free-vector/night-neon-megapolis-soaring-island_1441-3150.jpg?w=1380&t=st=1700332109~exp=1700332709~hmac=cf1373e3cb95950b2e83188bc98cbe935073547db806399b1b42a04f6677be6d" alt="profile_image" />
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://img.freepik.com/free-vector/night-neon-megapolis-soaring-island_1441-3150.jpg?w=1380&t=st=1700332109~exp=1700332709~hmac=cf1373e3cb95950b2e83188bc98cbe935073547db806399b1b42a04f6677be6d" alt="profile_image" />
                    </div>
                </div>
                <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">I hate you!</div>
                <div className="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
        </div>
    );
};

export default Chats;