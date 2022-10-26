import { data } from "../model/menuData.js";
import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../features/showMenu/showMenuSlice.js";

export const CategoryMenu = () => {
    const dispatch = useDispatch();
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div className="my-5" key={index} onClick={() => dispatch(setCategory(item.category))}>
                            <h2 className=" bg-rose-600 h-10 flex justify-center items-center rounded-3xl mx-3 text-white font-medium">{item.category}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}