import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

function MyAccount() {
 const [counter, setCounter] = useState(0);

 useEffect(()=>{
  console.log(counter);
 }, [counter]);

 const contar =() =>{
  setCounter(counter +1);
 }
 const {name} =useParams();
  return (
    <>
      <div className='bg-red-100'>
        <h1>hola</h1>
        <p>{name}</p>
         <h4>{counter}</h4>
         <button type="submit"  onClick={contar}>  Sumar</button>
      </div>
    </>
  )
}

export default MyAccount
