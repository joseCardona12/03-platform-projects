import { cookies } from "next/headers";
export default class ClientHttpUtil {
    private path:string = "https://communnityvolunteering-production.up.railway.app/api/v1";

    constructor(pathUrlClient?:string){
        this.path = pathUrlClient || this.path
    }

    async getHeaders():Promise<{[key:string]:string}>{
        const storeCookie = cookies();
        const token = storeCookie.get("access_token");
        if(!token){
            return {
                "Content-Type": "application/json"
            }
        }
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }    
    }
    async manageError(response:Response){
        if(!response.ok){
            const dataError = await response.json();
            throw new Error("Error with the response", dataError);
        }
        return await response.json();
    }

    async get<Res>(url:string):Promise<Res>{
        const headers: {[key:string]:string} = await this.getHeaders();
        const response = await fetch(`${this.path}/${url}`, {
            headers,
        });
        return await this.manageError(response);
    }


    async post<Req,Res>(url:string, data:Req, type?:string):Promise<Res>{
        const headers: {[key:string]:string} = await this.getHeaders();
        console.log(url, this.path)
        const response = await fetch(`${this.path}/${url}`, {
            headers,
            method: "POST",
            body: JSON.stringify(data)
        });
        return await this.manageError(response);
    }

    async destroy<Res>(url:string):Promise<Res>{
        const headers: {[key:string]:string} = await this.getHeaders();
        console.log(url, this.path);
        const response = await fetch(`${this.path}/${url}`, {
            headers,
            method: "DELETE",
        });
        console.log("res", response)
        return await this.manageError(response);
    }
    
}