"use client";
import { SectionCard, SectionProjects } from "@/ui/organisms";
import "./dashboardStyles.scss";
import { ICard } from "@/app/core/application/interfaces";
import { IconActive, IconDate, IconFolder, IconOrganize } from "@/assets/icons";
import { useMetaDataState } from "@/app/core/application/global-state";

export default function Dashboard():React.ReactNode{
    const {metaData} = useMetaDataState((state)=>state);
    const cards:ICard[]  = [
        {title: "Total Proyectos", icon: <IconFolder />, body: metaData.totalItems.toString()},
        {title: "Total Activos", icon: <IconActive />, body: metaData.itemCount.toString()},
        {title: "Organizadores", icon: <IconOrganize />, body: metaData.totalItems.toString()},
        {title: "Pròximo Proyecto", icon: <IconDate />, body: "Invalid Date"},
    ]
    return (
        <main className="content-dashboard">
            <SectionCard
                cards={cards}
            />
            <SectionProjects />
        </main>
    )
}