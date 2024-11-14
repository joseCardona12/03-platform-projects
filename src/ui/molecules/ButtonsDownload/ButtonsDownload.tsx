"use client";
import { IconAddCircle, IconDocument } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import "./buttonDownloadStyles.scss";


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
              <IconDocument />
              Descargar Reporte
            </Button>
            <Button className="button-add" onClick={handleCreate}>
                <IconAddCircle />
                Nuevo Proyecto
            </Button>
        </div>
    )
}