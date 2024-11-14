import { ICard } from "@/app/core/application/interfaces"
import Card from "@/ui/molecules/Card/Card";
import "./sectionCardStyles.scss";

interface ISectionCardProps{
    cards: ICard[]
}

export default function SectionCard({cards}: ISectionCardProps):React.ReactNode{
    return (
        <section className="section-cards">
            {cards.map((card:ICard, index:number) => (
                <Card
                    title={card.title}
                    icon={card.icon}
                    body={card.body}
                    key={index}
                />
            ))}
        </section>
    )
}