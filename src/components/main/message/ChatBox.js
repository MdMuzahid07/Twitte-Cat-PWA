import React from 'react';
import { MdVerified } from 'react-icons/md';
import Chats from './Chats';

const ChatBox = () => {
    return (
        <div className="w-full border-r">
            <section className="flex sticky top-0 bg-white z-50 items-center border-b p-4 mb-3">
                <div className="mr-3">
                    <div className="avatar border-b border-3 border-blue-400 rounded-full online">
                        <div className="w-9 rounded-full">
                            <img src="https://img.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg?w=826&t=st=1699976443~exp=1699977043~hmac=0be77eda444ec16cf3c201dbcd01789c736019d9612bb7c4a68540b732aed06b" alt="profile_image" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title"><small>MR.Cat </small><MdVerified style={{ color: "#60a5fa", }} /></h2>
                    <p><small>Ceo of OpenAI</small></p>
                </div>
            </section>
            <section className="px-3">
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
            </section>

            <div className="bg-base-100 border-t z-20 bg-white-500 p-3 w-full">
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="Write message" className="input border-blue-500 focus:outline-none rounded-full input-bordered w-full" />
                    <button className="btn bg-blue-500 border-0 rounded-full text-white">Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;