import { ButtonsDownload } from "@/ui/molecules";
import Avatar from "@/ui/molecules/Avatar/Avatar";
import "./headerDashboardStyles.scss";

export default function HeaderDashboard():React.ReactNode{
    return (
        <header className="header-dashboard">
            <h3 className="header-page">
                Dashboard de Proyectos
            </h3>
            <div className="dashboard-right">
                <ButtonsDownload />
                <Avatar
                    url_image="/"
                    name="Jose Cardona"
                />
            </div>
        </header>
    )
}