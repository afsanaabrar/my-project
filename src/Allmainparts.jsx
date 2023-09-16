import {BsBook } from 'react-icons/bs';


export default function Allmainparts({aldata,handalShowdata}){
    const {course_name,credit,details,id,img,price}=aldata

    //  console.log(aldata)
    return(
        <div className='card ml-20 lg:ml-0 bg-slate-200'>
    
       <img src={img} className='w-full'></img>
       <p className="font-bold text-lg w-full mt-3">{course_name}</p>
       <p className="w-full mt-3 w-full">{details}</p>
       <div className="flex gap-3 mt-3">
        <p>$ Price: {price}</p>
         <p><BsBook></BsBook></p> 
        <p >Credit: {credit} hr</p>
       </div>
       <button className='bg-blue-700 text-white w-full mt-5 rounded-md' onClick={()=>handalShowdata(aldata)}>Select</button>
           </div>
    )
}

