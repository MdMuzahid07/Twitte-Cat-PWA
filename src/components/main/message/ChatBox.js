import React from 'react';
import { MdVerified } from 'react-icons/md';
import Chats from './Chats';

const ChatBox = () => {
    return (
        <div className="relative w-full border-r">
            <section className="flex sticky top-0 bg-white z-50 items-center border-b p-4 mb-3">
                <div className="mr-3">
                    <div className="avatar border-b border-3 border-blue-400 rounded-full online">
                        <div className="w-9 rounded-full">
                            <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="profile_image" />
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
            {/* <section className="fixed bg-white bottom-0 bg-white-500 p-3 w-96">
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="Type here" className="input border-blue-500 focus:outline-none rounded-full input-bordered w-full max-w-xs" />
                    <button className="btn bg-blue-500 border-0 rounded-full text-white">Send</button>
                </div>
            </section> */}
        </div>
    );
};

export default ChatBox;