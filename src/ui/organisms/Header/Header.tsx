import { Identify } from "@/ui/atoms";
import { Navbar } from "@/ui/molecules";
import "./headerStyles.scss";

export default function Header():React.ReactNode{
    return(
        <header className="header">
            <Identify
                text="VolunteerConnect"
                link_logo="/"
            />
            <Navbar
                items={["login", "register"]}
            />
        </header>
    )
}