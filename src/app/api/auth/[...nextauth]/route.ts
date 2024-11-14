import { ILoginRequest } from "@/app/core/application/dto/auth";
import { PAuth } from "@/app/core/application/ports";
import AuthService from "@/app/infrastructure/services/authService";
import NextAuth, {NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthToken{
    id?:string,
    token?:string,
}

interface AuthUser extends User {
    email:string,
    name:string,
    token:string,
    photo:string,
    role:string

}

interface CustomSession extends Session {
    user: {
        id?:string,
        token?:string,
        name?:string | null,
        email:string | null,
        image?:string | null,
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider ({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Email"
                },
                password: {
                    label: "Password",
                    type:"password",
                    placeholder: "Password"
                }
            },
            authorize: async (credentials)=>{
                if (!credentials)return null;
                
                const data: ILoginRequest = {
                    email: credentials.email,
                    password: credentials.password
                };

                try{
                    
                    const authService:PAuth = new AuthService();
                    const user = await authService.login(data);

                    if(!user){
                        console.log({message: "Error to login"});
                        return;
                    }
                    return {
                        email: data.email,
                        id: (user.data.user.sub).toString(),
                        name: data.email,
                        token: user.data.access_token,
                        photo: user.data.user.photo,
                        role: user.data.user.role
                    } as AuthUser

                }catch(error:unknown){
                    console.log(error);
                    return {
                        id: 213,
                        message: "",
                        token:""
                    }  
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({token, user}){
            console.log(token, user);
            if(user){
                const authUser = user as AuthUser;
                token.id = authUser.id;
                token.token = authUser.token;
            }
            return token;
        },
        async session({session, token}){
            const customSession = session as CustomSession;
            const authToken = token as AuthToken;
            customSession.user.id = authToken.id;
            customSession.user.token = authToken.token;
            return session;
        }
    }
}

export default NextAuth(authOptions);
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);