import React from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';

const CardBottomNav = () => {
    return (
        <div className="flex justify-between items-center mt-10">
            <button>
                <FaRegCommentDots />
            </button>
            <button className="active">
                <AiOutlineHeart />
            </button>
            <button>
                <FiShare />
            </button>
        </div>
    );
};

export default CardBottomNav;