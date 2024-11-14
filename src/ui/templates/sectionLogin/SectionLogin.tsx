import { FormLogin } from "@/ui/organisms";
import "./sectionLoginStyles.scss";

export default function SectionLogin():React.ReactNode{
    return (
        <main className="content-login">
            <FormLogin />
        </main>
    )
}