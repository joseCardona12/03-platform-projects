import Link from "next/link";
import "./itemNavbarStyles.scss";


interface IItemNavbarProps {
    href:string,
    text:string
}
export default function ItemNavbar({
    href,
    text
}:IItemNavbarProps):React.ReactNode{
    return(
        <li className="list-item">
            <Link className="item-link" href={href}>{text}</Link>
        </li>
    )
}