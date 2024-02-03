import React, { useEffect, useState } from 'react'
import delIcon from '../assets/logo-delete.svg'
import editIcon from '../assets/logo-edit.svg'
import AccountForm from '../components/AccountForm'


export default function Account({setAuth}) {
  const [localData, setLocalData] = useState([])
  const [updateData, setUpdateData] = useState()
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [indexes, setIndexes] = useState("");
  
  
  useEffect(() => {
    const accountData =  localStorage.getItem("userdata");
    const data = JSON.parse(accountData)
    setLocalData([data]);
    setAuth(true)
  }, [])

  const handleDelete=(index)=>{
    const del = localData.filter((data,i)=>i !== index)
    setLocalData(del)
  }
  const handleEdit=(index)=>{
    setEdit(true)
    setShow(true)
    const editData = localData[index];
    console.log(editData);
    setUpdateData(editData)
    setIndexes(index)
    
  }
  const handleAdd=()=>{
    setShow(!show)
    setEdit(false)
  }

 


  return (
    <div className='account'>
      {
        show? <AccountForm indexes={setIndexes} updateData={updateData} edit={edit} setShow={setShow} setLocalData={setLocalData} localData={localData}/> : (
      <>
      <div className="create">
        <button type='submit' className="button" onClick={()=>handleAdd()}>
          +  New
        </button>
      </div>
      <div className="account-container">
        <div className="account-details grid5">
            <div  className="user">Name</div>
            <div  className="user">Email</div>
            <div  className="user">Contact</div>
            <div  className="user">Designation</div>
            <div  className="user">Action</div>
            {
              localData && localData.map((data,i)=>{
                return(
                  <>
                    <div  className="data" >{data.name}</div>
                    <div  className="data" >{data.email} </div>
                    <div  className="data" >{data.number}</div>
                    <div  className="data" >{data.desg}</div>
                    <div  className="action-logo">
                        <div className="edit logo" onClick={()=>handleEdit(i)}>
                            <img src={editIcon} className="editIcon" alt="editIcon" />
                        </div>
                        <div className="del logo" onClick={()=>handleDelete(i)}>
                          <img src={delIcon} className="delIcon" alt="delIcon" />
                        </div>
                    </div>
                  {/* // </div> */}
                  </>
                )
              })
            }
        </div>
      </div>
            </>)}
    </div>
  )
}
