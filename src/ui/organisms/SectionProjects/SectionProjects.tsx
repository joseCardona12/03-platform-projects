
"use client";
import { Pagination, TitleSection } from "@/ui/molecules";
import "./sectionProjectsStyles.scss";
import Table from "../Table/Table";
import { useProjectState } from "@/app/core/application/global-state";

export default function SectionProjects():React.ReactNode{
    const {projects} = useProjectState((state)=>state);
    return (
        <section className="section-projects">
            <TitleSection
                title="Lista de proyectos"
            />
            <Table
                columns={["Tìtulo", "Descripciòn", "Fecha de Inicio", "Fecha de Fin", "Estado", "Organizador"]}
                rows={projects}
            />
            <Pagination />
        </section>
    )
}