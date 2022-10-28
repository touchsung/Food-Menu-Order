import React from "react";
import { data } from "../model/menuData";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../features/Cart/cartSlice";

export const ListMenu = () => {
    const category = useSelector(state => state.category.category);
    const dispatch = useDispatch();
    return (
        <div className="overflow-scroll h-[800px] pb-28 px-1">
            {
                data.map((item, index) => {
                    return (
                        (item.category === category) && (
                            <div key={index}>
                                <h2 className="my-4 font-medium">{item.category}</h2>
                                <hr />
                                <ul className="grid grid-cols-2 my-5 gap-5">
                                    {
                                        item.list.map((itemList, index) => {
                                            return (
                                                <li key={index} className="flex justify-between items-center p-2 flex-col drop-shadow-md rounded-md bg-white text-center" onClick={() => dispatch(addCart({ name: itemList.name, price: 0, quantity: 1, category: item.category, img: itemList.img }))
                                                }>
                                                    <h3 className="text-black font-semibold text-sm h-[100%] flex items-center">{itemList.name}</h3>
                                                    <img src={itemList.img} alt={itemList.name} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    )
                })
            }
        </div >
    )
}