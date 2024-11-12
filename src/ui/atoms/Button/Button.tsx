import React from "react";
import "./buttonStyles.scss";

interface IButtonProps{
    children: React.ReactNode,
    className:string
}
export default function Button({
    children,
    className

}: IButtonProps):React.ReactNode{
    return(
        <button className={`${className} button`}>
            {children}
        </button>
    )
}