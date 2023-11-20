import React, { useState } from 'react';
import "./LoginSignUp.css";
import SocialLogin from './SocialLogin';
import { toast } from 'react-toastify';
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

    if (error) {
        toast.error(error.message)
        return navigate("/login");
    }
    if (loading) {
        return <LoadingSpinner />;
    }
    if (user) {
        return toast.success(user.user.email);
    }



    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-900 min-h-screen bg-black">
            <div className="flex justify-center items-center min-h-screen  px-3 md:px-0">
                <div className="card flex-shrink-0 w-full max-w-lg border animate__animated animate__fadeIn bg-slate-900">
                    <div className="card-body">
                        <div className="mb-10">
                            <SocialLogin />
                        </div>
                        <hr />
                        <div>
                            <div>
                                <label className="label" htmlFor="email">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input onClick={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email address" className="input input-bordered w-full" id="email" />
                            </div>
                            <div>
                                <label className="label" htmlFor="password">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input onClick={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered w-full" id="password" />
                                <div className="flex">
                                    <label className="label">
                                        <a href="#/" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                    </label>
                                    <label className="label ml-5">
                                        <button onClick={() => navigate("/signUp")} className="label-text-alt link link-hover text-white">New here?</button>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button onClick={() => signInWithEmailAndPassword(email, password)} className="btn bg-gradient-to-r from-error to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black font-bold btn-block">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;