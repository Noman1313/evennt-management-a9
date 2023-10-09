import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../routes/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import toast from "react-hot-toast";


const Login = () => {


    const { signIn } = useContext(AuthContext)

    const location = useLocation()

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);



        if (password.length < 6) {
            toast.error('password must be 6 letter')
            return;
        }


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Log in successful')
                navigate(location?.state ? location.state : '/home')
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center mt-5">Do not Have An Account ? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
                        <GoogleLogin></GoogleLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;


