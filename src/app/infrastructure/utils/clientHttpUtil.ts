export default class ClientHttpUtil {
    private path:string = "https://communnityvolunteering-production.up.railway.app/api/v1"

    constructor(pathUrlClient?:string){
        this.path = pathUrlClient || this.path
    }

    async getHeaders():Promise<{[key:string]:string}>{
        return {
            "Content-Type": "application/json"
        }
    }
    async manageError(response:Response){
        if(!response.ok){
            const dataError = await response.json();
            throw new Error("Error with the response", dataError);
        }
        return await response.json();
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
    
}