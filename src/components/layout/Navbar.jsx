import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const{user}=useContext(authContext);
    return (
        <div>
            <nav className='flex justify-between items-center p-3 relative'>
                <h1 className='font-bold text-xl cursor-pointer'>Tech Store</h1>
                <div className='hidden md:flex justify-center gap-5'>
                    <h1 className='text-lg font-bold cursor-pointer ' onClick={() => navigate("/")}>Home</h1>
                    <h1 className='text-lg font-bold cursor-pointer' onClick={() => navigate("/login")}>Login</h1>
                </div>
                <span className='text-lg font-bold cursor-pointer' onClick={() => { navigate("/cart") }}><FaShoppingCart className='md:size-10' /></span>
                <h1>{user.email}</h1>
                {/* <div className='md:hidden'>
                    <BiMenu className='size-3 ' onClick={() => setToggle(true)} />
                </div> */}
                {/* {
                    toggle && <div className='w-full bg-black text-white rounded-xl shadow-2xl p-7 cursor-pointer text-center absolute top-15'>
                        <h1 className=' font-bold py-2' onClick={() => { setToggle(false), navigate("/") }}>Home</h1>
                        <h1 className='font-bold py-2' onClick={setToggle(false), navigate("/login")}>Login</h1>
                    </div>
                } */}
            </nav>
        </div>
    );
};

export default Navbar;