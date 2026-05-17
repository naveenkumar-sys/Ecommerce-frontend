
import React, { useContext, useMemo } from 'react';
import { MyCartContext } from '../../context/CartContext';
import { FaRupeeSign, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cart, dispatch } = useContext(MyCartContext);
    const navigate = useNavigate();

    const totalPrice = useMemo(() => {
        return cart.reduce(
            (acc, ele) => acc + ele.price * ele.quantity,
            0
        );
    }, [cart]);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <button onClick={() => navigate("/")} >Back</button>
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="flex items-center gap-3 mb-8">
                    <FaShoppingCart className="text-3xl text-blue-600" />
                    <h1 className="text-3xl font-bold text-gray-800">
                        My Cart
                    </h1>
                </div>

                {/* Empty Cart */}
                {cart.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-md p-10 text-center">
                        <h1 className="text-3xl font-bold text-gray-700 mb-3">
                            Your Cart is Empty
                        </h1>

                        <p className="text-gray-500">
                            Add products to your cart to continue shopping.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">

                            {cart.map((ele) => (
                                <div
                                    key={ele._id}
                                    className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all duration-300"
                                >

                                    {/* Product Image */}
                                    <div className="w-full md:w-52 h-52 overflow-hidden rounded-xl bg-gray-100">
                                        <img
                                            src={ele.images[1]}
                                            alt={ele.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 flex flex-col justify-between">

                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                                {ele.title}
                                            </h2>

                                            <p className="text-gray-600 line-clamp-3 mb-4">
                                                {ele.description}
                                            </p>

                                            <div className="flex items-center text-2xl font-bold text-green-600">
                                                <FaRupeeSign />
                                                {ele.price}
                                            </div>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className='flex items-center justify-between'>
                                            <div className="flex items-center gap-4">

                                                <button
                                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "DECREASE",
                                                            payload: ele
                                                        })
                                                    }
                                                >
                                                    -
                                                </button>

                                                <span className="text-2xl font-bold text-gray-800">
                                                    {ele.quantity}
                                                </span>

                                                <button
                                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "INCREASE",
                                                            payload: ele
                                                        })
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE",
                                                            payload: ele
                                                        })
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-10">

                            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
                                Order Summary
                            </h2>

                            <div className="space-y-4">

                                <div className="flex justify-between text-lg">
                                    <span>Total Items</span>
                                    <span className="font-semibold">
                                        {cart.length}
                                    </span>
                                </div>

                                <div className="flex justify-between text-lg">
                                    <span>Total Price</span>

                                    <span className="font-bold flex items-center text-green-600">
                                        <FaRupeeSign />
                                        {totalPrice}
                                    </span>
                                </div>
                            </div>

                            <button className="w-full mt-8 bg-black hover:bg-gray-800 text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;

