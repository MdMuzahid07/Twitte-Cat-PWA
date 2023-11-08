import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineLink } from 'react-icons/ai';
import { BsCalendarCheck } from 'react-icons/bs';
import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const navigate = useNavigate();

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    const handleSignOut = async () => {
        const success = await signOut();
        if (success) {
            toast.success('You are sign out');
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
                        } src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="Shoes" />
                </div>
                <div className="flex justify-between items-center">
                    <div style={{ marginTop: "-54px" }}>
                        <div className="avatar online border border-2 rounded-full ml-5">
                            <div className="w-28 rounded-full">
                                <img src="https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
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