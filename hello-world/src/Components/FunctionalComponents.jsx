import React , {useState }from 'react'


const FunctionalComponents = () => {
    const [data,setData] = useState({
        name1:"wow",
        age1: 20,
        email: "222QQ"
    });
    const{name1,age1}=data;

  return (
    <div>
      <h1>state in functional components using hooks, Name :{data.name1} ,age :{data.age1}</h1>
      <h1> deconstructing,Name :{name1} ,age :{age1}</h1>


    </div>
  )
}

export default FunctionalComponents
