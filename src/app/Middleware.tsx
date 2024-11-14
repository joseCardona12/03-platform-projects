"use client";

import { inputAlert } from "@/ui/atoms";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Middleware({children}: {children:React.ReactNode}){
    /*const {data:session,status} = useSession();
    console.log(session)
    const router = useRouter();

    if(!status === "loading"){
        setTimeout(()=>{
            inputAlert("Loading...", "success");
        }, 3000);

    }
    if(!session){
        router.push("/");
        inputAlert("You are not authenticated", "error");
        return;
    }*/

    return (
        <>
            {children}
        </>
    )
}