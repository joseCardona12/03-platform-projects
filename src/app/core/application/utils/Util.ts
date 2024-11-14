import { IProject } from "../dto/projects";

class UtilApplication{
    
    separateName(email:string):string{
        const arrayName: string[] = email.split("@");
        return arrayName[0];
    }
    searchProjectByTitle(projects: IProject[], search: string):IProject[]{
    if(!search){
        return projects;
    };
    return projects.filter((project:IProject)=>project.title.includes(search.toLocaleLowerCase()));
    }

}


export default new UtilApplication();