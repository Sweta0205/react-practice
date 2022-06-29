import React from 'react'
import { useState } from 'react'

const Database = () => {
    const[data,setData] = useState(
        {
            name2: " ",
            age2: " "

        })
        const changeHandler = e=>{ setData({...data,[e.target.name2]:e.target.value});}
        const submitHandler= e =>{ e.preventDefault();
            fetch('https://console.firebase.google.com/project/sweta-a5b82/database/sweta-a5b82-default-rtdb/data.json',
            {
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    "Content-type":"application/json"
                }

            }
            )
            .then(res=> alert("data posted")).catch(err =>console.log(err))
            
        
        }
    
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
            <label>name2</label> <br></br>
            <input type="text" name="name2" onChange={changeHandler}/>
            <label>age2</label> <br></br>
            <input type="text" ageData="age2"  onChange={changeHandler} />
            <input type="submit" value ="post data" />
            </form>
        </center>
      
    </div>
  )
}

export default Database
