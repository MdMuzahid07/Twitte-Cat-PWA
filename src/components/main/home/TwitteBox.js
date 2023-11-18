import { BsFileEarmarkImage } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

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
                            <img src="https://img.freepik.com/free-vector/night-neon-megapolis-soaring-island_1441-3150.jpg?w=1380&t=st=1700332109~exp=1700332709~hmac=cf1373e3cb95950b2e83188bc98cbe935073547db806399b1b42a04f6677be6d" alt="" />
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