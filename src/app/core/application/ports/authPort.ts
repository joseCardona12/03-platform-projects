import { ILoginRequest, ILoginResponse } from "../dto/auth";


export default interface PAuth{
    login(data:ILoginRequest):Promise<ILoginResponse>
    // register(data:ILoginRequest):Promise<ILoginResponse>
}