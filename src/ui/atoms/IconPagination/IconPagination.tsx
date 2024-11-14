import "./iconPaginationStyles.scss";


interface IIconPaginationProps {
    icon?: React.ReactElement;
    onClick?: () => void;
}
export default function IconPagination({
    icon,
    onClick
}:IIconPaginationProps):React.ReactNode{
    return (
        <div className="content-icon" onClick={onClick}>
            {icon}
        </div>
    )
}