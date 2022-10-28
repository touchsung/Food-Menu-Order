import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { count } from "../features/Cart/cartSlice";


export const ListTotalCart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // console.log(cart.totalCart);

    return (
        <div>
            <h2 className="my-4 font-medium">Total Cart</h2>
            <hr />
            <ul className=" overflow-y-scroll h-[460px]">
                {cart.totalCart.map((item, index) => {
                    return (
                        <li key={index} className="flex items-center justify-between">
                            <h2 className="my-4 font-medium">{item.name}</h2>
                            <div className="grid grid-cols-3 gap-2 mr-4">
                                <button className=" bg-green-400 w-8 h-8 rounded-2xl flex items-center justify-center relative"><h3 className="text-2xl font-bold absolute top-[-2px] text-white" onClick={() => dispatch(count({ name: item.name, price: 0, type: 'add' }))}>+</h3></button>
                                <h2 className="font-medium flex items-center justify-center">{item.quantity}</h2>
                                <button className=" bg-rose-400 w-8 h-8 rounded-2xl flex items-center justify-center relative"><h3 className="text-2xl font-bold absolute top-[-2px] text-white" onClick={() => dispatch(count({ name: item.name, price: 0, category: item.category, type: 'remove' }))}>-</h3></button>
                            </div>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}