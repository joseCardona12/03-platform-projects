import { IProjectResponse } from "@/app/core/application/dto/projects";
import { PProject } from "@/app/core/application/ports/projectPort";
import { ProjectService } from "@/app/infrastructure/services";
import { Dashboard } from "@/ui/templates";
import ProjectState from "./ProjectState";
import { title } from "process";


interface IDashboardViewProps{
    searchParams: {
        page: string,
        totalPages:string,
        name:string
    }
}

const generateMetadata = async({searchParams}: IDashboardViewProps) =>{
    const page:number = parseInt(searchParams.page) | 1;
    return {
        title: `Dashboard ${page}`,
        description: "Dashboard"
    }
}

const ServiceProject:PProject = new ProjectService();
export default async function DashboardView({searchParams}:IDashboardViewProps){
    const page:number = searchParams.page ? parseInt(searchParams.page) : 1;
    const size: number = searchParams.totalPages ?  parseInt(searchParams.totalPages) : 6;

    const projects: IProjectResponse = await ServiceProject.getProjects({page,size});

    return (
        <ProjectState projects={projects.data} metaData={projects.metadata}>
            <Dashboard /> 
        </ProjectState>
    )
}