import { BsFileEarmarkImage } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { starLink } from '../../../assets';

const TwitteBox = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <header className="py-7 px-4 lg:sticky lg:top-0 z-20 bg-base-100">
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
                    <button type="submit" className="btn btn-sm rounded-2xl bg-blue-400 text-white border-0">Post</button>
                </div>
            </form>
            <hr className="mt-3" />
        </header>
    );
};

export default TwitteBox;