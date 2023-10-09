import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSide = () => {
    return (
        <div>

            <div className='p-5 space-y-3 mb-6'>
                <h2 className="text-xl font-semibold text-center">Event category</h2>
                <button className="btn btn-outline w-full">
                    Wedding
                </button>
                <button className="btn btn-outline w-full">
                    Birthday Party
                </button>
                <button className="btn btn-outline w-full">
                    Anniversary
                </button>
                <button className="btn btn-outline w-full">
                    Engagement Party
                </button>
                <button className="btn btn-outline w-full">
                    Retirement  Party
                </button>
                <button className="btn btn-outline w-full">
                    Baby shower
                </button>
            </div>
            <div className='p-5  mb-6'>
                <h2 className="text-xl mb-4 font-semibold text-center">Find Us On</h2>
                <a className='flex gap-4 border-2 p-4 text-2xl items-center rounded-t-lg' href="">
                    <FaFacebook className='text-blue-600 '></FaFacebook>
                    <span className=''>Facebook</span>
                </a>
                <a className='flex gap-4 border-x-2 p-4 text-2xl items-center' href="">
                    <FaTwitter className='text-blue-400'></FaTwitter>
                    <span className=''>Twitter</span>
                </a>
                <a className='flex gap-4 border-2 p-4 text-2xl items-center rounded-b-lg' href="">
                    <FaInstagram className='text-red-600'></FaInstagram>
                    <span className=''>Instagram</span>
                </a>
            </div>
            <div>
                <h2></h2>
            </div>
        </div>
    );
};

export default RightSide;