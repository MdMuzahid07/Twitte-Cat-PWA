import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import LoadingSpinner from '../components/LoadingSpinner';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        toast.success(`Welcome ${user?.user.displayName}`);
        navigate("/");
    } else if (loading) {
        return <LoadingSpinner />;
    } else if (error) {
        toast.error(error.message);
    };



    return (
        <div>
            <button onClick={() => signInWithGoogle()} type="button" className="btn btn-accent btn-outline font-bold btn-block rounded-full mb-3">Continue with Google</button>
            <button type="button" className="btn btn-accent btn-outline font-bold btn-block rounded-full">Continue with Github</button>
        </div>
    );
};

export default SocialLogin;