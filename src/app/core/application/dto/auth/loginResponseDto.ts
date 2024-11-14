export interface ILoginResponse{
    statusCode: number,
    message: string,
    data: ILoginResponseData
}

interface ILoginResponseData {
    access_token:string,
    user: ILoginResponseUser

}

interface ILoginResponseUser{
    email:string,
    sub:number,
    role:string,
    photo:string
}