import Link from "next/link"


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
            <Link href={href}>{text}</Link>
        </li>
    )
}