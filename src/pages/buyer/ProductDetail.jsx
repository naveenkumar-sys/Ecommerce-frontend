import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyCartContext } from "../../context/CartContext";
const ProductDetail = () => {
    const [prod, setProd] = useState(null);
    const { id } = useParams();
    const { cart, dispatch } = useContext(MyCartContext)


    useEffect(() => {
        apicall();
    }, [id]);

    const apicall = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/products/getProduct/${id}`
            );

            setProd(response.data.findProduct);
        } catch (error) {
            console.log(error);
        }
    };

    // Loading
    if (!prod) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">
                    Loading...
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

                {/* Product Image */}
                <div>
                    <img
                        src={prod?.images?.[1]}
                        alt={prod.title}
                        className="w-full h-[500px] object-contain rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-5">

                    <h1 className="text-4xl font-bold">
                        {prod.title}
                    </h1>

                    <p className="text-gray-600 text-lg">
                        {prod.description}
                    </p>

                    <h2 className="text-3xl font-bold text-green-600">
                        ₹ {prod.price}
                    </h2>

                    <div className="flex items-center gap-5">
                        <p className="text-lg">
                            <span className="font-semibold">
                                Category:
                            </span>{" "}
                            {prod.category}
                        </p>

                        <p className="text-lg">
                            <span className="font-semibold">
                                Stock:
                            </span>{" "}
                            {prod.stock}
                        </p>
                    </div>

                    <div className="flex items-center gap-5">
                        <p className="text-lg font-semibold">
                            Rating: ⭐ {prod.rating}
                        </p>

                        <p className="text-lg font-semibold">
                            Reviews: {prod.numbOfReviews}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-5 mt-5">

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" onClick={() => { dispatch({ type: "ADD", payload: prod }) }}>
                            Add To Cart
                        </button>

                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                            Buy Now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;