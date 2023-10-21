import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }


    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address</p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    name='email'
                    onChange={changeHandler}
                    placeholder='enter the email id' />
            </label>

            <label>
                <p>Password</p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    name='password'
                    placeholder='enter the password' />

                <span onClick={() => {
                    setShowPassword((prev) => !prev)}}>
                    {
                        showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                    }
                </span>
                <Link to="#">
                    <p>Forgot Password</p>
                </Link>
            </label>
            <button>Sign In</button>
        </form>
    )
}

export default LoginForm
