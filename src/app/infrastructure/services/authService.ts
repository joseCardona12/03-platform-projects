import { PAuth } from "@/app/core/application/ports";
import { ClientHttpUtil } from "../utils";
import { ILoginRequest, ILoginResponse } from "@/app/core/application/dto/auth";

export default class AuthService implements PAuth {
    private clientHttpUtil:ClientHttpUtil;
    private basePath:string = "auth";

    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    }

    async login(request: ILoginRequest):Promise<ILoginResponse>{
        const data = await this.clientHttpUtil.post<ILoginRequest, ILoginResponse>(`${this.basePath}/login`, request, "auth");
        return data;
    }

    async register(){
        
    }
}