import React, { useState } from 'react';
import "./LoginSignUp.css";
import SocialLogin from './SocialLogin';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import LoadingSpinner from '../components/LoadingSpinner';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (loading && !user) {
        return <LoadingSpinner />
    }
    if (!loading && !user && error) {
        toast.error(error.message, { id: "error" });
        return navigate("/login");
    }
    if (!loading && user && !error) {
        toast.success(user.email, { id: "success" });
        return navigate("/profile");
    }


    return (
        <div className="bg-gradient-to-r bg-blue-500 min-h-screen">
            <div className="flex justify-center items-center min-h-screen  px-3 md:px-0">
                <div className="card flex-shrink-0 w-full max-w-lg animate__animated animate__fadeIn bg-slate-900">
                    <div className="card-body">
                        <div className="mb-10">
                            <SocialLogin />
                        </div>
                        <hr />
                        <h1 className="text-white my-3 text-2xl">Login</h1>
                        <div >
                            {/* <div>
                                <label className="label" htmlFor="name">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input  {...register("name")} type="text" placeholder="name" className="input input-bordered w-full" id="name" />
                            </div> */}
                            <div>
                                <label className="label" htmlFor="email">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email address" className="input input-bordered w-full" id="email" />
                            </div>
                            <div>
                                <label className="label" htmlFor="password">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="enter a strong password" className="input input-bordered w-full" id="password" />

                                <div className="flex">
                                    <label className="label">
                                        <a href="#/" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                    </label>
                                    <label className="label ml-5">
                                        <button onClick={() => navigate("/signUp")} className="label-text-alt link link-hover text-white">New here? Register</button>
                                    </label>
                                </div>

                            </div>
                            <div className="mt-6">
                                <button onClick={() => signInWithEmailAndPassword(email, password)} className="btn bg-white text-blue-500 font-bold btn-block">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;