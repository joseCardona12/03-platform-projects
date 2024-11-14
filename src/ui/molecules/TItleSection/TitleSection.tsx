"use client";
import { Input } from "@/ui/atoms";
import { useState } from "react";
import "./titleSectionStyles.scss";


interface ITitleProps{
    title:string,
}
export default function TitleSection ({
    title,
}:ITitleProps):React.ReactNode{

    const [search, setSearch] = useState<string>("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {

    }
    return (
        <div className="content-title">
            <h4 className="title-section">{title}</h4>
            <Input
                placeholder="Buscar proyectos..."
                onChange={handleChange}
                type="search"
                width="30%"
            />
        </div>
    )
}