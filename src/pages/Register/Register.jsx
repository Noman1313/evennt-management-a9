import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../routes/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";



const Register = () => {
    const [validPass, setValidPass] = useState('')

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password);

        setValidPass('')
        if(password.length < 6){
            setValidPass('must be 6 letters')
            return
        }
        else if (/^(?!.*[A-Z])(?!.*[@$!%*?&])/.test(password)) {
            setValidPass('please give me valid password')
            return;
        }




        // createUser
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/home')
            })
            .catch(error => {
                console.error(error);
            })


    }





    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        {
                            validPass && <p>{validPass}</p>
                        }
                        <p className="text-center mt-5">Already Have An Account ? <Link className="text-blue-600 font-bold" to='/'>Login</Link></p>
                        <GoogleLogin></GoogleLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;