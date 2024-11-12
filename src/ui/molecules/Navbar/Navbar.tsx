import { ItemNavbar } from "@/ui/atoms";

export default function Navbar():React.ReactNode{
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <ItemNavbar
                    href="/login"
                    text="Iniciar sessión"
                />
                <ItemNavbar
                    href="/register"
                    text="Registrarse"
                />
            </ul>
        </nav>
    )
}