"use client";

import { IMetadata, IProject } from "@/app/core/application/dto/projects";
import { useMetaDataState, useProjectState } from "@/app/core/application/global-state";
import { useEffect } from "react";

interface IProjectStateProps {
    projects: IProject[],
    metaData: IMetadata,
    children: React.ReactNode
}
export default function ProjectState({
    projects,
    metaData,
    children
}:IProjectStateProps):React.ReactNode{

    const {setProjects} = useProjectState((state)=>state);
    const {setMetadata} = useMetaDataState((state)=>state);
    
    useEffect(()=>{
        setProjects(projects);
        setMetadata(metaData); 
    },[projects, metaData])
    return (
        <>
        {children}
        </>
    )
}