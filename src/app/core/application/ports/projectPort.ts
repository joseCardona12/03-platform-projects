import { IProjectRequest, IProjectResponse } from "../dto/projects";

export interface PProject{
    /***
     * @params getProjects
     * @returns Promise<IProjectResponse>
     */
    getProjects(pagination: IProjectRequest): Promise<IProjectResponse>;
    deleteProject(id:number | string):Promise<{message:string,statusCode:number} | void>;
}
