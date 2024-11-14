import { ItemNavbar } from "@/ui/atoms";
import "./navbarStyles.scss";

interface INavbarProps{
    items?: string[],
}
export default function Navbar({
    items,
}: INavbarProps):React.ReactNode{
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                {items?.map((item:string, index:number)=>(
                    <ItemNavbar 
                        text={item}
                        href={`/${item}`}
                        key={index}
                    />
                ))}
            </ul>
        </nav>
    )
}