"use client";
import { Input } from "@/ui/atoms";
import { useState } from "react";
import "./titleSectionStyles.scss";
import { useProjectState } from "@/app/core/application/global-state";
import { IProject } from "@/app/core/application/dto/projects";
import { Util } from "@/app/core/application/utils";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";


interface ITitleProps{
    title:string,
}
export default function TitleSection ({
    title,
}:ITitleProps):React.ReactNode{

    const [search, setSearch] = useState<string>("");
    const {projects,setProjects} = useProjectState((state) => state);
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        const params = new URLSearchParams(searchParams.toString())
        const value = e.target.value;
        setSearch(value);
        const projectsFiltered: IProject[] = Util.searchProjectByTitle(projects, search);
        console.log("projectsFiltered", projectsFiltered);
        setProjects(projectsFiltered);
        params.set("search", value.toString())
        router.refresh();
    }
    return (
        <div className="content-title">
            <h4 className="title-section">{title}</h4>
            <Input
                placeholder="Buscar proyectos..."
                type="search"
                width="30%"
                onChange={(e)=>handleChange(e)}
            />
        </div>
    )
}