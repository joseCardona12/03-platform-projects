import { IProjectRequest, IProjectResponse } from "@/app/core/application/dto/projects";
import { PProject } from "@/app/core/application/ports/projectPort";
import { ClientHttpUtil } from "../utils";

export default class ProjectService implements PProject{
    private clientHttp: ClientHttpUtil;
    
    constructor(){
        this.clientHttp = new ClientHttpUtil();
    }
    async getProjects(pagination: IProjectRequest): Promise<IProjectResponse> {
        if(!pagination){
            return await this.clientHttp.get<IProjectResponse>(`projects`);
        }
        return await this.clientHttp.get<IProjectResponse>(`projects?page=${pagination.page}&size=${pagination.size}`);
    }

    async deleteProject(id: number | string): Promise<{ message: string; statusCode: number; } | void> {
        console.log("id", id);
        return await this.clientHttp.destroy<IProjectResponse>(`projects/${id}`);
    }
}
