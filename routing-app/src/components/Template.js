import React from 'react'
import SignupForm from '../components/SignupForm'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import Image from '../assets/login.png'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    console.log(formtype)
    return (
        <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

            <div className='w-11/12 max-w-[450px]' >
                <h1
                className='text-white'
                >{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {
                    formtype === "signup" ?
                        (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                        (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }


                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign Up with Google</p>
                </button>

            </div>

            <div>
                <img src={frameImage}
                    alt="pattern"
                    width={558}
                    height={504}
                    loading='lazy' />

                <img src={Image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading='lazy' />
            </div>

        </div>
    )
}

export default Template
