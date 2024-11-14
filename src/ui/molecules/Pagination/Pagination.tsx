"use client";

import { IconBack, IconNext } from "@/assets/icons";
import { IconPagination } from "@/ui/atoms";
import "./paginationStyles.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { useMetaDataState } from "@/app/core/application/global-state";

export default function Pagination():React.ReactNode{
    const router = useRouter();
    const searchParams = useSearchParams();
    const {metaData, setMetadata} = useMetaDataState((state)=>state);

    const handleChangePage = (page:number):void =>{
        setMetadata({...metaData, currentPage: page});
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.push(`/dashboard?${params.toString()}`);
    }
    return(
        <div className="content-pagination">
            <IconPagination
                icon={<IconBack />}
                onClick={()=>handleChangePage(metaData.currentPage - 1)} 
            />
            <span>{metaData.currentPage}</span>
            <span>de</span>
            <span>{metaData.totalPages}</span>
            <IconPagination
                icon={<IconNext />}
                onClick={()=>handleChangePage(metaData.currentPage + 1)}
            />
        </div>
    )
}