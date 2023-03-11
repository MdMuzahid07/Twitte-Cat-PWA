import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    console.log(watch("example"));

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-900 min-h-screen bg-black min-w-screen">
            <div className="flex justify-center items-center min-h-screen  px-3 md:px-0">
                <div className="card flex-shrink-0 w-full max-w-lg border animate__animated animate__fadeIn bg-slate-900">
                    <div className="card-body">
                        <div className="mb-10">
                            <SocialLogin />
                        </div>
                        <hr />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="label" htmlFor="name">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input  {...register("name")} type="text" placeholder="name" className="input input-bordered w-full" id="name" />
                            </div>
                            <div>
                                <label className="label" htmlFor="email">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input  {...register("email")} type="text" placeholder="email" className="input input-bordered w-full" id="email" />
                            </div>
                            <div>
                                <label className="label" htmlFor="password">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input  {...register("password")} type="text" placeholder="password" className="input input-bordered w-full" id="password" />
                                <div className="flex">
                                    <label className="label">
                                        <a href="#/" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                    </label>
                                    <label className="label ml-5">
                                        <a href="#/" className="label-text-alt link link-hover text-white">Already have an account?</a>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="mt-6">
                            <button type="button" className="btn bg-gradient-to-r from-error to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black font-bold btn-block glass">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;