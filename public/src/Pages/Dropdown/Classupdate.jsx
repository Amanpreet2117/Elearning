// import React, { PureComponent } from 'react'

// class Classupdate extends PureComponent {
//     constructor(props) {
//         super(props)
//         console.warn("this is constructor");

//         this.state = {
//             count:0
//         }
//     }
//     componentDidUpdate(preprops,prestate,presnep){
//         console.log("component update",{prestate});
//     }
//     componentDidMount(){
//         console.log("this is mount");
//     }

//     render() {
//         console.log("this is rander")

//         return (
//            <>

//            <h1>this is rndr{this.state.count}</h1>
//            <button onClick={()=>{this.setState({count:this.state.count+1})}}>click me</button>
//            </> 
//         )
//     }
// }

// export default Classupdate