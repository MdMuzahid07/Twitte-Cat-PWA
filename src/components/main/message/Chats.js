import React from 'react';

const Chats = () => {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://img.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg?w=826&t=st=1699976443~exp=1699977043~hmac=0be77eda444ec16cf3c201dbcd01789c736019d9612bb7c4a68540b732aed06b" alt="profile_image" />
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
                        <img src="https://img.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg?w=826&t=st=1699976443~exp=1699977043~hmac=0be77eda444ec16cf3c201dbcd01789c736019d9612bb7c4a68540b732aed06b" alt="profile_image" />
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