"use client";
import { Button } from "@/ui/atoms";


export default function ButtonsDownload():React.ReactNode{
    const handleCreate = ():void =>{
        console.log("create")
    }
    const handleDownload = ():void =>{
        console.log("download")
    }
    return (
        <div className="content-buttons-download">
            <Button className="button-download" onClick={handleDownload}>
                Descargar Reporte
            </Button>
            <Button className="button-download-alt" onClick={handleCreate}>
                Nuevo Proyecto
            </Button>
        </div>
    )
}