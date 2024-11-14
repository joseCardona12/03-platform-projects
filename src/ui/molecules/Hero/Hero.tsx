import { Button } from "@/ui/atoms";
import "./heroStyles.scss";

interface IHeroProps{
    title:string,
    description:string,
    buttonNames:string[]
    url_buttons:string[]
}
export default function Hero({
    title,
    description,
    buttonNames,
    url_buttons
}:IHeroProps):React.ReactNode{
    return(
        <div className="main-hero">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">{description}</p>
            <div className="hero-buttons">
                {buttonNames.map((nameButton:string, index:number)=>(
                    <Button className={`button-hero-${index}`}>
                        {nameButton}
                    </Button>
                ))}
            </div>
        </div>
    )
}