
import { Button } from "@/ui/atoms";
import "./tableStyles.scss";
import { Pagination } from "@/ui/molecules";
import "./tableStyles.scss";
import { IProject } from "@/app/core/application/dto/projects";
import { ProjectService } from "@/app/infrastructure/services";

interface ITableProps{
    columns: string[],
    rows: IProject[]
}

export default function Table({
    columns,
    rows,
}:ITableProps):React.ReactNode{

    const handleDelete = async(id: number): Promise<void> => {
        const ServiceProject = new ProjectService();
        const data = await ServiceProject.deleteProject(id);
        console.log("hello",data);
    }

    return(
        <table className="table">
            <thead className="table-head">
                <tr>
                    {columns.map((column:string, index:number) => (
                        <th className={`head-item${index}`} key={index}>{column}</th>
                    ))}
                    <th>
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody className="table-body">
                {rows.map((row:IProject, index:number) =>(
                    <tr className={`body-item${index}`}  key={index}>
                        <td>{row.title}</td>
                        <td>{row.description}</td>
                        <td>{row.startDate}</td>
                        <td>{row.endDate}</td>
                        <td>
                            <p style=
                            {{backgroundColor: row.isActive ? "var(--background-color-green)" : "red", 
                            color: "var(--color-black)", 
                            borderRadius: "var(--border-radius-extra-small)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "var(--padding-extra-small)",
                        }}
                            >{row.isActive ? "Activo" : "Inactivo"}</p>
                        </td>
                        <td>{row.organizer.name}</td>
                        <td>
                            <Button className="button-table-edit">Editar</Button>
                            <Button onClick={()=>handleDelete(row.id)} className="button-table-delete">Eliminar</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}