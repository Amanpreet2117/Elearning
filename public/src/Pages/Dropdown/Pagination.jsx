// import React,{useState,useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'


// function Pagination() {
//     const[post,setpost]=useState([]);
//     const navigate=useNavigate();
//     const[showpg,setshowpg]=useState(5)
//     const[currntpg,setcurrntpg]=useState(1)

//     // const[showpg,setshowpg]=useState()
//     useEffect(()=>{
//         axios.get('https://dummyjson.com/products').then((res)=>{
//             setpost(res.data.products)
//         });

//     },[]);
//     console.log(post);
//     var showdetail=(id,images,title,description,price)=>{
//         navigate("/Paginationproduct",{state:{
//             id:id,
//             images:images,
//             title:title,
//             description:description,
//             price:price,
//         }})
//     }
//     var lastpg=currntpg*showpg;
//     var firstpg=lastpg-showpg;
//     var allshow=post.slice(firstpg,lastpg)
//     var pagino=[];
//     for(var i=1;i<=post.length/showpg;i++){
//      pagino.push(i)
//     }
//     console.log(pagino);
    
//     var changepage=(num)=>{
//        setcurrntpg(num)
//     } 
//     var prev=(e)=>{
//         setcurrntpg(e+1);
//     }
//     var next=(e)=>{
//         setcurrntpg(e+1);
//     }
//     return (
//         <>
//         <div className="Container">
//             <div className="row">
                
//                 {allshow.map((result)=>(
//                     <div className="col-lg-4 border">
//                     <h4><b>ID:</b>{result.id}</h4>
//                     <p><img src={result.images[0]}alt="" width="100%"height="200px"/></p>
//                         <h4><b>TITLE:</b>{result.title}</h4>
//                         <h6><b>Description:</b>{result.description}</h6>
//                         <h2><b>PRICE:</b>{result.price} <b>$</b></h2>
//                         <button className='btn btn-primary'>Add card</button>
//                         <button className='btn btn-primary' onClick={()=>showdetail(
//                             result.id,
//                             result.image[0],
//                             result.title,
//                             result.description,
//                             result.price,
//                         )}>view detail</button>

//                     </div> 
//                  ))}
//             </div>
//             <div className="row py-5">
//             <nav aria-label="Page navigation example">
//   <ul class="pagination">
//     <li class="page-item"><a class="page-link" href="#" onClick={()=>prev(currntpg)}>Previous</a></li>
//     {pagino.map((number)=>(
//     <li class="page-item"><a class="page-link" href="#" onClick={()=>changepage(number)}>{number}</a></li>

//     ))}
//     <li class="page-item"><a class="page-link" href="#" onClick={()=>next(currntpg)}>Next</a></li>
//   </ul>
// </nav>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Pagination
