// const initialstate={
//     cardData:[]
// }
// const CARDDATA=(state=[],action)=>{
//     switch(action.type){
//         case "ADD_TO_CARD":
//         return[
//             ...state,
//             {cardData:action.data}
//         ]
//         case "DELETE_DATA":
//             return[
//                 ...state,
//                 {cardData:action.data}
//             ]
//         default:return state;
//     }
    
// }
// export default CARDDATA

const initialstate={
    cardData:[]
}
const CARDDATA=(state=[],action)=>{
    switch(action.type){
        case "ADD_TO_CARD":
        return[
            ...state,
            {cardData:action.data}
        ]
        case "DELETE_DATA":
            return[
                ...state,
                {cardData:action.data}
            ]
        default:return state;
    }
    
}
export default CARDDATA