import React, { useReducer } from 'react';
import { createContext } from 'react';
import { reducerFn } from '../reducers/cartReducer';


export const MyCartContext = createContext();
const initialState=[];
const CartContext = ({children}) => {
    const[cart,dispatch]=useReducer(reducerFn,initialState);

    console.log(cart);
    

    return (
        <div>
            <MyCartContext.Provider value={{cart,dispatch}}>
                {children}
            </MyCartContext.Provider>
        </div>
    );
};

export default CartContext;