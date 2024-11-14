import "./cardStyles.scss";

interface ICardProps{
    title:string,
    icon?:React.ReactElement,
    body:string,
}

export default function Card({
    title,
    icon,
    body,
}:ICardProps):React.ReactNode{
    return (
        <div className="card">
            <div className="card-header">
                <h5>{title}</h5>
                {icon}
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>
    )
}