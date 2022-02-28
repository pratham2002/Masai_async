import { COUNT_DECREMENT, COUNT_INCREMENT } from "./actionTypes";

    export const reducer = (state,{type,payload})=>{
        switch(type){
            case COUNT_INCREMENT:{
                return{...state,count:state.count+1}
            }
            case COUNT_DECREMENT:{
                return{...state,count:state.count-1}
            }
            default:{
                return state;
            }
        }
    };