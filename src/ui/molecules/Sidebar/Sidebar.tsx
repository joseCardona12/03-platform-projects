import { IconFolder, IconLogOut } from "@/assets/icons";
import { Identify, ItemNavbar } from "@/ui/atoms";
import "./sidebarStyles.scss";

export default function Sidebar():React.ReactNode{
    return(
        <div className="sidebar">
            <Identify
                link_logo="/dashboard"
                text="VolunteerConnect"
            />
            <ul className="sidebar-list">
                <ItemNavbar 
                    href="/Proyectos" 
                    text="Dashboard" 
                    icon={<IconFolder />}
                />
                <ItemNavbar 
                    href="/Cerrar sesiòn" 
                    text="Dashboard" 
                    icon={<IconLogOut />}
                />
            </ul>
        </div>
    )
}