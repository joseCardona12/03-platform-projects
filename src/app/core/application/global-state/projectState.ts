import { create } from "zustand";
import { IProject } from "../dto/projects";

interface IProjectState  {
    projects: IProject[],
    setProjects: (value: IProject[]) => void
}

export const useProjectState = create<IProjectState>((set)=>({
    projects: [],
    setProjects: (value) => set(state => ({...state, projects: value })),
}))