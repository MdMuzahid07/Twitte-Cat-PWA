import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineLink } from 'react-icons/ai';
import { BsCalendarCheck } from 'react-icons/bs';
import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner';
import { starLink } from '../../../assets';

const ProfileHeader = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const navigate = useNavigate();

    if (error) {
        return toast.error(error.message);
    }
    if (loading) {
        return <LoadingSpinner />
    }

    const handleSignOut = async () => {
        const success = await signOut();
        if (success) {
            toast.success('You are sign out');
            navigate("/login")
        }
    };

    return (
        <section className="">
            <div className="card w-full bg-base-100">
                <div>
                    <img style=
                        {
                            {
                                maxHeight: "200px",
                                minWidth: "100%",
                                objectFit: "cover",
                                objectPosition: "center"
                            }
                        } src={starLink} alt="" />
                </div>
                <div className="flex justify-between items-center">
                    <div style={{ marginTop: "-54px" }}>
                        <div className="avatar online border border-2 rounded-full ml-5">
                            <div className="w-28 rounded-full">
                                <img src="https://img.freepik.com/free-photo/full-shot-female-astronaut-wearing-spacesuit_23-2150417571.jpg?t=st=1699976271~exp=1699979871~hmac=54e925740608ef87c0360c3983e73a4280d5f402838e0968e62ffe0294f22cad&w=1380" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mr-5">
                        <button onClick={() => navigate("/profileUpdate")} className="btn btn-xs btn-outline rounded-full">Edit profile</button>
                        <button onClick={() => handleSignOut()} className="btn btn-xs border-0 bg-red-400 rounded-full ml-4">Sign Out</button>
                    </div>
                </div>
                <div className="rounded-0 p-5">
                    <h2 className="card-title">MR.CAT@</h2>
                    <p>@MrCat7845637865</p>
                    <div className="mt-5">
                        <p>Hello world, i'm mr cat, i sleep all day long, and eat fish and meow when i hungry and angry</p>
                    </div>
                    <div className="grid md:grid-cols-3 mt-5">
                        <div className="flex items-center">
                            <CiLocationOn />
                            <p className="ml-2">Earth, Universe</p>
                        </div>
                        <div className="flex items-center">
                            <AiOutlineLink />
                            <p className="ml-2">meow.com</p>
                        </div>
                        <div className="flex items-center">
                            <BsCalendarCheck />
                            <p className="ml-2 ">Joined Dec 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-3" />
        </section >
    );
};

export default ProfileHeader;