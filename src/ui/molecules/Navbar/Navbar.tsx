import { ItemNavbar } from "@/ui/atoms";

interface INavbarProps{
    items?: string[],
}
export default function Navbar({
    items,
}: INavbarProps):React.ReactNode{
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                {items?.map((item:string)=>(
                    <ItemNavbar 
                        text={item}
                        href={`/${item}`}
                    />
                ))}
            </ul>
        </nav>
    )
}