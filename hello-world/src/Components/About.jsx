import React from 'react'
import {Link} from "react-router-dom"

import { useLocation } from 'react-router-dom'

const About = () => {
    let {search}=useLocation();
    console.log(search)
    let params=new URLSearchParams(search)
  return (
    <div>
      <h1>I am about page
        <p>Name :{params.get("name")}</p>

      </h1>
      <Link to ="/dashboard">Dashboard</Link>
        <Link to ="/">Home</Link>
    </div>
  )
}

export default About
