import { Hero } from "@/ui/molecules";
import "./sectionHomeStyles.scss";

interface ISectionHomeProps{
    title:string,
    description:string,
    buttonNames:string[],
    url_buttons: string[]
}
export default function SectionHome({
    title,
    description,
    buttonNames,
    url_buttons
}:ISectionHomeProps):React.ReactNode{
    return (
        <main className="content-home">
            <Hero
                title={title}
                description={description}
                buttonNames={buttonNames}
                url_buttons={url_buttons}
            />
        </main>
    )
}