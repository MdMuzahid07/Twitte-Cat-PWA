import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import LoadingSpinner from '../components/LoadingSpinner';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gUser, gLoading, gError] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    if (user || gUser) {
        if (user) {
            toast.success(`Welcome ${user?.user.displayName}`);
        } else if (gUser) {
            toast.success(`Welcome ${gUser?.user.displayName}`);
        }
        navigate("/");
    } else if (loading || gLoading) {
        return <LoadingSpinner />;
    } else if (error || gError) {
        if (error) {
            toast.error(error.message);
        } else if (gError) {
            toast.error(gError.message);
        }
    };



    return (
        <div>
            <button onClick={() => signInWithGoogle()} type="button" className="btn btn-accent btn-outline font-bold btn-block rounded-full mb-3">Continue with Google</button>
            <button onClick={() => signInWithGithub()} type="button" className="btn btn-accent btn-outline font-bold btn-block rounded-full">Continue with Github</button>
        </div>
    );
};

export default SocialLogin;