import Allmainparts from "./Allmainparts"
import { useEffect, useState } from "react"

export default function Mainpart({handalShowdata}){
    const [alldata,setAldata]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setAldata(data))
    },[])
    return(
        <div className="grid lg:grid-cols-3 gap-10 ">
            {
               alldata.map(aldata=><Allmainparts aldata={aldata} key={aldata.id}  handalShowdata={handalShowdata}></Allmainparts>)
            }
</div>
)
}
