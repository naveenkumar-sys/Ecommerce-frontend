import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
        const navigate = useNavigate();
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        role: "buyer",

    })

    const handleChange = (e) => {
        setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", formData);
            // console.log(response.data.message);
            toast.success(response.data.message);
            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem("token",token);
            navigate("/");
            // console.log(formData);

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }

    }
    return (
        <div className='w-full min-h-screen flex justify-center items-start'>

            <form className='bg-gray-300 w-[400px] flex flex-col gap-5 mt-10 p-7' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='text-center font-extrabold text-2xl'>Login</h1>
                <div>
                    <label htmlFor="email" className='font-bold text-md'>Email</label> <br />
                    <input type="email" name='email' value={formData.email} placeholder='Enter your email' required className='bg-white p-2 rounded-md w-full focus:outline-none' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password" className='font-bold text-md'>Password</label> <br />
                    <input type="password" name='password' value={formData.password} placeholder='Enter your password' required className='bg-white p-2 rounded-md w-full focus:outline-none' onChange={handleChange} />
                </div>
                <div>
                    <button className='font-bold text-md bg-gray-800 text-white py-1 rounded-md w-full px-3 cursor-pointer hover:bg-gray-900'>Login</button>
                </div>
                <div className='w-full text-center'>
                    <p>forget password? <span onClick={() => navigate("/forget-password")} className='hover:text-white cursor-pointer font-bold'>forget-password</span> </p>
                </div>

            </form>

        </div>
    );
};

export default Login;