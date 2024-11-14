
export interface IRegisterResponse{
    statusCode:number,
    error:string,
    message:IRegisterResponseMessage[]
    timestamp: string,
    path:string
}

interface IRegisterResponseMessage{
    field: string,
    error:string,
}