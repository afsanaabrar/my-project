import Sidebar from './Sidebar'
import Mainpart from './Mainpart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import { useState } from 'react'
 



function App() {
  const [showdata,setShowdata]=useState([])
  const [remaingcredit,setRemaingcredit]=useState(0)
  const [totalcredit,setTotalcredit]=useState(0)
  const [totalprice,setTotalprice]=useState(0)
  

  const handalShowdata=pera=>{
     const isExiset=showdata.find(item=>item.id==pera.id)
     let count=pera.credit
    let price=pera.price;
     if(isExiset){
      return toast('its already selected,so dont again select')
     }
      else{
      showdata.forEach(item=>count +=item.credit);
      showdata.forEach(item=>price +=item.price);
     }
     const totalcreditRemaing=20-count;

    if(count>20){
     return toast("select credit bigger then 20")
    }

    
     setTotalprice(price)
    setRemaingcredit(totalcreditRemaing)
    setTotalcredit(count)
     setShowdata( [...showdata,pera])
  }
  
  
  return (
    <>
    <h1 className='text-3xl w-[300px] mx-auto mt-14'>Course Registration</h1>
    <div className='max-w-screen-xl mx-auto lg:flex gap-5 mt-16'>
    <div className='w-3/4'>
    <Mainpart handalShowdata={handalShowdata}></Mainpart>
    </div>
    <div >
    <Sidebar showdata={showdata} remaingcredit={remaingcredit} totalcredit={totalcredit} totalprice={totalprice}></Sidebar>
    </div>
    </div>
    <ToastContainer />
 </>
  )
}

export default App
