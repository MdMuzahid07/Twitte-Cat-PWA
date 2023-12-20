import { BsFileEarmarkImage } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { starLink } from '../../assets';


const MeowITModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id="meowit-modal" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-12 h-12 rounded-full">
                                    <img src={starLink} alt="" />
                                </div>
                            </div>
                            <div className="my-2">
                                <input  {...register("twitteText", { required: true })} type="text" placeholder="Whats happening?" className="input inline-block w-full border-0 focus:outline-none" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <div>
                                <label htmlFor="img">
                                    <BsFileEarmarkImage />
                                </label>
                                <input  {...register("twitteThumbnail")} type="file" className="hidden" id="img" />
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button type="submit" className="btn btn-xs md:btn-md rounded-full bg-blue-500 px-4 text-white">Post</button>
                                </form>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default MeowITModal