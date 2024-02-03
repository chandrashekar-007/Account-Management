import React, { useEffect, useState } from 'react'

export default function AccountForm({indexes,setShow,localData,setLocalData,edit,updateData}) {
    const [accdata, setAccData] = useState([])

    const [account, setAccount] = useState({
        name:"",email:"",number:"",desg:""
    })
    useEffect(() => {
     if(updateData){
        setAccount({
            ...account,name:updateData.name,email:updateData.email,number:updateData.number,desg:updateData.desg
        })
        
     }
    }, [updateData])
    
    const handleChange=(e)=>{
        setAccount({
          ...account,
          [e.target.name]:e.target.value
        })
      }
      const handleSubmit=(e)=>{
        e.preventDefault();
        setLocalData([
            ...localData, account
        ])
        setAccount({
            name:"",email:"",number:"",desg:""
        })
    }
    const onCreate = ()=>{
        const goBack = confirm(" Do you want to go back ?")
        setTimeout(() => {
            if (goBack) setShow(false)
        }, 1000);
    }

    return (
        <>
        <div className='account-sec' id="account-form">
          <form onSubmit={handleSubmit}>
            <div className="title">Add Account</div>
            <div className="fields">
                <div className="name-field">
                    <input type="text" name="name" autoComplete='off' value={account.name} onChange={handleChange} placeholder="Enter name" required/>
                </div>
                <div className="email-field">
                    <input type="email" name="email" autoComplete='off' value={account.email} onChange={handleChange}  placeholder="Enter email"  required/>
                </div>
                <div className="contact-field">
                    <input type="tel" name="number" autoComplete='off' value={account.number} onChange={handleChange}  placeholder="Enter number"  required/>
                </div>
                <div className="desg-field">
                    <input type="text" name="desg" autoComplete='off' value={account.desg} onChange={handleChange}  placeholder="Enter designation"  required/>
                </div>
            </div>
            <button type='submit' className="button" onClick={onCreate}>
              {
                edit ? "Update" :  "Create"
                }
            </button>
            <button onClick={()=>setShow(false)} className="button" id="cancel">
              Cancel
            </button>
          </form>
        </div>
        </>
      )
}
