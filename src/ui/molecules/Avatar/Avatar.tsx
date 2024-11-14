"use client";
import { IconArrowDown } from "@/assets/icons";
import "./avatarStyles.scss";

interface IAvatarProps{
    url_image:string,
    name:string,

}
export default function Avatar({
    url_image,
    name
}:IAvatarProps):React.ReactNode{
    const handleClick = () => {
        console.log("click")
    }
    return (
        <div className="content-avatar">
            <div className="avatar-image">
                {url_image}
            </div>
            <p className="avatar-name">{name}</p>
            <IconArrowDown onClick={handleClick} />
        </div>
    )
}