import React from "react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text?: string,
}


export default function Button({
    text,

}: ButtonProps):React.ReactNode{
    return(
        <button>
            {text}
        </button>
    )
}