import React ,{useState} from 'react'

const Events = () => {
    const [name,setName ]= useState(" ");
    const [data,setData ]= useState(
        {
            email :"",
            password:""
        }
    );
    const changeHandler  =e =>{
        setData ({...data,[e.target.name]:e.target.value})
    }
    const SubmitHandler = e=>{
        e.preventDefault();
        console.log(data)
    }
  return (
    <div>

        <button onClick ={()  =>  alert ("hello")}>Click meeeeee</button>
        Name:{name} <br></br>
        <input type ="text" name="name"  onChange={(e) => setName(e.target.value)}/>
        <form onSubmit={SubmitHandler}>
            <label style={{color:'blueviolet'}}>email</label>  <br />
            <input type ="text"  name ="email" onChange={changeHandler}/> <br />
            <label style={{color:"red"}}>Password</label>  <br />
            <input type ="password"  name="password"onChange={changeHandler}/> <br />
            <input type="submit" value= "Login" />



        </form>
      
    </div>
  )
}

export default Events
