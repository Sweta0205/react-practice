import React from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom'

const Dashboard = () => {
    let params=useParams();

  return (
    <div>
        <h1>I am Dashboard page
        
        </h1>
       <p> Name:{params.name}</p> 
        <Link to ="/">Home</Link>
        <Link to ="/About">about</Link>
    </div>

  )
}

export default Dashboard
