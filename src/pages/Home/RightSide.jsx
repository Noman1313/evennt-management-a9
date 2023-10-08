import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSide = () => {
    return (
        <div>
            
            <div className='p-5 space-y-3 mb-6'>
                <h2 className="text-xl font-semibold text-center">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With Github
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
        </div>
    );
};

export default RightSide;