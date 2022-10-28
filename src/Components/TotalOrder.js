import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggle } from "../features/Cart/cartSlice";

export const TotalOrder = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart);
    console.log(cart.soup);
    return (
        <div className="h-[90%] bottom-0 w-[90%] absolute top-[50px] left-[50px] drop-shadow-md rounded-md bg-white p-5 z-40">
            <div className="flex">
                <h2 className="my-4 font-medium mr-5">Total Order</h2>
                <h2 className=" bg-rose-600 h-10 flex justify-center items-center rounded-3xl mx-3 text-white font-medium my-2 w-100 px-3">Soup : {cart.soup.map((item, index) => index === cart.soup.length - 1 ? item.name : item.name + ' , ')} </h2>
            </div>
            <hr />
            <div className="h-[520px] my-2 pl-5">
                <ul className=" overflow-y-scroll h-[520px]">
                    {cart.totalCart.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center justify-between">
                                <h2 className="my-4 font-medium">{item.name}</h2>
                                <div className="mr-8">
                                    <h2 className="font-medium flex items-center justify-center">{item.quantity}</h2>
                                </div>
                            </li>

                        )
                    })}
                </ul>
            </div>
            <div className="flex justify-center">
                <button className=" bg-green-400 w-28 h-8 rounded-2xl flex items-center justify-center relative mx-2 text-xl font-semibold  text-white" onClick={() => {
                    alert("Order successfully")
                    dispatch(clearCart())
                }}>Order</button>
                <button className=" bg-rose-400 w-28 h-8 rounded-2xl flex items-center justify-center relative mx-2 text-xl font-semibold  text-white" onClick={() => dispatch(toggle({ type: 'cancel' }))}>Cancel</button>
            </div>
        </div>
    )
};