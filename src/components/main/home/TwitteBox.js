import React from 'react';
import { BsFileEarmarkImage } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const TwitteBox = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <header className="my-4">
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="" />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-2">
                    <input  {...register("twitteText", { required: true })} type="text" placeholder="Whats happening?" className="input w-full border border-blue-400" />
                </div>
                <div className="flex justify-between items-center">
                    <div className="border border-blue-400 rounded-full p-2">
                        <label htmlFor="img">
                            <BsFileEarmarkImage />
                        </label>
                        <input  {...register("twitteThumbnail")} type="file" className="hidden" id="img" />
                    </div>
                    <button type="submit" className="btn btn-sm  btn-outline btn-circle bg-blue-400 border-0"><AiOutlineArrowUp /></button>
                </div>
            </form>
            <hr className="mt-3" />
        </header>
    );
};

export default TwitteBox;