import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = ({setIsLoggedIn}) => {
    
    const navigate =useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }


    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("password not matched");
        }

        setIsLoggedIn(true);
        toast.success("account created")

        const accountData = {
            ...formData
        };
        console.log("below is account data")
        console.log(accountData);

        navigate("/dashboard")
    }

    return (
        <div>
            {/* student instructor tab */}

            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>

                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='first name'
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='first name'
                            value={formData.lastName}
                        />
                    </label>
                </div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Password'
                        value={formData.password}
                    />
                    <span onClick={() => {
                        setShowPassword((prev) => !prev)
                    }}>
                        {
                            showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                        }
                    </span>
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                    />
                    <span onClick={() => {
                        setShowPassword((prev) => !prev)
                    }}>
                        {
                            showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                        }
                    </span>
                </label>

                    <button>Create Account</button>
          
            </form>

        </div>
    )
}

export default SignupForm
