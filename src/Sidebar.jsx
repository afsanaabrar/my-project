
export default function Sidebar({showdata,remaingcredit,totalcredit,totalprice}){
    const {course_name,credit}=showdata
    // console.log(showdata)
    
    return(
       <div className="bg-slate-100">
        <h1 className="text-cyan-500">Credit Hour Remaining:{remaingcredit} hr</h1><hr></hr>
          {
            showdata.map(showdatas=><li key={showdatas.id}>{showdatas.course_name}</li>)
          }
          <hr></hr>
          <h1>Total Credit Hour: {totalcredit}</h1>
        <hr></hr>
          <h1>Total Price: {totalprice}</h1>
        </div>
    )
}