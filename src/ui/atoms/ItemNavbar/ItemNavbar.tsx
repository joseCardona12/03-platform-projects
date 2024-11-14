import Link from "next/link";
import "./itemNavbarStyles.scss";


interface IItemNavbarProps {
    href:string,
    text:string,
    icon?:React.ReactElement,
    className?:string
}
export default function ItemNavbar({
    href,
    text,
    icon,
    className
}:IItemNavbarProps):React.ReactNode{
    return(
        <li className={`list-item ${className}`}>
            {icon && <span className="item-icon">{icon}</span>}
            <Link className="item-link" href={href}>{text}</Link>
        </li>
    )
}