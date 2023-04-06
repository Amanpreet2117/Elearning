import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom" 
import { useDispatch } from 'react-redux'
import { Addtocard } from '../../Action'



function Useffectapi() {
    const[post,setpost]=useState([])
    const Navigate=useNavigate()
    const [cpdata,setcpdata]=useState(5)
    const [cpshow,setcpshow]=useState(1)
    const usemedis=useDispatch();
    // const mydata=useSelector((state)=>state.CARDDATA)

useEffect(()=>{
    fetch('https://dummyjson.com/products').then((res)=>{
        return res.json()
    }).then((data)=>{
        setpost(data.products)
    })
  },[])
//   ...start...usenavigate and location............
    var navbtn=(id,images,title,description,price)=>{
        Navigate("/Useffectprodut",{state:{
            id:id,
            images:images,
            title:title,
            description:description,
            price:price,
        }})
    }
// ............end....................
    // .....start.....pagination..........
  let pageno=[];
  for(let i=1;i<=post.length/cpdata;i++){
   pageno.push(i)
  }
  //.....pagination logic start.......
  let lastpg=cpdata*cpshow;
  let fistpg=lastpg-cpdata;
  let realpg= post.slice(fistpg,lastpg)
// ..........end..................
var paginationshow=(num)=>{
setcpshow(num)
}
// ..................................
var prev=(cpshow)=>{
    if(cpshow<2){
        setcpshow(6)
    }else{
        setcpshow(cpshow-1)
    }
    
}
var next=(cpshow)=>{
    if(cpshow>5){
        setcpshow(1)
    }else{
        setcpshow(cpshow+1)
    }
}

    return (
        <>
        <div className="container">
            <div className="row">
                {realpg.map((result)=>(
                    <div className="col-lg-4 border">
                        <h4><b>ID:</b>{result.id}</h4>
                        <p><img src={result.images[0]}alt="" width="100%"height="200px"/></p>
                        <h4><b>TITLE:</b>{result.title}</h4>
                        <h6><b>Description:</b>{result.description}</h6>
                        <h2><b>PRICE:</b>{result.price} <b>$</b></h2>

                        <button className='btn btn-primary'onClick={()=>usemedis(Addtocard({
                            id:result.id,
                            title:result.title
                        }
                            
                         ))} >ADD card</button> 
                         <button className='btn btn-primary mx-2' onClick={()=>navbtn(
                         result.id,
                         result.images[1],
                         result.title,
                         result.description,
                         result.price,
                        )}>VIEW DETAILS</button>
                    </div>
                ))}
            </div>
            <div className="row">
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" onClick={()=>prev(cpshow)}>Previous</a></li>
    {pageno.map((pnumber)=>(
    <li class="page-item"><a class="page-link" href="#" onClick={()=>paginationshow(pnumber)}>{pnumber}</a></li>
    ))}
    <li class="page-item"><a class="page-link" href="#" onClick={()=>next(cpshow)}>Next</a></li>
  </ul>
</nav>
            </div>
        </div>
        </>
    )
}

export default Useffectapi
