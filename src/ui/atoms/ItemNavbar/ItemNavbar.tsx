import Link from "next/link";
import "./itemNavbarStyles.scss";


interface IItemNavbarProps {
    href:string,
    text:string,
    icon?:React.ReactElement
}
export default function ItemNavbar({
    href,
    text,
    icon,
}:IItemNavbarProps):React.ReactNode{
    return(
        <li className="list-item">
            {icon && <span className="item-icon">{icon}</span>}
            <Link className="item-link" href={href}>{text}</Link>
        </li>
    )
}