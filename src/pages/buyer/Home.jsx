import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ui/ProductCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        apicall();
    }, [])


    const apicall = async () => {
        const response = await axios.get("http://localhost:5000/api/products/getAllProducts");
        // console.log(response);
        setProducts(response.data.Products)

    }

    if (!products) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">
                    Loading...
                </h1>
            </div>
        )

    }

    // console.log(products);

    return (
        <div className='flex gap-5 w-full justify-center mt-10 flex-wrap'>
            {
                products.map((ele, index) => {
                    return (
                        <div key={index} className='bg-gray-300 shadow-2xl w-[300px] p-5 rounded-lg hover:scale-95 cursor-pointer' onClick={() => { navigate(`/productDetails/${ele._id}`) }}>
                            <ProductCard key={index} ele={ele} />

                        </div>
                    )

                })
            }

            <h1 onClick={() => { navigate("/cart") }}>🛒</h1>

        </div>
    );
};

export default Home;