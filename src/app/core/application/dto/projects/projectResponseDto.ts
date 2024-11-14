export interface IProjectResponse {
    statusCode: number;
    message: string;
    data: IProject[];
    metadata: IMetadata;
  }
  export interface IMetadata {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  }
  export interface IProject {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    isActive: boolean;
    organizer: Organizer;
  }
  interface Organizer {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    photo?: string;
  }