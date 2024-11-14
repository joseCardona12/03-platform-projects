import { create } from "zustand";
import { IMetadata, IProject } from "../dto/projects";

interface IMetadataState  {
    metaData: IMetadata,
    setMetadata: (value: IMetadata) => void
}

export const useMetaDataState = create<IMetadataState>((set)=>({
    metaData: {
        totalItems: 0,
        itemCount: 0,
        itemsPerPage: 0,
        totalPages: 0,
        currentPage: 0,
    },
    setMetadata: (value) => set(state => ({...state, metaData: value })),
}))