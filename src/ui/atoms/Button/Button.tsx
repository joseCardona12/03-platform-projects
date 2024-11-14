
"use client";
import React from "react";
import "./buttonStyles.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    className:string
}
export default function Button({
    children,
    className,
    ...props

}: IButtonProps):React.ReactNode{
    return(
        <button className={`button ${className}`} {...props}>
            {children}
        </button>
    )
}