import {useEffect} from "react";

export  default function  Timer({second,dispatch}){
    const mins = Math.floor(second/60);
    const sec = second % 60;
    useEffect(()=>{
       const id =  setInterval(()=> {
            dispatch({type:'timer'})
        },1000)

        return ()=>{
           clearInterval(id)
        }
    },[])
    return <div className='timer'>{mins<10 ? '0': ''}{mins}: {sec<10 ? '0': ''}{sec}</div>
}