import getApi from "../helpers/consumoApi"
import ImgItems from "../components/imgItems"
import { useState, useEffect } from "react";
import InputImg from "./inputImg";
const pintadoImg = ({valor})=>{
    const [infoApi,setInfoApi]=useState([]);
    useEffect(()=>{
        getApi(valor).then((newImages=>setInfoApi(newImages.hits)));
    },[valor]);

    return(
        <div>
            {
                infoApi.map((img)=>{
                    return <ImgItems key={img.id}{...img}/>
                })
            }
        </div>
    )
}

export default pintadoImg;