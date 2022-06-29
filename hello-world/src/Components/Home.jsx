import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
    const user ="Sweta"

  return (
    <div>
        <h1>I am Home page

        
        </h1>
        <Link to ={`/dashboard/${user}`}>Dashboard</Link>
        <Link to ={`/About?name=${user}`}>about</Link>

    </div>
  )
}

export default Home
